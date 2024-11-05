import { parse, isValid } from "date-fns";

export default class DateVO {
  private date: Date;

  constructor(dateString: string, format: string = "dd-MM-yyyy") {
    const parsedDate = parse(dateString, format, new Date());

    if (!isValid(parsedDate)) {
      throw new Error("Invalid date");
    }
    this.date = parsedDate;
  }

  get value(): Date {
    return this.date;
  }

  static isValid(dateString: string, format: string = "dd-MM-yyyy"): boolean {
    const date = parse(dateString, format, new Date());
    return isValid(date);
  }

  static parse(dateString: string, format: string = "dd-MM-yyyy"): DateVO {
    return new DateVO(dateString, format);
  }
}
