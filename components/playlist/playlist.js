class Playlist extends ControllingComponent {
    #audioAnalyzer;
    #player
    constructor(layout) {
        super(layout);
        this.#player = new Player({
            x: this.layout.x,
            y: 0,
            width: this.layout.width,
            height: this.layout.y,
            strokeColor: color(0, 0, 0, 0),
            ...[],
        });
        this.controller = new PlaylistController(this);
    }

    setTrack(id) {
        this.#player.setCurrentTrack(this.items[id]);
    }

    uploadTracks(loadedSongs) {
        this.#initializeAudioElementList(loadedSongs);
        this.#player.setTracks(this.items);
    }


    resize() {
        this.layout.x = width - 301;
        this.layout.y = 0.2 * height;
        this.layout.width = 301;
        this.layout.height = 0.8 * height;
    }


    #initializeAudioElementList(inputLoadedSongs) {
        for (let i = 0; i < inputLoadedSongs.length; i++) {
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
