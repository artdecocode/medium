import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import medium from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof medium, 'function')
  },
  async 'calls package without error'() {
    await medium()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await medium({
      text: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T