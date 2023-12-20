class AudioAnalyzer {
    static #seed = Math.random();
    static #fft = new p5.FFT();
    static #instance = new AudioAnalyzer(this.#seed);
    
    #volume;
    /*
    Analyzer class which is responsible for analyzing incoming audio and providing
    other classes with an appropriate data.
    The singleton class, means there is only one instance at the whole lifecycle of app 
    * @param private volume: number
    */
    constructor(seed) { 
        if (seed !== AudioAnalyzer.#seed) { 
            throw new Error("Instance is already exist"); 
        }
        this.audio = null;
        this.#volume = null;
    }

    static getInstance() { 
        return this.#instance;
    }

    getWaveForm() { 
        return AudioAnalyzer.#fft.waveform()
    }

    getSpectrum(bins = 1024) { 
        return AudioAnalyzer.#fft.analyze(bins);
    }

    getEnergy(frequencyBin) { 
        return AudioAnalyzer.#fft.getEnergy(frequencyBin);
    }
    
    getVolume() { 
        return this.#volume;
    }

    getAudioDuration() { 
        return this.audio.duration();
    }

    setAudio(audio) { 
        this.audio = audio.audioFile;
    }

    isPlaying() { 
        return this.audio.isPlaying();
    }

    // @param volume: number between 0 and 1.0;
    setVolume(volume) { 
        setVolume(volume); // p5.js function
        this.#volume = volume;
    }
}