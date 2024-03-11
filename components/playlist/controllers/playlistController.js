// Controller class for handling playlist interactions
class PlaylistController extends ControllerBaseState {
    /** 
     * Constructor function for PlaylistController.
     * 
     * @param {Component} component - The component associated with the controller.
     */
    constructor(component) {
        super(component);
    }

    /**
     * Function to handle mouse click event.
     */
    mouseClicked() {
        // Check if any item in the playlist is clicked
        const index = this.someIsInBorder(
            this.component.items
        );
        // If an item is clicked, set the track
        if (index != -1) {
            this.component.setTrack(index);
        }
    }

    /**
     * Function to handle button press event.
     */
    buttonPressed() {}
}
