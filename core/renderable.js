// Represents a renderable component
class Renderable {
    // Static property to keep track of instances
    static instances = [];

    /** 
     * Constructor function for Renderable.
     * 
     * Initializes the instances array and adds the current instance to it.
     */
    constructor() {
        // Log the current instances
        console.log(Renderable.instances);
        // Add the current instance to the instances array
        Renderable.instances.push(this);
    }

    // Public methods

    /**
     * Renders the component.
     * 
     * Throws an error since the method should be overridden by subclasses.
     */
    render() {
        throw new Error("Instance has no implementation");
    }
    
    /**
     * Resizes the component.
     * 
     * Throws an error since the method should be overridden by subclasses.
     */
    resize() {
        throw new Error("Instance has no implementation");
    }

    /**
     * Calls onDestroyBase method.
     * 
     * This method is intended to be overridden by subclasses for additional cleanup.
     */
    onDestroy() { 
       this.onDestroyBase();
    }
    
    // Private methods

    /**
     * Removes the current instance from the instances array.
     * 
     * This method should not be overridden by subclasses.
     * It removes the current instance from the instances array when called.
     * 
     * @private
     */
    onDestroyBase() { 
        // Remove the current instance from the instances array
        Renderable.instances.splice(Renderable.instances.indexOf(this), 1);
    }
}
