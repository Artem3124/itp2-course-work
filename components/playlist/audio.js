// Represents an audio element item
class AudioElement extends Item {
    /** 
     * Constructor function for AudioElement.
     * 
     * @param {string} audioFile - Path to the audio file.
     * @param {string} name - Name of the audio element.
     * @param {number} id - Unique identifier for the audio element.
     * @param {Object} layout - Layout object containing x, y, width, height properties.
     */
    constructor(audioFile, name, id, layout) {
        // Call the constructor of the parent class with name, id, and layout
        super(name, id, layout);
        // Initialize audioFile property
        this.audioFile = audioFile;
        // Set id property
        this.id = id;
    }

    /**
     * Function to resize the audio element.
     */
    resize() {
        // Adjust layout properties
        this.layout.x = width - 301;
        this.layout.y = 0.2 * height + 100 * this.id;
        this.layout.width = 301;
        this.layout.height = 100;
        // Recalculate borders
        this.calculateBorders();
    }
}
