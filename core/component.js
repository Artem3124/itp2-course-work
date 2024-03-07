// Base class for all objects that will have their own space on the canvas
class Component extends Renderable {
    /** 
     * Constructor function for Component.
     * 
     * @param {Object} layout - Layout object containing width, length, stroke, bgColor, x, y properties.
     * @param {Item[]} items - Array of items associated with the component.
     */
    constructor(layout) {
        super();
        // Initialize layout with provided properties
        this.layout = new Layout(
            layout.x,
            layout.y,
            layout.width,
            layout.height,
            layout.strokeColor,
            layout.bgColor,
            layout.transparent,
        );
        // Calculate borders based on layout
        this.borders = {
            left: this.layout.x,
            top: this.layout.y,
            right: this.layout.x + layout.width,
            bottom: this.layout.y + layout.height
        };
    }

    /**
     * Function to render the component.
     */
    render() { 
        // Implementation specific to child classes
    }

    /**
     * Function to render the layout of the component.
     */
    renderLayout() { 
        this.layout.render();
    }

    /**
     * Function to handle resizing of the component.
     */
    resize() {
        // Implementation specific to child classes
    }

    /**
     * Function to perform cleanup operations when the component is destroyed.
     */
    onDestroy() {
        this.onDestroyBase();
    }
}

