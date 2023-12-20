class CyberWall extends Visualizer {
    #minFrequency;
    #maxFrequency;
    #minAmplitude;
    #maxAmplitude;
    #h;
    constructor(id, layout) {
        super(id, layout);
    }

    setup() { 
        this.#minFrequency = 0.5;
        this.#maxFrequency = 5;
        this.#minAmplitude = 0.05;
        this.#maxAmplitude = 0.5;
        this.#h = 0;
    }

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
          
          const [ xStart, yStart ] = start;
          const [ xEnd, yEnd ] = end;
          
          let impulseInitiatedLinesAgo = 0;
          // Create a line by walking N steps and interpolating
          // from start to end point at each interval
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

            //let col = lerpColor(color(255), color(255 - map(spectrum, 0, 255, 0, 140), 255 - spectrum, 255), t)
            // track the energy value and create an impulse
            // in this step point by adding some calculated
            // value to vertex x variable.
            // Place vertex
            stroke(spectrum, 255,255, 255);
            //stroke(col)
            // if (energy > 0 && spectrum > y && impulseInitiatedLinesAgo >= 0) { 
            //     impulseInitiatedLinesAgo = 2;
            //     vertex(x + x * energy, y)
            //     impulseInitiatedLinesAgo--;
            // } else { 
            //     vertex(x, y);
            // }
            curveVertex(x, y);
          }
          vertex(xEnd, yEnd);
          endShape();
    }

    visualize() {

        push()
        colorMode(HSB, 255);
        noFill()
        smooth()
        const spectrum = this.audioAnalyzer.getSpectrum(256);
        const waveform = this.audioAnalyzer.getWaveForm(256);
        translate(-300, 0)
        let frequency = lerp(this.#minFrequency, this.#maxFrequency, 0.5);
        const amplitude = lerp(this.#minAmplitude, this.#maxAmplitude, 0.8);

        const step = 10
        const time = millis() / 2000;
        const columns = this.layout.width / step;

        for (let x = 0; x < columns; x++) { 
            const v = columns <= 1 ? 0.5 : x / (columns - 1);
            const px = v * this.layout.width;
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

            if (this.#h >= 255) { 
                this.#h = 0;
            }
        }
        this.#h++ 

        pop()
    }
}
