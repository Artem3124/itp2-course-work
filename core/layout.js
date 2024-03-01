class Layout { 
    /** 
    *   Layout is a class responsible for creating and resizing background behind every objects
    *   @param x: number;
    *   @param y: number;
    *   @param width: number;
    *   @param height: number;
    *   @param stroke: color p5.js;
    *   @param bgColor: color p5.js;
    *   @param transparent: boolean;
    */
    constructor(x, y, width, height, strokeColor = color(4, 139, 172), bgColor = color(43, 48, 55)) { 
        this.x = x; // number
        this.y = y; // number
        this.width = width; // number
        this.height = height; // number
        this.strokeColor = strokeColor; // color() p5.js
        this.bgColor = bgColor; // color() p5.js
    }

    setBgColor(color) { 
        this.bgColor = color;
    }

    render() { 
        fill(this.bgColor);
        stroke(this.strokeColor);
        rect(this.x, this.y, this.width, this.height);
    }

    resize(width, height) { 
        this.width = width;
        this.height = height;

        fill(this.bgColor);
        stroke(this.strokeColor);
        rect(this.x, this.y, this.width, this.height);
    }
}
