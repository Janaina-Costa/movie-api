export default interface UseCase<INPUT, OUTPUT> {
  execute(input: INPUT): Promise<OUTPUT>;
}
