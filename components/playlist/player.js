class Player extends ControllingComponent {
    #currentTrack;
    #trackCollection;
    #audioAnalyzer;

    /** 
     * Constructor function for Player.
     * 
     * @param {Object} layout - Layout object containing x, y, width, height properties.
     */
    constructor(layout) {
        super(layout);
        // Initialize player state
        this.isPlaying = false;
        // Initialize audio analyzer
        this.#audioAnalyzer = AudioAnalyzer.getInstance();
        // Set items borders
        this.itemsBorders = {
            playButton: {
                left:
                    this.layout.x +
                    this.layout.width / 2 -
                    10,
                top:
                    this.layout.y +
                    (2 * this.layout.height) / 3,
                right:
                    this.layout.x +
                    this.layout.width / 2 +
                    10,
                bottom:
                    this.layout.y +
                    (2 * this.layout.height) / 3 +
                    20,
            },
            nextTrackButton: {
                left: this.layout.x + (2 * this.layout.width) / 3,
                top: this.layout.y + (2 * this.layout.height) / 3,
                right: (this.layout.x + (2 * this.layout.width) / 3) + 40,
                bottom: (this.layout.y + (2 * this.layout.height) / 3) + 20,
            },
            previousTrackButton: {
                left: this.layout.x + this.layout.width / 3 - 40,
                top: this.layout.y + (2 * this.layout.height) / 3,
                right: (this.layout.x + this.layout.width / 3),
                bottom: (this.layout.y + (2 * this.layout.height) / 3) + 20,
            }
        },
            (this.controller = new PlayerController(this));
    }

    /**
     * Sets the next track in the list like to the specified track.
     */
    nextTrack() {
        const currentIndex = this.#trackCollection.indexOf(this.#currentTrack);

        if (currentIndex == this.#trackCollection.length - 1) {
            return;
        }

        this.setCurrentTrack(this.#trackCollection[currentIndex + 1]);
    }

    /**
     * Sets the previous track in the list like to the specified track.
     */
    previousTrack() {
        const currentIndex = this.#trackCollection.indexOf(this.#currentTrack);

        if (currentIndex == 0) {
            return;
        }

        this.setCurrentTrack(this.#trackCollection[currentIndex - 1]);
    }

    /**
     * Sets the current track to the specified track.
     * 
     * @param {Object} currentTrack - The track to set as the current track.
     */
    setCurrentTrack(currentTrack) {
        const isPlayingBefore = this.isPlaying;

        if (this.isPlaying) {
            this.#stopPlaying();
        }

        this.#currentTrack?.selectOrUnselect();
        this.#currentTrack = currentTrack;
        this.#audioAnalyzer.setAudio(currentTrack);
        this.#currentTrack.selectOrUnselect();

        if (isPlayingBefore) {
            this.#startPlaying();
        }
    }

    /**
     * Sets the tracks for the player.
     * 
     * @param {Array} tracks - An array of tracks to set for the player.
     */
    setTracks(tracks) {
        this.#trackCollection = tracks;
        this.setCurrentTrack(this.#trackCollection[0]);
    }

    /**
     * Handles hit check for play/pause functionality.
     * 
     * @returns {boolean} - Returns true if the player is playing after the hit check, false otherwise.
     */
    hitCheck() {
        this.isPlaying
            ? this.#stopPlaying()
            : this.#startPlaying();

        this.isPlaying = this.#currentTrack.audioFile.isPlaying();

        return this.isPlaying;
    }

    /**
     * Resizes the player UI.
     */
    render() {
        this.#renderTrackData();
        this.#renderControlBar();
    }

    /**
     * Resizes the player UI.
     */
    resize() {
        this.layout.x = windowWidth - 301;
        this.layout.y = 0;
        this.layout.width = 301;
        this.layout.height = 0.2 * windowHeight;
        this.calculateBorders();
    }

    /**
     * Calculates the borders for player control buttons.
     * 
     * This method calculates the left, top, right, and bottom borders for the play, next track, and previous track buttons.
     * The calculated borders are stored in the itemsBorders property.
     * 
     * @private
     */
    calculateBorders() {
        this.itemsBorders = {
            playButton: {
                left:
                    this.layout.x +
                    this.layout.width / 2 -
                    10,
                top:
                    this.layout.y +
                    (2 * this.layout.height) / 3,
                right:
                    this.layout.x +
                    this.layout.width / 2 +
                    10,
                bottom:
                    this.layout.y +
                    (2 * this.layout.height) / 3 +
                    20,
            },
            nextTrackButton: {
                left: this.layout.x + (2 * this.layout.width) / 3,
                top: this.layout.y + (2 * this.layout.height) / 3,
                right: (this.layout.x + (2 * this.layout.width) / 3) + 40,
                bottom: (this.layout.y + (2 * this.layout.height) / 3) + 20,
            },
            previousTrackButton: {
                left: this.layout.x + this.layout.width / 3 - 40,
                top: this.layout.y + (2 * this.layout.height) / 3,
                right: (this.layout.x + this.layout.width / 3),
                bottom: (this.layout.y + (2 * this.layout.height) / 3) + 20,
            }
        };
    }

    /**
     * Renders the track data on the player.
     * 
     * @private
     */
    #renderTrackData() {
        fill(233, 235, 237);
        textSize(20);
        stroke(0);
        text(this.#currentTrack.name, this.layout.x + this.layout.width / 3, this.layout.y + 1.5 * this.layout.height / 3);
    }

    /**
     * Starts playing the current track.
     * 
     * @private
     */
    #startPlaying() {
        this.#currentTrack?.audioFile.loop();
        this.isPlaying = true;
    }

    /**
        * Stops playing the current track.
        * 
        * @private
        */
    #stopPlaying() {
        this.#currentTrack?.audioFile.stop();
        this.isPlaying = false;
    }

    /**
     * Renders the control bar of the player.
     * 
     * @private
     */
    #renderControlBar() {
        stroke(0, 0, 0, 0);
        fill(146, 165, 179);
        if (this.isPlaying) {
            this.#renderStopButton(
                this.layout.x + this.layout.width / 2 - 10,
                this.layout.y +
                (2 * this.layout.height) / 3,
                20,
                20
            );
        } else {
            this.#renderPlayButton(
                this.layout.x + this.layout.width / 2 - 10,
                this.layout.y +
                (2 * this.layout.height) / 3,
                20,
                20
            );
        }
        this.#previousTrackButtonRender(
            this.layout.x + this.layout.width / 3 - 20,
            this.layout.y + (2 * this.layout.height) / 3,
            20,
            20
        );
        this.#nextTrackButtonRender(
            this.layout.x + (2 * this.layout.width) / 3,
            this.layout.y + (2 * this.layout.height) / 3,
            20,
            20
        );
    }

    /**
     * Renders the previous track button.
     * 
     * @param {number} x - The x-coordinate of the button.
     * @param {number} y - The y-coordinate of the button.
     * @param {number} width - The width of the button.
     * @param {number} height - The height of the button.
     * @private
     */
    #previousTrackButtonRender(x, y, width, height) {
        triangle(
            x,
            y,
            x - width,
            y + height / 2,
            x,
            y + height
        );
        triangle(
            x + 10,
            y,
            x + 10 - width,
            y + height / 2,
            x + 10,
            y + height
        );
    }

    /**
     * Renders the next track button.
     * 
     * @param {number} x - The x-coordinate of the button.
     * @param {number} y - The y-coordinate of the button.
     * @param {number} width - The width of the button.
     * @param {number} height - The height of the button.
     * @private
     */
    #nextTrackButtonRender(x, y, width, height) {
        triangle(
            x,
            y,
            x + width,
            y + height / 2,
            x,
            y + height
        );
        triangle(
            x + 10,
            y,
            x + 10 + width,
            y + height / 2,
            x + 10,
            y + height
        );
    }

    /**
     * Renders the stop button.
     * 
     * @param {number} x - The x-coordinate of the button.
     * @param {number} y - The y-coordinate of the button.
     * @param {number} width - The width of the button.
     * @param {number} height - The height of the button.
     * @private
     */
    #renderStopButton(x, y, width, height) {
        rect(x, y, width / 2 - 2, height);
        rect(x + (width / 2 + 2), y, width / 2 - 2, height);
    }

    /**
     * Renders the play button.
     * 
     * @param {number} x - The x-coordinate of the button.
     * @param {number} y - The y-coordinate of the button.
     * @param {number} width - The width of the button.
     * @param {number} height - The height of the button.
     * @private
     */
    #renderPlayButton(x, y, width, height) {
        triangle(
            x,
            y,
            x + width,
            y + height / 2,
            x,
            y + height
        );
    }

}
