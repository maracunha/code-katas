import breakCamelCase from './breakCamelCase';

describe('breakCamelCase', () => {
  it('camelCasing', () => {
    expect(breakCamelCase('camelCasing')).toEqual('camel Casing')
  })
})
