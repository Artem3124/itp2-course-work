class PlayerController extends ControllerBaseState {
    /** 
    * Controller class fires an appropriate action, when items
    * touched in controller's borders. 
    * @param component: Component
    *  
    */
    constructor(component) {
        super(component);
    }

    mouseClicked() {
        if (this.isInBorder("playButton")) {
            this.component.hitCheck();
        }

        if (this.isInBorder("nextTrackButton")) {
            this.component.nextTrack();
        }

        if (this.isInBorder("previousTrackButton")) {
            this.component.previousTrack();
        }
    }

    buttonPressed() {
        console.log("sdf");
    }
}
