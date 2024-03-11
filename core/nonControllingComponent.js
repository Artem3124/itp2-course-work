class NonControllingComponent extends Component {
    /*
    * Non controlling component is extended by all 
    * the components that do not have any 
    * controllable items inside and doesn't 
    * affect by controller.
    *
    * Layout model parameter.
    *
    * @params layout: {
    *    x: number, - location of x coordinate,
    *    y: number, - location of y coordinate,
    *    width: number, - width of object's layout,
    *    height: number, - height of object's layout,
    *    strokeColor?: p5.js color - stroke color of layout,
    *    bgColor?: p5.js color - background color of layout,
    * }
    */
    constructor(layout) {
        super(layout);
    }
}
