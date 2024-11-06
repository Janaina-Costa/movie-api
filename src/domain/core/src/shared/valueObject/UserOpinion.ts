import SimpleText from "./SimpleText";

export default class UserOpinion extends SimpleText {
  constructor(value: string, min: number = 3, max: number = 360) {
    super(value, min, max);
  }
}
