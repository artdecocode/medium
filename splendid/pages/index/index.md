# Main Page

What if we could import in JS programs like this:

```js
import catchment.Catchment
import stream.Readable

const sc = new Catchment()
const r = new Readable() {
  read() {
    this.push('ok')
    this.push(null)
  }
}
```

The problem is that ATM it is not even understood by the language parsers but this is what JS future will look like.

<section-break/>