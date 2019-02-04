"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = require("mobx");
var numberLength = 31;
var ObservableBitSet = /** @class */ (function () {
    function ObservableBitSet() {
        this.vector = [];
    }
    ObservableBitSet.prototype.update = function (idx, val) {
        var vectorIndex = Math.floor(idx / numberLength);
        this.expand(idx);
        if (val) {
            this.vector[vectorIndex] |= 1 << (idx % numberLength);
        }
        else {
            this.vector[vectorIndex] &= ~(1 << (idx % numberLength));
        }
    };
    ObservableBitSet.prototype.expand = function (idx) {
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
    ObservableBitSet.prototype.getBit = function (idx) {
        var vectorIndex = Math.floor(idx / numberLength);
        if (vectorIndex >= this.vector.length) {
            return 0;
        }
        var val = this.vector[vectorIndex];
        return (val >> (idx % numberLength)) & 0x1;
    };
    ObservableBitSet.prototype.toggle = function (idx) {
        if (this.isClear(idx)) {
            this.set(idx);
        }
        else {
            this.clear(idx);
        }
    };
    ObservableBitSet.prototype.set = function (idx) {
        this.update(idx, true);
    };
    ObservableBitSet.prototype.clear = function (idx) {
        this.update(idx, false);
    };
    ObservableBitSet.prototype.isSet = function (idx) {
        return this.getBit(idx) === 1;
    };
    ObservableBitSet.prototype.isClear = function (idx) {
        return this.getBit(idx) === 0;
    };
    ObservableBitSet.prototype.getValue = function () {
        return this.vector;
    };
    ObservableBitSet.prototype.toString = function () {
        return this.vector.map(function (e) { return e.toString(2); }).join('');
    };
    __decorate([
        mobx_1.observable.ref
    ], ObservableBitSet.prototype, "vector", void 0);
    __decorate([
        mobx_1.action.bound
    ], ObservableBitSet.prototype, "update", null);
    __decorate([
        mobx_1.action.bound
    ], ObservableBitSet.prototype, "expand", null);
    __decorate([
        mobx_1.action.bound
    ], ObservableBitSet.prototype, "toggle", null);
    __decorate([
        mobx_1.action.bound
    ], ObservableBitSet.prototype, "set", null);
    __decorate([
        mobx_1.action.bound
    ], ObservableBitSet.prototype, "clear", null);
    return ObservableBitSet;
}());
exports.ObservableBitSet = ObservableBitSet;
