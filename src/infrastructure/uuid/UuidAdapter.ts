import IdAdapter from "@/domain/core/src/movie/provider/IdAdapter";
import { v4 as uuid, validate } from "uuid";

export default class UuidAdapter implements IdAdapter {
  generate(): string {
    console.log("generate");

    return uuid();
  }
  isValid(id: string): boolean {
    return validate(id);
  }
}
