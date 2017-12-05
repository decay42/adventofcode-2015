import Day1 from './Day1'

const day1 = new Day1()

let floor = 0

for (const instruction of day1.input) {
  floor += (instruction === '(') ? 1 : -1
}

console.log(floor)
