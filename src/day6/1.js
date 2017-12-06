import Day6 from './Day6'

const day6 = new Day6()

for (const row of day6.input) {
  const obj = day6.parse(row)

  for (let i = obj.from.x; i <= obj.to.x; i++) {
    for (let j = obj.from.y; j <= obj.to.y; j++) {
      if (obj.instruction === 'on') {
        day6.lights[i][j] = 1
      } else if (obj.instruction === 'off') {
        day6.lights[i][j] = 0
      } else {
        day6.lights[i][j] = +!day6.lights[i][j]
      }
    }
  }
}

const amountLights = day6.lights.reduce((a, b) => a + b.reduce((a, b) => a + b, 0), 0)

console.log(amountLights)
