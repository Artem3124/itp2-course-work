class Player extends ControllingComponent {
    #currentTrack;
    #trackCollection;
    #audioAnalyzer;
    constructor(layout) {
        super(layout);
        this.isPlaying = false;
        this.#audioAnalyzer = AudioAnalyzer.getInstance();
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

    nextTrack() { 
        const currentIndex = this.#trackCollection.indexOf(this.#currentTrack);

        if (currentIndex == this.#trackCollection.length - 1) { 
            return;
        }

        this.setCurrentTrack(this.#trackCollection[currentIndex + 1]);
    }

    previousTrack() { 
        const currentIndex = this.#trackCollection.indexOf(this.#currentTrack);
        
        if (currentIndex == 0) { 
            return;
        }

        this.setCurrentTrack(this.#trackCollection[currentIndex - 1]);
    }

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

    setTracks(tracks) { 
        this.#trackCollection = tracks;
        this.setCurrentTrack(this.#trackCollection[0]);
    }

    hitCheck() {
        this.isPlaying
            ? this.#stopPlaying()
            : this.#startPlaying();

        this.isPlaying = this.#currentTrack.audioFile.isPlaying();

        return this.isPlaying;
    }

    render() {
        this.#renderTrackData();
        this.#renderControlBar();
    }

    #renderTrackData() { 
        fill(233, 235, 237);
        textSize(20);
        stroke(0);
        text(this.#currentTrack.name, this.layout.x + this.layout.width/3, this.layout.y + 1.5 * this.layout.height / 3);
    }

    #startPlaying() {
        this.#currentTrack?.audioFile.loop();
        this.isPlaying = true;
    }

    #stopPlaying() {
        this.#currentTrack?.audioFile.stop();
        this.isPlaying = false;
    }

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

    #renderStopButton(x, y, width, height) {
        rect(x, y, width / 2 - 2, height);
        rect(x + (width / 2 + 2), y, width / 2 - 2, height);
    }

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
