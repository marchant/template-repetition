/**
 * @module ui/main.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },
    data : {
        value: [
        {
            "make": "Toyota",
            "model": "Camry",
            "modelYear": 2009,
            "licensePlate": "GA39 150543"
        },
        {
            "make": "Honda",
            "model": "Civic",
            "modelYear": 2014,
            "licensePlate": "B890 652511"
        },
        {
            "make": "Acura",
            "model": "RDX",
            "modelYear": 2016,
            "licensePlate": "XC05 355523"
        },
        {
            "make": "Nissan",
            "model": "Leaf",
            "modelYear": 2015,
            "licensePlate": "KA09 650543"
        }
        ]   
    }

});
