import SimpleText from "./SimpleText";

export default class MovieName extends SimpleText {
  constructor(value: string, min: number = 1, max: number = 120) {
    super(value, min, max);
    if (!value.match(/^[a-zA-ZÀ-ÿ0-9&\s]+$/)) {
      throw new Error("Movie name contains invalid characters");
    }
    MovieName.sanitizeName(value);
  }

  static sanitizeName(value: string): string {
    return value.toLowerCase().toUpperCase().trim();
  }
}
