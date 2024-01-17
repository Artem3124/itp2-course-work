class ThreeDimensional extends Visualizer {
    /**
     * Three Dimensional visualizer
     * @params id: number;
     * @params layout
     */
    constructor(id, layout) {
        super(id, layout);
    }

    setup() {
        console.log(this.layout.width, this.layout.height);
        this.layer = createGraphics(this.layout.width, this.layout.height, WEBGL);

        this.layer.colorMode(HSB);
        // this.camera = {
        //     x: 0,
        //     y: 0,
        //     z: 0,
        //     th: 0,
        //     phi: 0,
        //     lookAt: {
        //         x: 100,
        //         y: 0,
        //         z: 0,
        //     },
        // };

        // this.mousePrev = {
        //     x: mouseX,
        //     y: mouseY,
        // };
        //size of a cube
        this.d = 10;
        this.layer.angleMode(DEGREES);
        this.amountOfElements = Math.pow(2, Math.round(Math.log2(map(this.layout.width + this.layout.height, 0, 3000, 32, 64))));
        console.log(this.amountOfElements, this.layout.width + this.layout.height)
        this.alongAxisElements = this.amountOfElements / 2;
        //this.controller = new VisualizerController(this);
    }

    visualize() {
        // camera movement
        // this.camera.th += (mouseX - this.mousePrev.x) / 100;
        // this.camera.phi += (mouseY - this.mousePrev.y) / 100;

        // this.mousePrev.x = mouseX;
        // this.mousePrev.y = mouseY;

        // // define the look at vector
        // let X = [1000, 0, 0];
        // let R = math.multiply(this.Rz(this.camera.phi), this.Ry(this.camera.th));
        // X = math.multiply(X, R);

        // // camera look at
        // this.camera.lookAt = {
        //     x: this.camera.x + X._data[0],
        //     y: this.camera.y + X._data[1],
        //     z: this.camera.z + X._data[2],
        // };

        // //Call the built in p5 function 'camera' to position and orient the camera
        // this.layer.camera(
        //     this.camera.x,
        //     this.camera.y,
        //     this.camera.z, // position
        //     this.camera.lookAt.x,
        //     this.camera.lookAt.y,
        //     this.camera.lookAt.z, // look-at
        //     0,
        //     -1,
        //     0
        // ); // up vector

        this.layer.background(216, 21, 22);
        const spectrum = this.audioAnalyzer.getSpectrum(this.amountOfElements);

        this.layer.rotateX(0.003);
        this.layer.rotateY(tan(PI / 8) / 400);
        this.layer.rotateZ(cos(PI / 3) / 100);

        this.layer.push();
        //this.layer.translate(0, 0, -500);
        //rows
        for (let x = -this.d * this.alongAxisElements ; x < this.d * this.alongAxisElements; x += this.d) {
            //columns
            for (let y = -this.d * this.alongAxisElements; y < this.d * this.alongAxisElements; y += this.d) {
                const mappedSpectrum = map(
                    spectrum[y / this.d + this.alongAxisElements],
                    0,
                    256,
                    1,
                    //Math.sin((Math.pow(x / 2, 2) + Math.pow(y, 2)) / 2) * 300
                    (Math.sin(5*x) * Math.cos(5*y)) * 100
                );
                
                const hueValue = map(spectrum[y / this.d + this.alongAxisElements], 0, 256, 0, 255);

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

    //rotation matrix for the rotation about z-axis
    // Rz(th) {
    //     return math.matrix([
    //         [cos(th), sin(th), 0],
    //         [-sin(th), cos(th), 0],
    //         [0, 0, 1],
    //     ])
    // }

    // //rotation matrix for rotation about y-axis
    // Ry(th) {
    //     return math.matrix([
    //         [cos(th), 0, -sin(th)],
    //         [0, 1, 0],
    //         [sin(th), 0, cos(th)],
    //     ]);
    // }
}
