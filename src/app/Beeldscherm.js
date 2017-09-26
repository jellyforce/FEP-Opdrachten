"use strict";
exports.__esModule = true;
var Orientation_1 = require("./Orientation");
var Beeldscherm = /** @class */ (function () {
    function Beeldscherm(w, h) {
        this.width = w;
        this.height = h;
    }
    Beeldscherm.prototype.getOrientation = function () {
        if (this.width > this.height) {
            return Orientation_1.Orientation.Landscape;
        }
        else {
            return Orientation_1.Orientation.Portrait;
        }
    };
    return Beeldscherm;
}());
exports.Beeldscherm = Beeldscherm;
var b = new Beeldscherm(20, 30);
console.log(b.getOrientation());
