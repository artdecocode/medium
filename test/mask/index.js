import { makeTestSuite } from 'zoroaster'
import Context from '../context'
import medium from '../../src'

const ts = makeTestSuite('test/result', {
  async getResults(input) {
    const res = await medium({
      text: input,
    })
    return res
  },
  context: Context,
})

// export default ts
