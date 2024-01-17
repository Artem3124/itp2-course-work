class VisualizerController extends ControllerBaseState {
    #scaleFactor;
    #sensitivityY;
    #sensitivityX;
    #sensitivityZ;

    constructor(component, visualizer) {
        super(component);
        this.visualizer = visualizer;
        this.#scaleFactor = 100;
        this.#sensitivityY = 1;
        this.#sensitivityX = 2;
        this.#sensitivityZ = 0.1;
    }

    mouseDragged() {
        const deltaTheta = (-this.#sensitivityX * (mouseX - pmouseX)) / this.#scaleFactor;
        const deltaPhi = (this.#sensitivityY * (mouseY - pmouseY)) / this.#scaleFactor;
        //this.visualizer.layer.camera()
        
        //this.visualizer.layer.camera._orbit(deltaTheta, deltaPhi, 0);
    }

    _orbit() { 

    }
}
