
import { count } from './countCharactersInYourString';

describe('countCharactersInYourString', () => {
  it('count', () => {
    expect(count('aba')).toEqual({ a: 2, b: 1 })
    expect(count('')).toEqual({})
  })
})
