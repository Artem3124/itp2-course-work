class ControllerBaseState {
    /* Base controller class, dynamically created for each controllable component, 
     *   if controllable class has no concrete controllers
     * Instance of ControllableComponent class
     * @params component: ControllableComponent
     */
    constructor(component) {
        this.component = component;
    }

    setContext(context) {
        this.context = context;
    }

    mouseClicked() {
        console.error("Instance has no implementation");
    }

    mouseDragged() { 
        console.error("Instance has no implementation");
    }

    buttonPressed() {
        console.error("Instance has no implementation");
    }

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
    // general border for determining 
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
