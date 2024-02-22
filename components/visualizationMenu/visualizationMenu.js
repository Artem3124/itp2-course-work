class VisualizationMenu extends ControllingComponent {
    constructor(layout) {
        super(layout, []);
        this.visualizationSection =
            new VisualizationSection({
                x: 0,
                y: 0,
                width: width - 301,
                height: 0.75 * height,
                ...[],
            });
        this.controller = new VisualizationMenuController(
            this
        );
    }

    initializeVisualizations() {
        this.items = [
            new VisualizationMenuItem(
                new Needles(
                    0,
                    this.visualizationSection.layout
                ),
                "Needles",
                0,
                {
                    x: this.layout.x,
                    y: this.layout.y + 0.2 * this.layout.height,
                    width: 0.2 * this.layout.width,
                    height: 0.2 * this.layout.height,
                    ...[],
                }
            ),
            //            new VisualizationMenuItem(
            //                new Spectrum(
            //                    1,
            //                    this.visualizationSection.layout
            //                ),
            //                "Spectrum",
            //                1,
            //                {
            //                    x: this.layout.x,
            //                    y: this.layout.y + 2 *(0.2 * this.layout.height),
            //                    width: 0.2 * this.layout.width,
            //                    height: 0.2 * this.layout.height,
            //                    ...[],
            //                }
            //            ),
            //            new VisualizationMenuItem(
            //                new WavePattern(
            //                    2,
            //                    this.visualizationSection.layout
            //                ),
            //                "WavePattern",
            //                2,
            //                {
            //                    x: this.layout.x,
            //                    y: this.layout.y + 3 *(0.2 * this.layout.height),
            //                    width: 0.2 * this.layout.width,
            //                    height: 0.2 * this.layout.height,
            //                    ...[],
            //                }
            //            ),
            //            new VisualizationMenuItem(
            //                new CyberWall(
            //                    3,
            //                    this.visualizationSection.layout
            //                ),
            //                "CyberWave",
            //                3,
            //                {
            //                    x: this.layout.x,
            //                    y: this.layout.y + 4 *(0.2 * this.layout.height),
            //                    width: 0.2 * this.layout.width,
            //                    height: 0.2 * this.layout.height,
            //                    ...[],
            //                }
            //            ),
            //            new VisualizationMenuItem(
            //                new ThreeDimensional(
            //                    4, 
            //                    this.visualizationSection.layout
            //                ),
            //                "ThreeDimensional",
            //                4,
            //                {
            //                    x: this.layout.x + 0.2 * this.layout.width,
            //                    y: this.layout.y + (0.2 * this.layout.height),
            //                    width: 0.2 * this.layout.width,
            //                    height: 0.2 * this.layout.height,
            //                    ...[]
            //                }
            //            )
        ];
        this.setVisualization(0);
    }

    setVisualization(id) {
        this.visualizationSection.setVisualization(
            this.items[id]
        );
    }

    render() {
        this.renderHeader();
    }

    renderHeader() {
        stroke(this.layout.strokeColor);
        fill(this.layout.bgColor);
        rect(
            this.layout.x,
            this.layout.y,
            0.2 * this.layout.width,
            0.2 * this.layout.height
        );
        stroke(0, 0, 0, 0);
        fill(233, 235, 237);
        textSize(20);
        text(
            "Visualization Menu",
            this.layout.x + 0.02 * this.layout.width,
            this.layout.y + 0.1 * this.layout.height
        );
    }
}
