// Represents an audio analyzer responsible for analyzing incoming audio data
class AudioAnalyzer {
    // Static private fields
    static #seed = Math.random();
    static #fft = new p5.FFT();
    static #instance = new AudioAnalyzer(this.#seed);


    #volume;
    /** 
      * Constructor function for AudioAnalyzer.
      * 
      * Initializes the audio analyzer instance.
      * Throws an error if an instance already exists.
      * 
      * @param {number} seed - A random seed value to ensure singleton pattern.
      */
    constructor(seed) {
        if (seed !== AudioAnalyzer.#seed) {
            throw new Error("Instance is already exist");
        }
        // Initialize properties
        this.audio = null;
        this.#volume = null;
    }

    // Static methods

    /** 
     * Retrieves the singleton instance of AudioAnalyzer.
     * 
     * @returns {AudioAnalyzer} - The singleton instance of AudioAnalyzer.
     */
    static getInstance() {
        return this.#instance;
    }

    /** 
     * Retrieves the waveform data of the audio.
     * 
     * @param {number} bins - The number of bins for the waveform data.
     * @returns {number[]} - An array containing the waveform data.
     */
    getWaveForm(bins = 1024) {
        return AudioAnalyzer.#fft.waveform(bins)
    }


    /** 
     * Retrieves the spectrum data of the audio.
     * 
     * @param {number} bins - The number of bins for the spectrum data.
     * @returns {number[]} - An array containing the spectrum data.
     */
    getSpectrum(bins = 1024) {
        return AudioAnalyzer.#fft.analyze(bins);
    }

    /** 
     * Retrieves the energy of a specific frequency bin.
     * 
     * @param {number} frequencyBin - The frequency bin index.
     * @returns {number} - The energy value of the frequency bin.
     */
    getEnergy(frequencyBin) {
        return AudioAnalyzer.#fft.getEnergy(frequencyBin);
    }

    /** 
     * Retrieves the volume level.
     * 
     * @returns {number|null} - The volume level, or null if not set.
     */
    getVolume() {
        return this.#volume;
    }

    /** 
     * Retrieves the duration of the audio.
     * 
     * @returns {number} - The duration of the audio in seconds.
     */
    getAudioDuration() {
        return this.audio.duration();
    }

    /** 
     * Sets the audio file for analysis.
     * 
     * @param {p5.SoundFile} audio - The audio file to be analyzed.
     */
    setAudio(audio) {
        this.audio = audio.audioFile;
    }

    /** 
     * Checks if the audio is currently playing.
     * 
     * @returns {boolean} - True if the audio is playing, false otherwise.
     */
    isPlaying() {
        return this.audio.isPlaying();
    }

    /** 
     * Sets the volume level of the audio.
     * 
     * @param {number} volume - The volume level between 0 and 1.0.
     */
    setVolume(volume) {
        setVolume(volume); // p5.js function
        this.#volume = volume;
    }
}
