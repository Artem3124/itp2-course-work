// Controller class for handling visualization menu interactions
class VisualizationMenuController extends ControllerBaseState {
    /** 
     * Constructor function for VisualizationMenuController.
     * 
     * @param {Component} component - The component associated with the controller.
     */
    constructor(component) {
        // Call the constructor of the parent class with the component
        super(component);
    }

    /**
     * Function to handle mouse click event.
     */
    mouseClicked() {
        // Check if any item in the visualization menu is clicked
        const index = this.someIsInBorder(
            this.component.items
        );
        // If an item is clicked, set the visualization
        if (index != -1) {
            this.component.setVisualization(index);
        }
    }
}
