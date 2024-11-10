import UuidAdapter from "@/infrastructure/uuid/UuidAdapter";
import IdAdapter from "../../movie/provider/IdAdapter";

export default class Id {
  private static iDAdapter: IdAdapter = new UuidAdapter();
  readonly value: string | undefined;

  constructor(value?: string) {
    this.value = value ?? Id.iDAdapter.generate();

    if (!Id.isValid(this.value!)) {
      throw new Error(`Invalid id: ${value}`);
    }
  }

  static isValid(id: string): boolean {
    return this.iDAdapter.isValid(id);
  }
}
