class Visualizer  { 
    /*
    Abstract class to describe behavior and state of visualizer
    * @params id: number;
    * @params layout: Layout; 
    */
    constructor(id, layout) { 
        this.layout = layout;
        this.audioAnalyzer = AudioAnalyzer.getInstance();
        this.frequencyBins = ["bass", "lowMid", "highMid", "treble"];
        this.id = id;
    }

    visualize() { 
        
    }

    setup() { 
        
    }
}
