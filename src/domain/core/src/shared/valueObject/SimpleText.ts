export default class SimpleText {
  constructor(readonly value: string, min: number = 3, max: number = 120) {
      if (min > max)
          throw new Error('O tamanho mínimo não pode ser maior que o máximo');

      if (!value) throw new Error('O nome não pode ser vazio');

      if (value.length < min || value.length > max)
          throw new Error(`O nome deve ter entre ${min} e ${max} caracteres`);
  }
}
