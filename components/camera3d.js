// Define a class for a 3D camera
class Camera3D {
    // Constructor for the 3D camera
    constructor(layout) {
        this.layout = layout; // Store the layout
        
        // Initialize camera position
        this.x = 0;
        this.y = 0;
        this.z = -100;

        // Initialize camera rotation angles
        this.th = 0;
        this.phi = 0;

        // Initialize camera lookAt position
        this.lookAt = {
            x: 100,
            y: 0,
            z: 0,
        };

        // Initialize previous mouse position
        this.mousePrev = {
            x: mouseX,
            y: mouseY,
        };
    }

    // Method to move the camera based on mouse movement
    moveCamera() {
        // If the mouse is within the layout
        if (mouseX > 0 && mouseX < this.layout.width && mouseY > 0 && mouseY < this.layout.height) {
            // Adjust the theta and phi angles based on the mouse movement
            this.th += (mouseX - this.mousePrev.x) / 100;
            this.phi += (mouseY - this.mousePrev.y) / 100;

            // Store the current mouse position for the next frame
            this.mousePrev.x = mouseX;
            this.mousePrev.y = mouseY;
        }

        // Get the new view matrix
        const matrixView = this.#getNewMatrixView();

        // Update the lookAt position based on the new view matrix
        this.lookAt = this.#getNewView(matrixView);
    }

    // Method to get the new lookAt position based on the input matrix
    #getNewView(inputMatrix) { 
        return {
            x: this.x + inputMatrix._data[0],
            y: this.y + inputMatrix._data[1],
            z: this.z + inputMatrix._data[2],
        };
    }

    // Method to get the new view matrix
    #getNewMatrixView() { 
        // Define the look at vector
        const X = [(this.layout.width + this.layout.height) / 5, 0, 0];

        // Calculate the rotation matrix
        const R = math.multiply(this.#Rz(this.phi), this.#Ry(this.th));

        // Apply the rotation to the look at vector
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
