export default class Image {
  private readonly allowedExtensions = ["jpg", "jpeg", "png", "svg"];

  constructor(private readonly imageName?: string) {
    this.imageName = imageName ?? ''
    this.validate();
  }

  private validate(): void {
    const extension = this.getExtension(this.imageName);
    if (!this.allowedExtensions.includes(extension)) {
      throw new Error("Invalid image extension");
    }
  }

  private getExtension(value?: string) {
    return value?.split(".").pop()?.toLocaleLowerCase() ?? "";
  }
}
