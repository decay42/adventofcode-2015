import Day2 from './Day2'
import Present from './Present'

const day2 = new Day2()

let ribbon = 0

for (const present of day2.input) {
  ribbon += new Present(present).ribbonAndExtra
}

console.log(ribbon)
