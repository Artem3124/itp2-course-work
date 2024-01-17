class VisualizationSection extends ControllingComponent {
    #currentVisualizer;

    constructor(layout) {
        super(layout);
    }

    setVisualization(visualization) {
        this.#currentVisualizer?.selectOrUnselect();
        this.#currentVisualizer = visualization;
        this.#currentVisualizer.visualizer.setup();
        this.controller = new VisualizerController(this, this.#currentVisualizer.visualizer);
        this.#currentVisualizer.selectOrUnselect();
    }

    render() {
        this.#currentVisualizer.visualizer.visualize();
    }
}
