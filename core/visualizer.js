// Abstract class to describe the behavior and state of a visualizer
class Visualizer {
    /** 
    * Constructor function for Visualizer.
    * 
    * Initializes the visualizer with an ID and layout.
    * 
    * @param {number} id - The ID of the visualizer.
    * @param {Layout} layout - The layout of the visualizer.
    */
    constructor(id, layout) {
        this.layout = layout;
        this.audioAnalyzer = AudioAnalyzer.getInstance();
        this.frequencyBins = ["bass", "lowMid", "highMid", "treble"];
        this.id = id;
    }

    // Abstract method to visualize audio data
    visualize() {

    }

    // Abstract method to set up the visualizer
    setup() {

    }
}
