import Input from '../Input'

export default class extends Input {
  constructor () {
    super('day3')

    this.position = {x: 0, y: 0}
    this.visited = []
  }

  get x () {
    return this.position.x
  }

  get y () {
    this.position.y
  }

  visit (coords) {
    if (this.hasVisited(this.position)) {
      // console.log(this.position, this.visited)
      this.position = coords
      throw new Error()
    } else {
      this.visited.push(`${this.position.x},${this.position.y}`)
      this.position = coords
    }
    /*if (this.hasVisited(coords)) {
      throw new Error()
    } else {
      this.visited.push(`${coords.x},${coords.y}`)
    }*/
  }

  hasVisited (coords) {
    // console.log(coords, this.visited[this.visited.indexOf(`${coords.x},${coords.y}`)], this.visited.indexOf(`${coords.x},${coords.y}`) !== -1)

    return this.visited.indexOf(`${coords.x},${coords.y}`) !== -1
  }
}
