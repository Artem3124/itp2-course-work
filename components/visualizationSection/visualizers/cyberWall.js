class CyberWall extends Visualizer {
    #minFrequency;
    #maxFrequency;
    #minAmplitude;
    #maxAmplitude;
    #h;

    /** 
     * Constructor function for CyberWall visualizer.
     * 
     * @param {number} id - The identifier for the visualizer.
     * @param {Layout} layout - The layout configuration for the visualizer.
     */
    constructor(id, layout) {
        super(id, layout);
    }

    /** 
     * Sets up the initial parameters for the CyberWall visualizer.
     */
    setup() {
        this.#minFrequency = 0.5;
        this.#maxFrequency = 5;
        this.#minAmplitude = 0.05;
        this.#maxAmplitude = 0.5;
        this.#h = 0;
    }

    /** 
     * Draws a noise line based on the given options.
     * 
     * @param {object} opt - Options for drawing the noise line.
     * @param {number} opt.v - The interpolation factor between 0 and 1.
     * @param {number[]} opt.start - The start point of the line [x, y].
     * @param {number[]} opt.end - The end point of the line [x, y].
     * @param {number} [opt.steps=10] - The number of steps to interpolate.
     * @param {number} [opt.frequency=1] - The frequency of the noise.
     * @param {number} [opt.time=0] - The time parameter for the noise function.
     * @param {number} [opt.amplitude=1] - The amplitude of the noise.
     * @param {number[]} opt.spectrum - The spectrum data for coloring.
     * @param {number} [opt.energy=0] - The energy value.
     */
    #drawNoiseLine(opt = {}) {
        const {
            v,
            start,
            end,
            steps = 10,
            frequency = 1,
            time = 0,
            amplitude = 1,
            spectrum,
            energy = 0,
        } = opt;

        // Destructuring start and end points
        const [xStart, yStart] = start;
        const [xEnd, yEnd] = end;

        // Begin drawing a shape
        beginShape();
        vertex(xStart, yStart);

        for (let i = 0; i < steps; i++) {
            // Get interpolation factor between 0..1
            const t = steps <= 1 ? 0.5 : i / (steps - 1);

            // Interpolate X position
            let x = lerp(xStart, xEnd, t);

            // Interpolate Y position
            const y = lerp(yStart, yEnd, t);

            // Offset X position by noise
            x += (noise(t * frequency, v * frequency, time)) * amplitude;
            // track the energy value and create an impulse
            // in this step point by adding some calculated
            // value to vertex x variable.
            // Place vertex
            stroke(spectrum, 255, 255);

            curveVertex(x, y);
        }

        // End the shape
        vertex(xEnd, yEnd);
        endShape();
    }

    /** 
     * Visualizes the CyberWall effect.
     */
    visualize() {
        push(); // Save the current drawing state
        // Set color mode to HSB
        colorMode(HSB, 255);
        noFill()
        smooth()

        const spectrum = this.audioAnalyzer.getSpectrum(256);
        const waveform = this.audioAnalyzer.getWaveForm(256);

        translate(-300, 0)

        // Set frequency and amplitude parameters
        let frequency = lerp(this.#minFrequency, this.#maxFrequency, 0.5);
        const amplitude = lerp(this.#minAmplitude, this.#maxAmplitude, 0.8);
        const step = 10
        const time = millis() / 2000;
        const columns = this.layout.width / step;

        // Loop through columns to draw lines
        for (let x = 0; x < columns; x++) {
            const v = columns <= 1 ? 0.5 : x / (columns - 1);
            const px = v * this.layout.width;

            // Draw noisy lines
            this.#drawNoiseLine({
                v,
                start: [px, 0],
                end: [px, this.layout.height],
                amplitude: amplitude * this.layout.width,
                frequency: frequency,
                time: time * 0.2,
                steps: 10,
                spectrum: spectrum[x],
                energy: waveform[x],
            })

            // Reset hue value
            if (this.#h >= 255) {
                this.#h = 0;
            }
        }
        // Increment hue value
        this.#h++

        pop(); // Restore the previous drawing state
    }

}

