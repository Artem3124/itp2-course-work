// Base controller class, dynamically created for each controllable component,
// if the controllable class has no concrete controllers
class ControllerBaseState {
    /* 
     * Constructor function for ControllerBaseState.
     * 
     * @param {ControllableComponent} component - Instance of ControllableComponent class.
     */
    constructor(component) {
        this.component = component;
    }

    /**
     * Function to set the context.
     * 
     * @param {Object} context - The context to set.
     */
    setContext(context) {
        this.context = context;
    }

    /**
     * Function to handle mouse click event.
     */
    mouseClicked() {
        console.error("Instance has no implementation");
    }

    /**
     * Function to handle mouse dragged event.
     */
    mouseDragged() {
        console.error("Instance has no implementation");
    }

    /**
     * Function to handle button pressed event.
     */
    buttonPressed() {
        console.error("Instance has no implementation");
    }

    /**
     * Function to check if the mouse is in the border of a collection of elements.
     * 
     * @param {Array} collection - The collection of elements to check.
     * @returns {number} - The index of the element if the mouse is in its border, otherwise -1.
     */
    someIsInBorder(collection) {
        for (let i = 0; i < collection.length; i++) {
            if (
                mouseX > collection[i].borders.left &&
                mouseX < collection[i].borders.right &&
                mouseY > collection[i].borders.top &&
                mouseY < collection[i].borders.bottom
            ) {
                return i;
            }
        }

        return -1;
    }

    /**
     * Function to check if the mouse is in the border of a specific element.
     * 
     * @param {string} elementName - The name of the element.
     * @returns {boolean} - True if the mouse is in the border of the element, otherwise false.
     */
    isInBorder(elementName) {
        return (
            mouseX >
                this.component.itemsBorders[elementName]
                    .left &&
            mouseX <
                this.component.itemsBorders[elementName]
                    .right &&
            mouseY >
                this.component.itemsBorders[elementName]
                    .top &&
            mouseY <
                this.component.itemsBorders[elementName]
                    .bottom
        );
    }
}
