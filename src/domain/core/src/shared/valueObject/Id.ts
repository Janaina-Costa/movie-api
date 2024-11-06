import { v4 as uuid, validate } from "uuid";

export default class Id {
  readonly value: string;

  constructor(value?: string) {
    this.value = value ?? uuid();

    if (!Id.isValido(this.value)) {
      throw new Error(`Invalid id: ${value}`);
    }
  }

  static isValido(id: string): boolean {
    return validate(id);
  }
}
