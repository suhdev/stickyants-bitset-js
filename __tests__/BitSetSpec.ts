import { BitSet } from '../src/BitSet'; 

describe('BitSet Suite',()=>{
  it('should set/clear bit correctly',()=>{
    var bs = new BitSet(); 
    bs.set(1);
    bs.set(2);
    bs.set(20);
    expect(bs.isSet(1)).toBe(true);
    expect(bs.isSet(2)).toBe(true);
    expect(bs.isSet(20)).toBe(true);
    expect(bs.toString()).toEqual((2 | 4 | (1 << 20)).toString(2));
    bs.clear(2);
    expect(bs.isClear(2));
    expect(bs.isSet(1));
    expect(bs.isSet(20));
  });

  it('should set bit correctly in vector beyond 31', () => {
    var bs = new BitSet();
    bs.set(1);
    bs.set(2);
    bs.set(31);
    bs.set(64);
    expect(bs.isSet(1)).toBe(true);
    expect(bs.isSet(2)).toBe(true);
    expect(bs.isSet(31)).toBe(true);
    expect(bs.isSet(64)).toBe(true);
    bs.clear(2);
    bs.clear(64); 
    expect(bs.isClear(2));
    expect(bs.isClear(64));
    expect(bs.isSet(1));
    expect(bs.isSet(31));
  });

  it('should expand correctly', () => {
    var bs = new BitSet();
    bs.set(128);
    expect(bs.isSet(128)).toBe(true);
    expect(bs.getValue().length).toEqual(Math.ceil(128/31));
    bs.set(5129);
    expect(bs.isSet(5129));
    expect(bs.getValue().length).toEqual(Math.ceil(5129 / 31));
  });

});