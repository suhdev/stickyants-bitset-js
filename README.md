# stickyants-bitset-js 

A simple utlity library to work with Bit vectors. The library is built to mirror Java's BitSet class. 

## Usage 

```javascript

impor { BitSet } from 'stickyants-bitset-js'; 

var bs = new BitSet(); 

bs.set(1);
bs.set(0);
bs.set(100); 

bs.isSet(100) //true
bs.isClear(101) //true

```