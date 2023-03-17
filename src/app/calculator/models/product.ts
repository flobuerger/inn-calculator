export interface IProduct {
  id: string;
  name: string;
  shortDescription: string;
  createdOn: Date;
  modifiedOn: Date;
  sortOrder: number;
  price: number;
}

export class Product implements IProduct {
  id: string;
  name: string;
  shortDescription: string;
  createdOn: Date;
  modifiedOn: Date;
  sortOrder: number;
  price: number;

  public static NewInstance(product: any): IProduct {
    return {
      id: product.id,
      name: product.name,
      shortDescription: product.shortDescription,
      createdOn: product.createdOn,
      modifiedOn: product.modifedOn,
      sortOrder: product.sortOrder,
      price: product.price,
    };
  }

  public static NewInstances(products: any[]): IProduct[] {
    return products.map(Product.NewInstance);
  }

  public static PrepareCreate(product: IProduct): any {
    return {
      id: product.id,
      name: product.name,
      sortDescription: product.shortDescription,
      createdOn: product.createdOn,
      modifiedOn: product.modifiedOn,
      sortOrder: product.sortOrder,
      price: product.price,
    };
  }

  public static PrepareSave(product: IProduct): any {
    return {
      id: product.id,
      name: product.name,
      sortDescription: product.shortDescription,
      createdOn: product.createdOn,
      modifiedOn: product.modifiedOn,
      sortOrder: product.sortOrder,
      price: product.price,
    };
  }
}
