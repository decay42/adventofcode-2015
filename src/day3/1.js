import Day3 from './Day3'

const day3 = new Day3()

let doubles = 0

for (const instruction of day3.input) {
  try {
    const curPos = day3.position
    if (instruction === '>') {
      day3.visit({x: curPos.x + 1, y: curPos.y})
    } else if (instruction === '^') {
      day3.visit({x: curPos.x, y: curPos.y + 1})
    } else if (instruction === '<') {
      day3.visit({x: curPos.x - 1, y: curPos.y})
    } else {
      day3.visit({x: curPos.x, y: curPos.y - 1})
    }
  } catch (err) {
    doubles++
  }
}

console.log(day3.visited.length)
