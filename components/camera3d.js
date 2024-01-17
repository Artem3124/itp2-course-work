class Camera3D {
    constructor(layout) {
        this.layout = layout;
        
        this.x = 0;
        this.y = 0;
        this.z = -100;
        this.th = 0;
        this.phi = 0;
        this.lookAt = {
            x: 100,
            y: 0,
            z: 0,
        };
    

        this.mousePrev = {
            x: mouseX,
            y: mouseY,
        };
    }

    moveCamera() {
        if (mouseX > 0 && mouseX < this.layout.width && mouseY > 0 && mouseY < this.layout.height) {
            this.th += (mouseX - this.mousePrev.x) / 100;
            this.phi += (mouseY - this.mousePrev.y) / 100;

            this.mousePrev.x = mouseX;
            this.mousePrev.y = mouseY;
        }

        const matrixView = this.#getNewMatrixView();

        this.lookAt = this.#getNewView(matrixView);
    }

    #getNewView(inputMatrix) { 
        return {
            x: this.x + inputMatrix._data[0],
            y: this.y + inputMatrix._data[1],
            z: this.z + inputMatrix._data[2],
        };
    }

    #getNewMatrixView() { 
        const X = [(this.layout.width + this.layout.height) / 5, 0, 0];
        const R = math.multiply(this.#Rz(this.phi), this.#Ry(this.th));

        return math.multiply(X, R);
    }

    //rotation matrix for the rotation about z-axis
   #Rz(th) {
        return math.matrix([
            [cos(th), sin(th), 0],
            [-sin(th), cos(th), 0],
            [0, 0, 1],
        ])
    }

    //rotation matrix for rotation about y-axis
    #Ry(th) {
        return math.matrix([
            [cos(th), 0, -sin(th)],
            [0, 1, 0],
            [sin(th), 0, cos(th)],
        ]);
    }
}
