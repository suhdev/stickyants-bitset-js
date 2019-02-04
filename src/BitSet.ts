const numberLength = 31; 
export class BitSet {
  vector: number[] = [];

  update(idx: number, val: boolean) {
    var vectorIndex = Math.floor(idx / numberLength);
    this.expand(idx);
    if (val) {
      this.vector[vectorIndex] |= 1 << (idx % numberLength);
    } else {
      this.vector[vectorIndex] &= ~(1 << (idx % numberLength));
    }
  }

  expand(idx: number) {
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
  }

  getBit(idx: number) {
    var vectorIndex = Math.floor(idx / numberLength);
    if (vectorIndex >= this.vector.length){
      return 0;
    }
    var val = this.vector[vectorIndex];
    return (val >> (idx % numberLength)) & 0x1;
  }

  toggle(idx: number) {
    if (this.isClear(idx)) {
      this.set(idx);
    } else {
      this.clear(idx);
    }
  }

  set(idx: number) {
    this.update(idx, true);
  }

  clear(idx: number) {
    this.update(idx, false);
  }

  isSet(idx: number) {
    return this.getBit(idx) === 1;
  }

  isClear(idx: number) {
    return this.getBit(idx) === 0;
  }

  getValue() {
    return this.vector;
  }

  toString() {
    return this.vector.map(e => e.toString(2)).join('');
  }
}