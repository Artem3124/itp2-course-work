// Component representing a playlist
class Playlist extends ControllingComponent {
    // Private fields
    #player;

    /** 
     * Constructor function for Playlist.
     * 
     * @param {Object} layout - Layout object containing x, y, width, height properties.
     */
    constructor(layout) {
        super(layout);
        // Initialize player with layout properties
        this.#player = new Player({
            x: this.layout.x,
            y: 0,
            width: this.layout.width,
            height: this.layout.y,
            strokeColor: color(0, 0, 0, 0),
            ...[],
        });
        // Set the controller for playlist
        this.controller = new PlaylistController(this);
    }

    /**
     * Function to set the current track in the player.
     * 
     * @param {number} id - The id of the track.
     */
    setTrack(id) {
        this.#player.setCurrentTrack(this.items[id]);
    }

    /**
     * Function to upload tracks to the playlist.
     * 
     * @param {p5.SoundFile[]} loadedSongs - Array of loaded songs.
     */
    uploadTracks(loadedSongs) {
        // Initialize audio element list and set tracks in the player
        this.#initializeAudioElementList(loadedSongs);
        this.#player.setTracks(this.items);
    }

    /**
     * Function to handle resizing of the playlist.
     */
    resize() {
        // Adjust layout properties
        this.layout.x = width - 301;
        this.layout.y = 0.2 * height;
        this.layout.width = 301;
        this.layout.height = 0.8 * height;
    }

    /**
     * Function to initialize the audio element list.
     * 
     * @param {p5.SoundFile[]} inputLoadedSongs - Array of loaded songs.
     */
    #initializeAudioElementList(inputLoadedSongs) {
        for (let i = 0; i < inputLoadedSongs.length; i++) {
            // Create and push new audio element to the items array
            this.items.push(new AudioElement(
                inputLoadedSongs[i],
                `Track ${i}`,
                i,
                {
                    x: this.layout.x,
                    y: this.layout.y + 100 * i,
                    width: this.layout.width,
                    height: 100,
                    ...[],
                }
            ));
        }
    }
}

