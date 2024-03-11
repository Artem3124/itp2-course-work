// Component responsible for displaying visualizations
class VisualizationSection extends ControllingComponent {
    // Private field
    #currentVisualizer;

    /** 
     * Constructor function for VisualizationSection.
     * 
     * @param {Object} layout - Layout object containing x, y, width, height properties.
     */
    constructor(layout) {
        super(layout);
    }

    /**
     * Function to set the current visualization.
     * 
     * @param {Visualization} visualization - The visualization to set.
     */
    setVisualization(visualization) {
        if (!this.isVisualizationMenuItem(visualization)) {
            throw new Error("Invalid variable type: visualization must be of type VisualizationMenuItem.");
        }

        // Deselect the current visualizer if exists
        this.#currentVisualizer?.selectOrUnselect();
        // Set the new visualization
        this.#currentVisualizer = visualization;
        // Setup and select the new visualization
        this.#currentVisualizer.visualizer.setup();
        this.#currentVisualizer.selectOrUnselect();
    }

    /**
     * Function to render the visualization.
     */
    render() {
        // Render the current visualization
        this.#currentVisualizer.visualizer.visualize();
    }

    /**
     * Function to handle resizing of the visualization section.
     */
    resize() {
        // Adjust layout properties
        this.layout.x = 0;
        this.layout.y = 0;
        this.layout.width = width - 301;
        this.layout.height = 0.75 * height;
    }

    isVisualizationMenuItem(visualizer) { 
        return visualizer instanceof VisualizationMenuItem; 
    }
}

