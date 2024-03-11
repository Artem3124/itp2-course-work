//// Class responsible for rendering all renderable objects
class Renderer {
    /** 
     * Constructor function for Renderer.
     * 
     * Initializes the Renderer with a collection of renderable objects.
     */
    constructor() {
        // collection of objects implements renderable
    }

    /** 
     * Updates the collection of objects to be rendered.
     * 
     * @param {Renderable[]} objectsToRender - The collection of renderable objects to be updated.
     */
    update(objectsToRender) {
        this.objectsToRender = objectsToRender;
    }

    /** 
     * Renders all the renderable objects.
     */
    renderAll() {
        const objToRender = Renderable.instances;
        for (let i = 0; i < objToRender.length; i++) {
            let object = objToRender[i];
            if (this.#isComponent(object)) {
                object.renderLayout();
            }

            if (this.#isRenderable(object)) {
                object.render();
            }
        }
    }


    /** 
     * Resizes all the renderable objects.
     */
    resizeAll() {
        const objToRender = Renderable.instances;
        for (let i = 0; i < objToRender.length; i++) {
            let object = objToRender[i];
            if (this.#isComponent(object)) {
                object.renderLayout();
            }

            if (this.#isRenderable(object)) {
                object.resize();
            }
        }
    }

    /** 
     * Checks if an object is renderable.
     * 
     * @param {object} object - The object to be checked.
     * @returns {boolean} - Returns true if the object is renderable, otherwise false.
     */
    #isRenderable(object) {
        return object instanceof Renderable;
    }

    /** 
     * Checks if an object is a component.
     * 
     * @param {object} object - The object to be checked.
     * @returns {boolean} - Returns true if the object is a component, otherwise false.
     */
    #isComponent(object) {
        return object instanceof Component;
    }
}
