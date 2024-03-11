// Context class for managing controller states
class ControllerContext {
    // Private field
    #state;

    /**
     * Constructor function for ControllerContext.
     */
    constructor() {
        // Initialize private field with a default ControllerBaseState instance
        this.#state = new ControllerBaseState();
    }

    /**
     * Function to change the controller state.
     * 
     * @param {ControllerBaseState} state - The new controller state.
     */
    changeController(state) {
        // Set the new controller state and set the context
        this.#state = state;
        this.#state.setContext(this);
    }

    /**
     * Function to track mouse movement and change controller state accordingly.
     */
    trackMouse() {
        // Iterate over renderable instances
        const instances = Renderable.instances;
        for (let i = 0; i < Renderable.instances.length; i++) {
            // Check if the instance is a controllable component
            if (instances[i] instanceof ControllingComponent) {
                // Check if the mouse is in the borders of the component's layout
                if (this.#isInBorders(instances[i].layout)) {
                    // Change the controller to the component's controller
                    this.changeController(instances[i]?.controller);
                }
            }
        }
    }

    /**
     * Function to check if the mouse is in the borders of a layout.
     * 
     * @param {Object} layout - The layout object containing x, y, width, and height properties.
     * @returns {boolean} - True if the mouse is in the borders, otherwise false.
     */
    #isInBorders(layout) {
        // Calculate borders of the layout
        const borders = {
            left: layout.x,
            top: layout.y,
            right: layout.x + layout.width,
            bottom: layout.y + layout.height,
        };

        // Check if the mouse is within the borders
        return (
            mouseX > borders.left &&
            mouseX < borders.right &&
            mouseY > borders.top &&
            mouseY < borders.bottom
        );
    }

    /**
     * Function to handle mouse click event.
     */
    mouseClicked() {
        this.#state.mouseClicked();
    }

    /**
     * Function to handle mouse dragged event.
     */
    mouseDragged() {
        this.#state.mouseDragged();
    }

    /**
     * Function to handle button pressed event.
     */
    buttonPressed() {
        this.#state.buttonPressed();
    }
}
