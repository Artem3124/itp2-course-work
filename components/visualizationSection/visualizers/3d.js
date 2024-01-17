class ThreeDimensional extends Visualizer {
    /**
     * Three Dimensional visualizer
     * @params id: number;
     * @params layout
     */
    constructor(id, layout) {
        super(id, layout);
        this.camera = new Camera3D(layout);
    }

    setup() {
        console.log(this.layout.width, this.layout.height);
        this.layer = createGraphics(this.layout.width, this.layout.height, WEBGL);

        this.layer.colorMode(HSB);
       
        //size of a cube
        this.d = 10;
        this.layer.angleMode(DEGREES);
        this.amountOfElements = Math.pow(2, Math.round(Math.log2(map(this.layout.width + this.layout.height, 0, 3000, 32, 64))));
        console.log(this.amountOfElements, this.layout.width + this.layout.height)
        this.alongAxisElements = this.amountOfElements / 2;
        //this.controller = new VisualizerController(this);
    }

    visualize() {
        this.camera.moveCamera();
        //Call the built in p5 function 'camera' to position and orient the camera
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

        this.layer.background(216, 21, 22);
        const spectrum = this.audioAnalyzer.getSpectrum(this.amountOfElements);

        // this.layer.rotateX(0.003);
        // this.layer.rotateY(tan(PI / 8) / 400);
        // this.layer.rotateZ(cos(PI / 3) / 100);
        let r = 3;
        this.layer.push();
        this.layer.translate(this.camera.lookAt.x, this.camera.lookAt.y, this.camera.lookAt.z)

        //this.layer.translate(0, 0, -500);
        //rows
        for (let x = -this.d * this.alongAxisElements ; x < this.d * this.alongAxisElements; x += this.d) {
            //columns
            for (let y = -this.d * this.alongAxisElements; y < this.d * this.alongAxisElements; y += this.d) {
                const mappedSpectrum = map(
                    spectrum[this.amountOfElements - (y / this.d + this.alongAxisElements)],
                    0,
                    256,
                    1,
                    //Math.sin((Math.pow(x / 2, 2) + Math.pow(y, 2)) / 2) * 300
                    (Math.sin(5*x) * Math.cos(5*y)) * 150
                );
                
                const hueValue = map(spectrum[this.amountOfElements - (y / this.d + this.alongAxisElements)], 0, 256, 0, 255);

                this.layer.push();
                this.layer.translate(x, y, mappedSpectrum);
                this.layer.fill(255 - hueValue, 255, 255);
                this.layer.box(this.d);
                this.layer.pop();
            }
        }
        this.layer.pop();


        imageMode(CENTER);
        image(this.layer, this.layout.width/ 2, this.layout.height /2);
    }

    #drawGrid(x, y) { 
        this.layer.push();

        this.layer.pop();
    }

   
}
