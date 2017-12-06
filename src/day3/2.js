import Day3 from './Day3'

const day3 = new Day3()

let santa1 = {x: 0, y: 0}
let santa2 = {x: 0, y: 0}
let visited = []

for (let i = 0, len = day3.input.length; i < len; i += 2) {
  const s1Pos = `${santa1.x},${santa1.y}`
  const s2Pos = `${santa2.x},${santa2.y}`

  if (visited.indexOf(s1Pos) === -1) {
    visited.push(s1Pos)
  }
  santa1 = move(santa1, day3.input[i])

  if (visited.indexOf(s2Pos) === -1) {
    visited.push(s2Pos)
  }
  santa2 = move(santa2, day3.input[i + 1])
}

console.log(visited.length + 1)

function move (santa, direction) {
  if (direction === '>') {
    santa = {x: santa.x + 1, y: santa.y}
  } else if (direction === '^') {
    santa = {x: santa.x, y: santa.y + 1}
  } else if (direction === '<') {
    santa = {x: santa.x - 1, y: santa.y}
  } else {
    santa = {x: santa.x, y: santa.y - 1}
  }
  return santa
}
