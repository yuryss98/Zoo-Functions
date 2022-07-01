const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('testa se ela é uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  it('teste se ao passar um parametro vazio ela retorna um obj cotendo os horarios de funcionamento', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('teste se lança um erro ao digitar um dia da semana errado', () => {
    expect(() => getOpeningHours('monda', '09:00-PM')).toThrow();
  });
  it('teste se ao passar uma hora que nao é numero, lança um erro', () => {
    expect(() => getOpeningHours('Wednesday', 'ss:00-AM')).toThrow();
  });
  it('teste se ao passar um minuto que nao é numero, lança um erro', () => {
    expect(() => getOpeningHours('Saturday', '09:ss-AM')).toThrow();
  });
  it('teste se ao passar um horario sem PM ou AM, lança um erro', () => {
    expect(() => getOpeningHours('Sunday', '09:00')).toThrow();
  });
  it('teste se ao passar um horario com a abreviação errada, lança um erro', () => {
    expect(() => getOpeningHours('monday', '09:00-ss')).toThrow();
  });
  it('teste se ao passar uma hora que nao esteja no intervalo entre 0-12, lança um erro', () => {
    expect(() => getOpeningHours('Tuesday', '13:00-PM')).toThrow();
  });
  it('teste se ao passar um minuto que nao esteja no intervalo entre 0-59, lança um erro', () => {
    expect(() => getOpeningHours('monday', '12:60-PM')).toThrow();
  });
  it('teste se getOpeningHours("Friday", "10:00-AM") retorna "The zoo is open"', () => {
    expect(getOpeningHours('Friday', '10:00-AM')).toMatch('The zoo is open');
  });
  it('teste se getOpeningHours("monday", "09:00-PM") retorna "The zoo is closed"', () => {
    expect(getOpeningHours('saturday', '10:00-PM')).toMatch('The zoo is closed');
  });
  it('teste se getOpeningHours("monday", "09:00-PM") retorna "The zoo is closed"', () => {
    expect(getOpeningHours('monday', '09:00-PM')).toMatch('The zoo is closed');
  });
});
