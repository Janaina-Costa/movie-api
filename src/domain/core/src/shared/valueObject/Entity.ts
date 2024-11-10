import Id from "./Id";

export interface EntityProps {
  id?: string;
  props?: any;
}

export default abstract class Entity<T, Props extends EntityProps> {
  readonly id: Id;
  readonly props: Props;

  constructor(props: Props) {
    this.id = new Id(props?.id!);
    this.props = { ...props, id: this.id.value };
  }

  isSameId(entidade: Entity<T, Props>): boolean {
    return this.id?.value === entidade.id?.value;
  }

  isDifferentId(entidade: Entity<T, Props>): boolean {
    return !this.isSameId(entidade);
  }

  clone(newProps: Props): T {
    return new (this.constructor as any)({ ...this.props, ...newProps });
  }
}
