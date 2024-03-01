class VisualizationSection extends ControllingComponent {
    #currentVisualizer;

    constructor(layout) {
        super(layout);
    }

    setVisualization(visualization) {
        this.#currentVisualizer?.selectOrUnselect();
        this.#currentVisualizer = visualization;
        this.#currentVisualizer.visualizer.setup();
        this.#currentVisualizer.selectOrUnselect();
    }

    render() {
        this.#currentVisualizer.visualizer.visualize();
    }

    resize() {
        this.layout.x = 0;
        this.layout.y = 0;
        this.layout.width = width - 301;
        this.layout.height = 0.75 * height;
    }
}
