class Component extends Renderable {
    /**
     *This class needed to bound all objects that will have their own space on the canvas
     *@param layout: { width: number, length: number, stroke: color() p5.js, bgColor: color() p5.js, x: number, y: number};
     *@param items: Item[];
     */
    constructor(layout) {
        super();
        this.layout = new Layout(
            layout.x,
            layout.y,
            layout.width,
            layout.height,
            layout.strokeColor,
            layout.bgColor,
            layout.transparent,
        );
        this.borders = {
            left: this.layout.x,
            top: this.layout.y,
            right: this.layout.x + layout.width,
            bottom: this.layout.y + layout.height
        } 
    }

    render() { 

    }

    renderLayout() { 
        this.layout.render();
    }

//    resize() {
//        
//    }


    onDestroy() {
        this.onDestroyBase();
    }
}
