class PlayerController extends ControllerBaseState {
    /** 
    * Controller class fires an appropriate action, when items
    * touched in controller's borders. 
* @param {Component} component - The component associated with the controller.
     */
    constructor(component) {
        super(component);
    }

    /**
     * Function to handle mouse click event.
     */
    mouseClicked() {
        // Check if the playButton is clicked
        if (this.isInBorder("playButton")) {
            this.component.hitCheck();
        }

        // Check if the nextTrackButton is clicked
        if (this.isInBorder("nextTrackButton")) {
            this.component.nextTrack();
        }

        // Check if the previousTrackButton is clicked
        if (this.isInBorder("previousTrackButton")) {
            this.component.previousTrack();
        }
    }

    /**
     * Function to handle button press event.
     */
    buttonPressed() {
        console.log("sdf");
    }
}
