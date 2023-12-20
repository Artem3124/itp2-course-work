class WavePattern extends Visualizer { 
    constructor(id, layout) {
        super(id, layout);
        this.name = "WavePattern";
    }

    visualize() {
        push();
		noFill();
		stroke(255, 0, 0);
		strokeWeight(2);

		beginShape();
		//calculate the waveform from the fft.
		var wave = this.audioAnalyzer.getWaveForm();
		for (var i = 0; i < wave.length; i++) {
			//for each element of the waveform map it to screen
			//coordinates and make a new vertex at the point.
			var x = map(i, 0, wave.length, 0, this.layout.width);
			var y = map(wave[i], -1, 1, 0, this.layout.height);

			vertex(x, y);
		}

		endShape();
		pop();
    }
}