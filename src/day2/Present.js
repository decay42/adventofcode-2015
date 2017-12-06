export default class {
  constructor (present) {
    this.a = present[0]
    this.b = present[1]
    this.c = present[2]
  }

  get areaAndExtra () {
    const area = 2 * (this.a * this.b + this.b * this.c + this.a * this.c)
    const extra = this.a * this.b
    return area + extra
  }

  get ribbonAndExtra () {
    const ribbon = 2 * this.a + 2 * this.b
    const extra = this.a * this.b * this.c
    return ribbon + extra
  }
}
