import { breakCamelCase, breakCamelCase2 } from './breakCamelCase';

describe('breakCamelCase', () => {
  it('breakCamelCase', () => {
    expect(breakCamelCase('camelCasing')).toEqual('camel Casing')
    expect(breakCamelCase('camelCasingTest')).toEqual('camel Casing Test')
  })

  it('breakCamelCase solution 2', () => {
    expect(breakCamelCase2('camelCasing')).toEqual('camel Casing')
    expect(breakCamelCase2('camelCasingTest')).toEqual('camel Casing Test')
  })
})
