class Renderer { 
    /*
    Class is responsible for rendering all the renderable objects
    */
    constructor() {
        // collection of objects implements renderable
    } 

    update(objectsToRender) { 
        this.objectsToRender = objectsToRender;
    }

    renderAll() { 
        const objToRender = Renderable.instances;
        for(let i = 0; i < objToRender.length; i++) { 
            let object = objToRender[i];
            if (this.#isComponent(object)) { 
                object.renderLayout();
            }

            if (this.#isRenderable(object)) { 
                object.render();
            }
        }
    }
    
    resizeAll() { 
        const objToRender = Renderable.instances;
        for(let i = 0; i < objToRender.length; i++) { 
            let object = objToRender[i];
            if (this.#isComponent(object)) { 
                object.renderLayout();
            }

            if (this.#isRenderable(object)) { 
                object.resize();
            }
        }
    }

    #isRenderable(object) { 
       return object instanceof Renderable;
    }

    #isComponent(object) { 
        return object instanceof Component;
    } 
}
