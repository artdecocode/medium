/* yarn example/ */
import medium from '../src'

(async () => {
  const res = await medium({
    text: 'example',
  })
  console.log(res)
})()