// Class representing the layout of objects on the canvas
class Layout { 
    /** 
    * Constructor function for Layout.
    * 
    * @param {number} x - The x-coordinate of the layout.
    * @param {number} y - The y-coordinate of the layout.
    * @param {number} width - The width of the layout.
    * @param {number} height - The height of the layout.
    * @param {color} [strokeColor=color(4, 139, 172)] - The stroke color of the layout.
    * @param {color} [bgColor=color(43, 48, 55)] - The background color of the layout.
    */
    constructor(x, y, width, height, strokeColor = color(4, 139, 172), bgColor = color(43, 48, 55)) { 
        this.x = x; // number
        this.y = y; // number
        this.width = width; // number
        this.height = height; // number
        this.strokeColor = strokeColor; // color() p5.js
        this.bgColor = bgColor; // color() p5.js
    }

    /** 
    * Sets the background color of the layout.
    * 
    * @param {color} color - The new background color.
    */
    setBgColor(color) { 
        this.bgColor = color;
    }

    /** 
    * Renders the layout on the canvas.
    */
    render() { 
        fill(this.bgColor);
        stroke(this.strokeColor);
        rect(this.x, this.y, this.width, this.height);
    }

    /** 
    * Resizes the layout.
    * 
    * @param {number} width - The new width of the layout.
    * @param {number} height - The new height of the layout.
    */
    resize(width, height) { 
        this.width = width;
        this.height = height;

        fill(this.bgColor);
        stroke(this.strokeColor);
        rect(this.x, this.y, this.width, this.height);
    }
}

