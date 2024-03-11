describe ('Renderer', () => {
    let service;

    beforeEach(() => {
        service = new Renderer();
        Renderable.instances = [];
    });

    it ('should create', () => {
        expect(service).toBeTruthy();
    });

    it ('update should set objects to render', () => {
        const objectsToRender = [
            { propertyA: '424', propertyB: 13 },
            { propertyA: 'fsd', propertyB: 0 },
            { propertyA: 'string', propertyB: 43214 },
        ];

        service.update(objectsToRender);

        expect(service.objectsToRender).toEqual(objectsToRender);
    });

    it ('resizeAll should call resize for objects to render that are instance of Renderable', () => {
        const renderables = [
            new RenderableStub(),
            new RenderableStub(),
            new NonRenderableStub(),
            new RenderableStub(),
            new NonRenderableStub(),
        ];
        const spyObjects = renderables.map(r => spyOn(r, 'resize')); 
        service.objectsToRender = renderables;

        service.resizeAll();
        
        expect(spyObjects[0]).toHaveBeenCalledTimes(1);
        expect(spyObjects[1]).toHaveBeenCalledTimes(1);
        expect(spyObjects[2]).toHaveBeenCalledTimes(0);
        expect(spyObjects[3]).toHaveBeenCalledTimes(1);
        expect(spyObjects[4]).toHaveBeenCalledTimes(0);
    });

    it ('renderAll should call renderLayout for components and render for renderables', () => {
        const renderables = [
            new RenderableStub(),
            new RenderableStub(),
            new RenderableStub(),
        ];
        const components = [
            new Component({strokeColor: 1, bgColor: 4}),
            new Component({strokeColor: 43, bgColor: 52}),
        ];
        const nonRenderables = [
            new NonRenderableStub(),
            new NonRenderableStub(),
        ];
        nonRenderables.forEach(r => Renderable.instances.push(r));
        const renderableSpys = renderables.map(r => spyOn(r, 'render'))
        const componentSpys = components.map(c => spyOn(c, 'renderLayout'));
        const nonRenderableSpys = nonRenderables.map(r => spyOn(r, 'render'));
        const nonComponentSpys = nonRenderables.map(r => spyOn(r, 'renderLayout'));

        service.renderAll();

        renderableSpys.forEach(r => expect(r).toHaveBeenCalledTimes(1));
        componentSpys.forEach(r => expect(r).toHaveBeenCalledTimes(1));
        nonRenderableSpys.forEach(r => expect(r).toHaveBeenCalledTimes(0));
        nonComponentSpys.forEach(r => expect(r).toHaveBeenCalledTimes(0));
    });
});

class NonRenderableStub {
    resize() {

    }

    render() {

    }

    renderLayout() {
        
    }
}

class RenderableStub extends Renderable {
    resize() {

    }

    render() {

    }
}