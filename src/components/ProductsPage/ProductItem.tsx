import { Option, Some, None } from "oxide.ts";

export class ProductItem {
  id: number;
  iname: string;
  img_link: string;
  price: number;

  constructor(id: number, iname: string, img_link: string, price: number) {
    this.id = id;
    this.iname = iname;
    this.img_link = img_link;
    this.price = price;
  }

  static fromData(data: any): Option<ProductItem> {
    if (
      typeof data.id === "number" &&
      typeof data.iname === "string" &&
      typeof data.img_link === "string" &&
      typeof data.price === "number"
    ) {
      return Some(
        new ProductItem(data.id, data.iname, data.img_link, data.price),
      );
    } else return None;
  }
}
