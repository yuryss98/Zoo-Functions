const { handlerElephants, getElephants, averageAge, computeData } = require('../src/handlerElephants');

describe('testes da função getElephants', () => {
  it('testa se ela e de fato uma função', () => {
    expect(typeof getElephants).toBe('function');
  });
  it('verifique se ela retorna todo o objeto do elefante', () => {
    expect(getElephants()).toEqual({
      id: 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5',
      name: 'elephants',
      popularity: 5,
      location: 'NW',
      availability: ['Friday', 'Saturday', 'Sunday', 'Tuesday'],
      residents: [
        {
          name: 'Ilana',
          sex: 'female',
          age: 11,
        },
        {
          name: 'Orval',
          sex: 'male',
          age: 15,
        },
        {
          name: 'Bea',
          sex: 'female',
          age: 12,
        },
        {
          name: 'Jefferson',
          sex: 'male',
          age: 4,
        },
      ],
    });
  });
});

describe('Testes da função averageAge', () => {
  it('testa se é uma função', () => {
    expect(typeof averageAge).toBe('function');
  });
  it('teste se ela retorna a média de idade dos elefantes', () => {
    const retornoDeGetElephants = getElephants();
    // const { residents } = retornoDeGetElephants;
    expect(averageAge(retornoDeGetElephants)).toBeCloseTo(10.5);
  });
});

describe('Testes da função computeData', () => {
  const retornoDeGetElephants = getElephants();
  it('testa se ela e uma função', () => {
    expect(typeof computeData).toBe('function');
  });
  it('teste se ao passar os parametro ("count", retornoDeGetElephants) retorna 4', () => {
    expect(computeData('count', retornoDeGetElephants)).toBe(4);
  });
  it('testa se ao passar os parametros ("avarage", retornoDeGetElephants) retorna 10.5', () => {
    expect(computeData('averageAge', retornoDeGetElephants)).toBeCloseTo(10.5);
  });
  it('testa se ao passar um parametro desconhecido retorna null', () => {
    expect(computeData('desconhecido', retornoDeGetElephants)).toBeNull();
  });
});

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
});
