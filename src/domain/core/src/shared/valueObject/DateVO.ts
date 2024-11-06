import { parse, isValid, formatDate } from "date-fns";

export default class DateVO {
  private date: Date;

  constructor(value: string, format: string = "dd-MM-yyyy") {
    const parsedDate = parse(value, format, new Date());

    if (!isValid(parsedDate)) {
      throw new Error("Invalid date");
    }
    this.date = parsedDate;
  }

  get value(): string {
    return this.toStringDate();
  }

  toStringDate(format: string = "dd-MM-yyyy"): string {
    return formatDate(this.date, format);
  }

  static isValid(value: string, format: string = "dd-MM-yyyy"): boolean {
    const date = parse(value, format, new Date());
    return isValid(date);
  }

  static parse(value: string, format: string = "dd-MM-yyyy"): DateVO {
    return new DateVO(value, format);
  }
}
