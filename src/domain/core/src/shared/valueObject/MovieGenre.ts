export default class MovieGenre {
  private readonly allowedGenres = [
    "AÇÃO",
    "ANIMAÇÃO",
    "AVENTURA",
    "COMÉDIA",
    "DOCUMENTÁRIO",
    "DRAMA",
    "FANTASIA",
    "FICÇÃO",
    "MUSICAL",
    "ROMANCE",
    "SUSPENSE",
    "TERROR",
    "BIOGRAFIA",
    "OUTRO",
  ];
  constructor(private value: string) {
    this.value = value ?? "";
    this.validateGere();
  }

  private validateGere(): void {
    const genre = this.formateValue(this.value);
    if (!this.allowedGenres.includes(genre)) {
      throw new Error("Invalid genre");
    }
  }

  private formateValue(value: string): string {
    return value.toLowerCase().toLocaleUpperCase().trim();
  }

  get genre(): string {
    return this.formateValue(this.value);
  }
}
