class VisualizationMenuController extends ControllerBaseState {
    constructor(component) {
        super(component);
    }

    mouseClicked() {
        const index = this.someIsInBorder(
            this.component.items
        );
        if (index != -1) {
            this.component.setVisualization(index);
        }
    }
}
