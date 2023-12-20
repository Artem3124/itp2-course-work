class ThreeDimensional extends Visualizer {
    constructor(id, layout) {
        super(id, layout);
        
        
        //this.layer.clear();
    }
    setup() { 
        this.layer = createGraphics(
            this.layout.width,
            this.layout.height
        );
        this.fr = 60;
        this.a = 360 / (this.audioAnalyzer.getAudioDuration() * 10);
        this.b = this.a;
        //frameRate(this.fr);
    } 

    visualize() {
       
        push();

        this.layer.noFill();
        this.layer.colorMode(RGB);

        pop()
    }
}
