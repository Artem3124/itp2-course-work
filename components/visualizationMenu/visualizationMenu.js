// Define a class named VisualizationMenu that extends ControllingComponent
class VisualizationMenu extends ControllingComponent {
    /**
     * Constructor function for VisualizationMenu.
     * 
     * @param {Object} layout - Layout object containing x, y, width, height properties.
     */
    constructor(layout) {
        // Call the constructor of the parent class with layout and an empty array
        super(layout, []);
        // Create a VisualizationSection instance
        this.visualizationSection =
            new VisualizationSection({
                // Set properties for the VisualizationSection instance
                x: 0,
                y: 0,
                width: width - 301,
                height: 0.75 * height,
                ...[], // Additional properties (empty in this case)
            });
        // Create a VisualizationMenuController instance
        this.controller = new VisualizationMenuController(
            this
        );
    }

    /**
     * Initializes visualizations for the menu.
     */
    initializeVisualizations() {
        // Create an array of VisualizationMenuItem instances
        this.items = [
            new VisualizationMenuItem(
                new Needles(
                    0,
                    this.visualizationSection.layout
                ),
                "Needles",
                0,
                {
                    x: this.layout.x,
                    y: this.layout.y + 0.2 * this.layout.height,
                    width: 0.2 * this.layout.width,
                    height: 0.2 * this.layout.height,
                    ...[],// Additional properties (empty in this case)
                }
            ),
            new VisualizationMenuItem(
                new Spectrum(
                    1,
                    this.visualizationSection.layout
                ),
                "Spectrum",
                1,
                {
                    x: this.layout.x,
                    y: this.layout.y + 2 * (0.2 * this.layout.height),
                    width: 0.2 * this.layout.width,
                    height: 0.2 * this.layout.height,
                    ...[],// Additional properties (empty in this case)
                }
            ),
            new VisualizationMenuItem(
                new WavePattern(
                    2,
                    this.visualizationSection.layout
                ),
                "WavePattern",
                2,
                {
                    x: this.layout.x,
                    y: this.layout.y + 3 * (0.2 * this.layout.height),
                    width: 0.2 * this.layout.width,
                    height: 0.2 * this.layout.height,
                    ...[],// Additional properties (empty in this case)
                }
            ),
            new VisualizationMenuItem(
                new CyberWall(
                    3,
                    this.visualizationSection.layout
                ),
                "CyberWave",
                3,
                {
                    x: this.layout.x,
                    y: this.layout.y + 4 * (0.2 * this.layout.height),
                    width: 0.2 * this.layout.width,
                    height: 0.2 * this.layout.height,
                    ...[],// Additional properties (empty in this case)
                }
            ),
            new VisualizationMenuItem(
                new ThreeDimensional(
                    4,
                    this.visualizationSection.layout
                ),
                "ThreeDimensional",
                4,
                {
                    x: this.layout.x + 0.2 * this.layout.width,
                    y: this.layout.y + (0.2 * this.layout.height),
                    width: 0.2 * this.layout.width,
                    height: 0.2 * this.layout.height,
                    ...[], // Additional properties (empty in this case)
                }
            )
        ];
        // Set the visualization to the first item
        this.setVisualization(0);
    }
    /**
     * Sets the visualization to display.
     * 
     * @param {number} id - The ID of the visualization to set.
     */
    setVisualization(id) {
        this.visualizationSection.setVisualization(
            this.items[id]
        );
    }
    /**
         * Renders the visualization menu.
         */
    render() {
        this.renderHeader();
    }

    /**
     * Resizes the visualization menu.
     */
    resize() {
        // Adjust layout properties
        this.layout.x = 0;
        this.layout.y = 0.75 * height;
        this.layout.width = width - 301;
        this.layout.height = 0.25 * height;
    }

    /**
     * Renders the header of the visualization menu.
     */
    renderHeader() {
        // Draw header background
        stroke(this.layout.strokeColor);
        fill(this.layout.bgColor);
        rect(
            this.layout.x,
            this.layout.y,
            0.2 * this.layout.width,
            0.2 * this.layout.height
        );
        // Draw header text
        stroke(0, 0, 0, 0);
        fill(233, 235, 237);
        textSize(20);
        text(
            "Visualization Menu",
            this.layout.x + 0.02 * this.layout.width,
            this.layout.y + 0.1 * this.layout.height
        );
    }
}
