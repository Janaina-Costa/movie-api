export default class Url {
  private url: URL;

  constructor(readonly linkUrl?: string) {
    this.linkUrl = linkUrl ?? "";

    if (!Url.isValid(this.linkUrl)) {
      throw new Error("Invalid URL");
    }

    this.url = new URL(this.linkUrl);
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
