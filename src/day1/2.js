import Day1 from './Day1'

const day1 = new Day1()

let floor = 0
let position = 1

for (const instruction of day1.input) {
  floor += (instruction === '(') ? 1 : -1
  if (floor < 0) {
    break
  }
  position++
}

console.log(position)
