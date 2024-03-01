class ThreeDimensional extends Visualizer {
    /**
     * Three Dimensional visualizer
     * @params id: number;
     * @params layout
     */
    constructor(id, layout) {
        // Call the constructor of the parent class
        super(id, layout);
        // Create a new Camera3D object
        this.camera = new Camera3D(layout);
    }

    // Setup method for the ThreeDimensional class
    setup() {
        // Log the width and height of the layout
        console.log(this.layout.width, this.layout.height);
        // Create a new graphics layer with WEBGL rendering
        this.layer = createGraphics(this.layout.width, this.layout.height, WEBGL);

        // Set the color mode of the layer to HSB
        this.layer.colorMode(HSB);
        // Set the size of a cube
        this.d = 10;
        // Set the angle mode of the layer to DEGREES
        this.layer.angleMode(DEGREES);
        // Calculate the amount of elements based on the width and height of the layout
        this.amountOfElements = Math.pow(2, Math.round(Math.log2(map(this.layout.width + this.layout.height, 0, 3000, 32, 64))));
        // Log the amount of elements and the sum of the width and height of the layout
        console.log(this.amountOfElements, this.layout.width + this.layout.height);
        // Calculate the number of elements along the axis
        this.alongAxisElements = this.amountOfElements / 2;
    }

    // abstract method from parent class
    visualize() {
        // Move the camera
        this.camera.moveCamera();
        // Call the built in p5 function 'camera' to position and orient the camera
        this.layer.camera(
            this.camera.x,
            this.camera.y,
            this.camera.z, // position
            this.camera.lookAt.x,
            this.camera.lookAt.y,
            this.camera.lookAt.z, // look-at
            0,
            -1,
            0
        ); // up vector

        // Set the background color of the layer
        this.layer.background(216, 21, 22);
        // Get the audio spectrum
        const spectrum = this.audioAnalyzer.getSpectrum(128);

        // Push the current drawing style settings and transformations onto a stack
        this.layer.push();
        // Translate the layer to the lookAt position of the camera
        this.layer.translate(this.camera.lookAt.x, this.camera.lookAt.y, this.camera.lookAt.z);

        this.#drawGrid(spectrum);
        // Pop the current drawing style settings and transformations from the stack
        this.layer.pop();

        // Set the image mode to CENTER
        imageMode(CENTER);
        // Draw the layer on the image
        image(this.layer, this.layout.width / 2, this.layout.height / 2);
    }

    // Drawing a grid of cubes
    #drawGrid(spectrum) {
        // Loop over the rows
        for (let x = -this.d * this.alongAxisElements; x < this.d * this.alongAxisElements; x += this.d) {
            // Loop over the columns
            for (let y = -this.d * this.alongAxisElements; y < this.d * this.alongAxisElements; y += this.d) {
                // Map the spectrum value to a new value
                const mappedSpectrum = map(
                    spectrum[this.amountOfElements - (y / this.d + this.alongAxisElements)],
                    0,
                    256,
                    1,
                    Math.sin(5 * x) * Math.cos(5 * y) * 150
                );

                // Map the hue value
                const hueValue = map(spectrum[this.amountOfElements - (y / this.d + this.alongAxisElements)], 0, 256, 0, 255);

                // Push the current drawing style settings and transformations onto a stack
                this.layer.push();
                // Translate the layer to (x, y, mappedSpectrum)
                this.layer.translate(x, y, mappedSpectrum);
                // Set the fill color of the layer
                this.layer.fill(255 - hueValue, 255, 255);
                // Draw a box on the layer
                this.layer.box(this.d);
                // Pop the current drawing style settings and transformations from the stack
                this.layer.pop();
            }
        }
    }
}
