const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('testa se ela e uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('retorna underfined quando passado parametro vazio', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('retorna a mensagem "Parâmetro inválido, é necessário uma string" quando passar um parametro que seja dierente de uma string', () => {
    expect(handlerElephants(1)).toMatch('Parâmetro inválido, é necessário uma string');
  });
  it('testa se handlerElephants("id") retorna "bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5"', () => {
    expect(handlerElephants('id')).toMatch('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5');
  });
  it('testa se ao passar o parametro "names" retorna o seguinte array ["Ilana", "Orval", "Bea", "Jefferson"]', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('teste se passar o parametro (averageAge) ela retorna 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('teste se passar o parametro (count) ela retorna 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('testa se ao passar um parametro desconhecido retorna null', () => {
    expect(handlerElephants('desconhecido')).toBeNull();
  });
});
