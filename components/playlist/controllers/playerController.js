class PlayerController extends ControllerBaseState {
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
