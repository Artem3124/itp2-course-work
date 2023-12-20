class Item extends NonControllingComponent {
    #isSelected = false;

    constructor(name, id, layout) {
        super(layout);
        this.name = name;
        this.id = id;
        this.layout = new Layout(
            layout.x,
            layout.y,
            layout.width,
            layout.height,
            layout.strokeColor,
            layout.bgColor,
            layout.transparent
        );
        this.borders = {
            left: this.layout.x,
            top: this.layout.y,
            right: this.layout.x + layout.width,
            bottom: this.layout.y + layout.height,
        };
    }

    selectOrUnselect() {
        this.#isSelected = !this.#isSelected;
    }

    isSelected() {
        return this.#isSelected;
    }

    selectedUnselectedRender() {
        if (this.#isSelected) {
            this.layout.bgColor = color(146, 165, 179);
        } else {
            this.layout.bgColor = color(43, 48, 55);
        }
    }

    render() {
        this.layout.render();
        textSize(18);
        stroke(0);
        this.selectedUnselectedRender();
        fill(233, 235, 237);
        text(
            this.name,
            this.layout.x + this.layout.width / 2 - 30,
            this.layout.y + this.layout.height / 2
        );
    }
}
