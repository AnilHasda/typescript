"use strict";
class Temperature {
    _celcius;
    constructor(_celcius) {
        this._celcius = _celcius;
    }
    get celcius() {
        return this._celcius;
    }
    set celcius(degree) {
        this._celcius = degree;
    }
}
