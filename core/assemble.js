class Assemble {
    #renderer;
    #playlist;
    #visualizationMenu;
    #controllerContext;
    /*
    Main class which unites all the infrastructure
    @param loadedSongs: p5.SoundFile[] - predefined list of songs.
    */
    constructor(loadedSongs) {
        this.#renderer = new Renderer();
        
        this.#visualizationMenu = new VisualizationMenu({
            x: 0,
            y: 0.75 * height,
            width: width - 301,
            height: 0.25 * height,
            ...[]
        })
        this.#visualizationMenu.initializeVisualizations();
        this.#playlist = new Playlist({
            x: width - 301,
            y: 0.2 * height,
            width: 300,
            height: 0.8 * height,
            strokeColor: undefined,
            bgColor: undefined,
        });
        this.#playlist.uploadTracks(loadedSongs);
        this.#controllerContext = new ControllerContext();
    }

    run() {
        this.#renderer.renderAll();
        this.#controllerContext.trackMouse();
    }

    mouseClicked() { 
        this.#controllerContext.mouseClicked();
    }

    buttonPressed() { 
        this.#controllerContext.buttonPressed();
    }
}
