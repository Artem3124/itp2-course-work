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
        rect(
            this.borders.left,
            this.borders.top,
            this.borders.right - this.borders.left,
            this.borders.bottom - this.borders.top
        );
        stroke(0, 0, 0);
        fill(233, 235, 237);
        text(
            this.name,
            this.layout.x + this.layout.width / 2 - 30,
            this.layout.y + this.layout.height / 2
        );
    }

    resize() {
        this.layout.width = 0.2 * (width - 301);
        this.layout.height = 0.2 * (0.25 * height);
        this.layout.y = (0.75 * height) + (this.id + 1) * (0.2 * (0.25 * height));
        this.layout.x = 0;
        if (this.layout.y + this.layout.height > height) {
            this.layout.y = (0.75 * height) + (0.2 * (0.25 * height));
            this.layout.x = 0.2 * (width - 301); 
        }
        this.calculateBorders();
    }

}
