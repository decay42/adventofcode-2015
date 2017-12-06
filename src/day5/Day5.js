import Input from '../Input'

export default class Day5 extends Input {
  constructor () {
    super('day5')

    this.input = this.input.split('\n')
  }

  isNice (string) {
    /* It contains at least three vowels (aeiou only), like aei, xazegov, or aeiouaeiouaeiou.
       It contains at least one letter that appears twice in a row, like xx, abcdde (dd), or aabbccdd (aa, bb, cc, or dd).
       It does not contain the strings ab, cd, pq, or xy, even if they are part of one of the other requirements.
    */
    return /(.*[aeiou]){3}/.test(string) &&
      /([a-z])\1/.test(string) &&
      !string.includes('ab') &&
      !string.includes('cd') &&
      !string.includes('pq') &&
      !string.includes('xy')
  }

  isNice2 (string) {
    /* It contains a pair of any two letters that appears at least twice in the string without overlapping, like xyxy (xy) or aabcdefgaa (aa),
       but not like aaa (aa, but it overlaps).
       It contains at least one letter which repeats with exactly one letter between them, like xyx, abcdefeghi (efe), or even aaa.
    */
    return /([a-z]{2}).*\1/.test(string) &&
      /([a-z]).\1/.test(string)
  }
}
