export default interface IdAdapter {
  generate(): string;
  isValid(id: string): boolean;
}
