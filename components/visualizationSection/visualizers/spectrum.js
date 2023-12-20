class Spectrum extends Visualizer {
    constructor(id, layout) {
        super(id, layout);
        this.name = "spectrum";
    }

    visualize() {
        push();
        var spectrum = this.audioAnalyzer.getSpectrum();
        noStroke();

        for (var i = 0; i < spectrum.length; i++) {
            //fade the colour of the bin from green to red
            var g = map(spectrum[i], 0, 255, 255, 0);
            fill(spectrum[i], g, 0);

            //draw each bin as a rectangle from the left of the screen
            //across
            var y = map(i, 0, spectrum.length, 0, this.layout.height);
            var w = map(spectrum[i], 0, 255, 0, this.layout.width);
            rect(0, y, w, this.layout.height / spectrum.length);
        }
        pop();
    }
}
