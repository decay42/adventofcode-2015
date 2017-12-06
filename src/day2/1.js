import Day2 from './Day2'
import Present from './Present'

const day2 = new Day2()

let paper = 0

for (const present of day2.input) {
  paper += new Present(present).areaAndExtra
}

console.log(paper)
