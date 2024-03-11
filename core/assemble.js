// Main class which unites all the infrastructure
class Assemble {
    // Private fields
    #renderer;
    #playlist;
    #visualizationMenu;
    #controllerContext;

    /** 
     * Constructor function for Assemble.
     * 
     * @param {p5.SoundFile[]} loadedSongs - Predefined list of songs.
     */
    constructor(loadedSongs) {
        // Initialize private fields
        this.#renderer = new Renderer();

        // Create a VisualizationMenu instance
        this.#visualizationMenu = new VisualizationMenu({
            x: 0,
            y: 0.75 * height,
            width: width - 301,
            height: 0.25 * height,
            ...[] // Additional properties (empty in this case)
        });
        // Initialize visualizations for the menu
        this.#visualizationMenu.initializeVisualizations();

        // Create a Playlist instance
        this.#playlist = new Playlist({
            x: width - 301,
            y: 0.2 * height,
            width: 301,
            height: 0.8 * height,
            strokeColor: undefined,
            bgColor: undefined,
        });
        // Upload tracks to the playlist
        this.#playlist.uploadTracks(loadedSongs);

        // Create a ControllerContext instance
        this.#controllerContext = new ControllerContext();
    }

    /**
     * Function to run the application.
     */
    run() {
        // Render all components
        this.#renderer.renderAll();
        // Track mouse events
        this.#controllerContext.trackMouse();
    }

    /**
     * Function to handle mouse click event.
     */
    mouseClicked() {
        this.#controllerContext.mouseClicked();
    }

    /**
     * Function to handle mouse drag event.
     */
    mouseDragged() {
        this.#controllerContext.mouseDragged();
    }

    /**
     * Function to handle button press event.
     */
    buttonPressed() {
        this.#controllerContext.buttonPressed();
    }

    /**
     * Function to resize the application.
     * 
     * @param {number} width - New width of the application.
     * @param {number} height - New height of the application.
     */
    resize(width, height) {
        // Resize all components
        this.#renderer.resizeAll();
    }
}

