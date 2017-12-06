import Day5 from './Day5'

const day5 = new Day5()

let nice = 0
let nice2 = 0

for (const word of day5.input) {
  if (day5.isNice(word)) {
    nice++
  }
  if (day5.isNice2(word)) {
    nice2++
  }
}

console.log(`Part 1: ${nice}, Part 2: ${nice2}`)
