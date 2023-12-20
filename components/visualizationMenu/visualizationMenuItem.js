class VisualizationMenuItem extends Item { 
    constructor(visualizer, name, id, layout) { 
        super(name, id, layout);
        this.visualizer = visualizer;
    }

    render() { 
        this.layout.render();
        textSize(18);
        stroke(0);
        this.selectedUnselectedRender();
        fill(233, 235, 237);
        text(
            this.name,
            this.layout.x + this.layout.width / 2 - 30,
            this.layout.y + this.layout.height / 2
        );
    }
}