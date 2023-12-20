class Renderable {
    static instances = [];
    /*
    General interface to inherit behavior from
    */
    constructor() {
        console.log(Renderable.instances);
        Renderable.instances.push(this);
    }

    render() {
        throw new Error("Instance has no implementation");
    }
    
    resize() {
        throw new Error("Instance has no implementation");
    }

    onDestroy() { 
       this.onDestroyBase();
    }
    // Non overridable method
    onDestroyBase() { 
        Renderable.instances.splice(Renderable.instances.indexOf(this), 1);
    }
}
