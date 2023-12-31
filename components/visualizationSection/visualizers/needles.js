//constructor function to draw a
class Needles extends Visualizer {
    constructor(id, layout) {
        super(id, layout);
        //name of the visualisation
        this.name = "needles";
        //how large is the arc of the needle plot.
	    this.minAngle = PI + PI / 10;
	    this.maxAngle = TWO_PI - PI / 10;
        this.plotsAcross = 2;
	    this.plotsDown = 2;
    }

	//resize the plots sizes when the screen is resized.
	onResize() {
		this.pad = this.layout.width / 20;
		this.plotWidth = (this.layout.width - this.pad) / this.plotsAcross;
		this.plotHeight = (this.layout.height - this.pad) / this.plotsDown;
		this.dialRadius = (this.plotWidth - this.pad) / 2 - 5;
	};

	// draw the plots to the screen
	visualize() {
        this.onResize()
		//create an array amplitude values from the fft.
		var spectrum = this.audioAnalyzer.getSpectrum();
		//iterator for selecting frequency bin.
		var currentBin = 0;
		push();
		fill('#f0f2d2');
		//nested for loop to place plots in 2*2 grid.
		for (var i = 0; i < this.plotsDown; i++) {
			for (var j = 0; j < this.plotsAcross; j++) {

				//calculate the size of the plots
				var x = this.pad + j * this.plotWidth;
				var y = this.pad + i * this.plotHeight;
				var w = this.plotWidth - this.pad;
				var h = this.plotHeight - this.pad;

				//draw a rectangle at that location and size
				rect(x, y, w, h);
				//add on the ticks
				this.#ticks(x + w / 2, y + h, this.frequencyBins[currentBin]);

				var energy = this.audioAnalyzer.getEnergy(this.frequencyBins[currentBin]);

				//add the needle
				this.#needle(energy, x + w / 2, y + h);
				currentBin++;
			}
		}

		pop();
	};

	/*
	 *draws a needle to an individual plot
	 *@param energy: The energy for the current frequency
	 *@param centreX: central x coordinate of the plot rectangle
	 *@param bottomY: The bottom y coordinate of the plot rectangle
	 */
	#needle(energy, centreX, bottomY) {
		push();
		stroke('#333333');
		//translate so 0 is at the bottom of the needle
		translate(centreX, bottomY);
		//map the energy to the angle for the plot
		var theta = map(energy, 0, 255, this.minAngle, this.maxAngle);
		//calculate x and y coorindates from angle for the length of needle
		var x = this.dialRadius * cos(theta);
		var y = this.dialRadius * sin(theta);
		//draw the needle
		line(0, 0, x, y);
		pop();
	};

	/*
	 *draw the graph ticks on an indivisual plot
	 *@param centreX: central x coordinate of the plot rectangle
	 *@param bottomY: The bottom y coordinate of the plot rectangle
	 *@param freqLabel: Label denoting the frequency of the plot
	 */
	#ticks(centreX, bottomY, freqLabel) {
		// 8 ticks from pi to 2pi
		var nextTickAngle = this.minAngle;
		push();
		stroke('#333333');
		fill('#333333');
		translate(centreX, bottomY);
		//draw the semi circle for the botttom of the needle
		arc(0, 0, 20, 20, PI, 2 * PI);
		textAlign(CENTER);
		textSize(12);
		text(freqLabel, 0, -(this.plotHeight / 2));

		for (var i = 0; i < 9; i++) {
			//for each tick work out the start and end coordinates of
			//based on its angle from the needle's origin.
			var x = this.dialRadius * cos(nextTickAngle);
			var x1 = (this.dialRadius - 5) * cos(nextTickAngle);

			var y = (this.dialRadius) * sin(nextTickAngle);
			var y1 = (this.dialRadius - 5) * sin(nextTickAngle);

			line(x, y, x1, y1);
			nextTickAngle += PI / 10;
		}
		pop();
	};

}