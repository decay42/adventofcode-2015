import Input from '../Input'

export default class Day6 extends Input {
  constructor () {
    super('day6')

    this.input = this.input.split('\n')

    this.lights = new Array(1000)
    for (let i = 0; i <= 999; i++) {
      this.lights[i] = new Array(1000)
      for (let j = 0; j <= 999; j++) {
        this.lights[i][j] = 0
      }
    }
  }

  parse (line) {
    let [, instruction, from, to] = /(\w+) (\d+,\d+) through (\d+,\d+)/.exec(line)
    from = from.split(',')
    from = {
      x: +from[0],
      y: +from[1]
    }
    to = to.split(',')
    to = {
      x: +to[0],
      y: +to[1]
    }
    return {instruction, from, to}
  }
}
