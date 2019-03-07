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

## Uploading a file as block blob

```js
async uploadBlob() {
  const { file } = this.props
  /**
    * @type {import('azure-storage').BlobService}
    */
  const blobService = this.props.blobService
  if (blobService) {
    const blockSize = file.size > 1024 * 1024 * 32 ? 1024 * 1024 * 4 : 1024 * 512
    blobService.singleBlobPutThresholdInBytes = blockSize
    const speedSummary = blobService.createBlockBlobFromBrowserFile(
      'web-uploads', file.name, file,
      { blockSize },
      (error, result) => {
        this.setState({ uploaded: true, progress: null })
        if(error) {
          this.setState({ error: error.message })
        } else {
          console.log('Upload is successful')
        }
      })
    speedSummary.on('progress', () => {
      const progress = speedSummary.getCompletePercent()
      console.log(progress)
      this.updateProgress(progress)
    })
  }
}
```

<section-break/>