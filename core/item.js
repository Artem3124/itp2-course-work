// Represents an item in the visualization menu
class Item extends NonControllingComponent {
    // Private fields
    #isSelected = false;

    /** 
     * Constructor function for Item.
     * 
     * @param {string} name - The name of the item.
     * @param {number} id - The unique identifier of the item.
     * @param {Object} layout - Layout object containing x, y, width, height properties.
     */
    constructor(name, id, layout) {
        super(layout);
        // Initialize item properties
        this.name = name;
        this.id = id;
        this.layout = new Layout(
            layout.x,
            layout.y,
            layout.width,
            layout.height,
            layout.strokeColor,
            layout.bgColor,
            layout.transparent
        );
        // Set initial borders
        this.calculateBorders();
    }

    // Public methods

    /**
     * Toggles the selection state of the item.
     */
    selectOrUnselect() {
        this.#isSelected = !this.#isSelected;
    }

    /**
     * Checks if the item is currently selected.
     * 
     * @returns {boolean} - Returns true if the item is selected, false otherwise.
     */
    isSelected() {
        return this.#isSelected;
    }

    /**
     * Renders the item based on its selection state.
     * 
     * This method renders the item's layout, text, and background color based on whether the item is selected or not.
     * It also sets the text size, stroke, and fill properties.
     * 
     * @private
     */
    selectedUnselectedRender() {
        if (this.#isSelected) {
            this.layout.bgColor = color(146, 165, 179);
        } else {
            this.layout.bgColor = color(43, 48, 55);
        }
    }

    /**
     * Calculates the borders of the item.
     * 
     * This method calculates the left, top, right, and bottom borders of the item based on its layout.
     * The calculated borders are stored in the borders property.
     * 
     * @private
     */
    calculateBorders() { 
        this.borders = { 
            left: this.layout.x,
            top: this.layout.y,
            right: this.layout.x + this.layout.width,
            bottom: this.layout.y + this.layout.height
        }
    }

    /**
     * Renders the item based on its selection state.
     */
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
