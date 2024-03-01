class AudioElement extends Item {
    constructor(audioFile, name, id, layout) {
        super(name, id, layout);
        this.audioFile = audioFile;
        this.id = id;
    }

    resize() {
        this.layout.x = width - 301;
        this.layout.y = 0.2 * height + 100 * this.id;
        this.layout.width = 301;
        this.layout.height = 100;
        this.calculateBorders();
    }
}
