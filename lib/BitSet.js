"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var numberLength = 31;
var BitSet = /** @class */ (function () {
    function BitSet() {
        this.vector = [];
    }
    BitSet.prototype.update = function (idx, val) {
        var vectorIndex = Math.floor(idx / numberLength);
        this.expand(idx);
        if (val) {
            this.vector[vectorIndex] |= 1 << (idx % numberLength);
        }
        else {
            this.vector[vectorIndex] &= ~(1 << (idx % numberLength));
        }
    };
    BitSet.prototype.expand = function (idx) {
        var updated = false;
        var vectorIndex = Math.floor(idx / numberLength);
        if (vectorIndex >= this.vector.length) {
            var len = this.vector.length - vectorIndex;
            if (len > 0) {
                updated = true;
            }
            for (var i = 0; i < len; i++) {
                this.vector.push(0);
            }
        }
        if (updated) {
            this.vector = this.vector.slice(0);
        }
    };
    BitSet.prototype.getBit = function (idx) {
        var vectorIndex = Math.floor(idx / numberLength);
        if (vectorIndex >= this.vector.length) {
            return 0;
        }
        var val = this.vector[vectorIndex];
        return (val >> (idx % numberLength)) & 0x1;
    };
    BitSet.prototype.toggle = function (idx) {
        if (this.isClear(idx)) {
            this.set(idx);
        }
        else {
            this.clear(idx);
        }
    };
    BitSet.prototype.set = function (idx) {
        this.update(idx, true);
    };
    BitSet.prototype.clear = function (idx) {
        this.update(idx, false);
    };
    BitSet.prototype.isSet = function (idx) {
        return this.getBit(idx) === 1;
    };
    BitSet.prototype.isClear = function (idx) {
        return this.getBit(idx) === 0;
    };
    BitSet.prototype.getValue = function () {
        return this.vector;
    };
    BitSet.prototype.toString = function () {
        return this.vector.map(function (e) { return e.toString(2); }).join('');
    };
    return BitSet;
}());
exports.BitSet = BitSet;
