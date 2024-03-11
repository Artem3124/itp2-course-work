class ControllingComponent extends Component {
    /*
    * Controlling component is extended by all the components 
    * that do have controllable items 
    * inside as well as the controllers.
    *
    * Layout model parameter.
    * @params layout: {
    *    x: number, - location of x coordinate,
    *    y: number, - location of y coordinate ,
    *    width: number, - width of object's layout,
    *    height: number, - height of object's layout,
    *    strokeColor?: p5.js color - stroke color of layout, 
    *    bgColor?: p5.js color - background color of layout,
    * }
    * 
    * A collection of class objects whose classes extend Item.
    * @params items: Item[] 
    * 
    * Current(active) item in component;
    * @params item: Item;
    * 
    * Current component controller, or ControllerBaseState's instance by default;
    * @params controller: ControllerBaseState
    */
    constructor(layout, items = []) {
        super(layout);
        this.items = items;
        this.currentItem = undefined;
        this.controller = this.controller
            ? this.controller
            : new ControllerBaseState(this);
    }

    // General method for settings controllable/ manageable items.
    setItems(items) {
        this.items = items;
        this.setItem(items[0]);
    }

    // General method for setting a single item.
    setItem(item) {
        this.currentItem = item;
    }
}
