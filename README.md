# bvid.js

A mysterious number converter.

All credit goes to mcfx. [Reference](https://www.zhihu.com/question/381784377/answer/1099438784)

## Install

### In Browser

```html
<script src="bvid.js"></script>
```

### Node.js

```bash
$ npm install --save bvid
```

```javascript
const bvid = require('bvid')
```

## Usage

```javascript
bvid.encode(170001) // BV17x411w7KC
bvid.decode('BV17x411w7KC') // 170001
```