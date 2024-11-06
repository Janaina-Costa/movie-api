export default class UserReview {
  private readonly allowedReviews = [
    "PESSIMO",
    "RUIM",
    "REGULAR",
    "BOM",
    "MUITO BOM",
    "EXCELENTE",
  ];

  constructor(private readonly value: string) {
    this.value = value ?? "";
    this.validateValue;
  }
  private validateValue(): void {
    const review = this.formateValue(this.value);
    if (!this.allowedReviews.includes(review)) {
      throw new Error("Invalid review");
    }
  }

  private formateValue(value: string): string {
    return value.toLowerCase().toLocaleUpperCase();
  }

  get review(): string {
    return this.formateValue(this.value);
  }
}
