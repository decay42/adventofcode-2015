export default class {
  constructor (present) {
    this.a = present[0]
    this.b = present[1]
    this.c = present[2]
  }

  get area () {
    return 2 * (this.a * this.b + this.b * this.c + this.a * this.c)
  }

  get extra () {
    return this.a * this.b
  }

  get areaAndExtra () {
    return this.area + this.extra
  }

  get ribbon () {
    return 2 * this.a + 2 * this.b
  }

  get ribbonExtra () {
    return this.a * this.b * this.c
  }

  get ribbonAndExtra () {
    return this.ribbon + this.ribbonExtra
  }
}
