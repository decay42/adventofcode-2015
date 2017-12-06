import fs from 'fs'
import path from 'path'

export default class {
  constructor () {
    this.input = fs
      .readFileSync(
        path.resolve(__dirname, 'input.txt'),
        'utf8'
      )
      .trim()
      .split('\n')
      .map(line => {
        return line
          .split('x')
          .map(side => Number(side))
          .sort((a, b) => a - b)
      })
  }
}
