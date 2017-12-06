import md5 from 'md5'

const input = 'yzbqklnj'

let i = 0
while (true) {
  const currentHash = md5(input + i++)
  if (currentHash.startsWith('000000')) {
    break
  }
}
console.log(i - 1)
