class ControllerContext {
    #state
    constructor() {
        this.#state = new ControllerBaseState();
    }

    changeController(state) { 
        this.#state = state;
        this.#state.setContext(this);
    }

    trackMouse() { 
        const instances = Renderable.instances;
        for (let i = 0; i < Renderable.instances.length; i++) { 
            if (instances[i] instanceof ControllingComponent) { 
                if (this.#isInBorders(instances[i].layout)) { 
                    this.changeController(instances[i].controller);
                }
            }
        }
    }

    #isInBorders(layout) {
        const borders = {
            left: layout.x,
            top: layout.y,
            right: layout.x + layout.width,
            bottom: layout.y + layout.height,
        };

        return (
            mouseX > borders.left &&
            mouseX < borders.right &&
            mouseY > borders.top &&
            mouseY < borders.bottom
        );
    }

    mouseClicked() { 
        this.#state.mouseClicked();
    }

    buttonPressed() { 
        this.#state.buttonPressed();
    }
}
