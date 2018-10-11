import * as PIXI from "pixi.js";

class MyPixiApplication extends PIXI.Application {
    constructor(options: PIXI.ApplicationOptions) {
        super(options);

        // Append the generated HTMLCanvasElement to the document body
        document.body.appendChild(this.view);

        // Make the canvas fill the entire window
        this.renderer.view.style.position = "absolute";
        this.renderer.view.style.display = "block";
        this.renderer.resize(window.innerWidth, window.innerHeight);

        // Fill the entire window on resize
        window.addEventListener("resize", () => {
            this.renderer.resize(window.innerWidth, window.innerHeight);
        });

        this.renderer.backgroundColor = 0xadd8e6;
    }
}

// Default values are fine for this use
const opts: PIXI.ApplicationOptions = {};

const app = new MyPixiApplication(opts);
