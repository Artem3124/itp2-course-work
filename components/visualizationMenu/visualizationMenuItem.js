// Represents a visualization menu item
class VisualizationMenuItem extends Item {
    /** 
     * Constructor function for VisualizationMenuItem.
     * 
     * @param {Visualizer} visualizer - The visualizer associated with the menu item.
     * @param {string} name - Name of the menu item.
     * @param {number} id - Unique identifier for the menu item.
     * @param {Object} layout - Layout object containing x, y, width, height properties.
     */
    constructor(visualizer, name, id, layout) {
        // Call the constructor of the parent class with name, id, and layout
        super(name, id, layout);
        // Initialize visualizer property
        this.visualizer = visualizer;
    }

    /**
     * Function to render the visualization menu item.
     */
    render() {
        // Render the layout
        this.layout.render();
        // Set text size and stroke color
        textSize(18);
        stroke(0);
        // Render selected/unselected state
        this.selectedUnselectedRender();
        // Set fill color and render the name text
        fill(233, 235, 237);
        text(
            this.name,
            this.layout.x + this.layout.width / 2 - 30,
            this.layout.y + this.layout.height / 2
        );
    }

    /**
     * Function to resize the visualization menu item.
     */
    resize() {
        // Adjust layout properties
        this.layout.width = 0.2 * (width - 301);
        this.layout.height = 0.2 * (0.25 * height);
        this.layout.y = (0.75 * height) + (this.id + 1) * (0.2 * (0.25 * height));
        this.layout.x = 0;
        // Check if the item exceeds the window height and adjust position accordingly
        if (this.layout.y + this.layout.height > height) {
            this.layout.y = (0.75 * height) + (0.2 * (0.25 * height));
            this.layout.x = 0.2 * (width - 301); 
        }
        // Recalculate borders
        this.calculateBorders();
    }

}
