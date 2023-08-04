import { Injectable } from '@angular/core';
import { Product, ProductType } from '../models/product';
import { Category } from '../models/category';

@Injectable({ providedIn: 'root' })
export class ProductMockService {
  getProducts(): Product[] {
    return [
      {
        id: '0',
        createdOn: new Date('17.01.2022'),
        modifiedOn: new Date('17.01.2022'),
        name: 'Baumgartner Märzen',
        price: 5.1,
        shortDescription: 'Bier',
        sortOrder: 1,
        currency: '€',
        type: ProductType.DRINK,
        amount: 500,
        unit: 'ml',
      },
      {
        id: '1',
        createdOn: new Date('22.01.2022'),
        modifiedOn: new Date('25.01.2022'),
        name: 'Spritzer Weiß',
        price: 4.5,
        shortDescription: 'Wein',
        sortOrder: 2,
        currency: '€',
        type: ProductType.DRINK,
        amount: 500,
        unit: 'ml',
      },
      {
        id: '2',
        createdOn: new Date('10.01.2022'),
        modifiedOn: new Date('30.01.2022'),
        name: 'Cola Zero',
        price: 5.1,
        shortDescription: 'Cola',
        sortOrder: 3,
        currency: '€',
        type: ProductType.DRINK,
        amount: 250,
        unit: 'ml',
      },
    ];
  }

  getCategories(): Category[] {
    return [{
      id: 0,
      name: "Alkohol",
      displayName: "Alkohol"
    }, {
      id: 1,
      name: "Limo",
      displayName: "Limo"
    }]
  }
}
