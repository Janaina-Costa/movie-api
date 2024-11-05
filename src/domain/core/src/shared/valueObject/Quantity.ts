export default class Quantity{
  private quantity: number;

  constructor(quantity: number) {
    if (quantity < 0) {
      throw new Error('Quantity must be greater than or equal to 0');
    }
    this.quantity = quantity;
  }

  get value(): number {
    return this.quantity;
  }
}