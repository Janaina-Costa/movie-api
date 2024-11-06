export default class Url {
  private url: URL;

  constructor(readonly value: string) {
    this.value = value ?? "";

    if (!Url.isValid(this.value)) {
      throw new Error("Invalid URL");
    }

    this.url = new URL(this.value);
  }

  get protocol(): string {
    return this.url.protocol;
  }

  get domain(): string {
    return this.url.hostname;
  }

  get path(): string {
    return this.url.pathname;
  }

  get parameters(): any {
    const params = this.url.searchParams.toString().split("&");
    return params.reduce((paramsObj, param) => {
      const [chave, valor] = param.split("=");
      return { ...paramsObj, [chave!]: valor };
    }, {} as any);
  }

  static isValid(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  }
}
