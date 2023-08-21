import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { ProductTypeEnum } from '../models/enums/productType.enum';
import { UnitEnum } from '../models/enums/unit.enum';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductMockService {
  getCategories(): Category[] {
    return [{
      id: 0,
      name: "Alkohol",
      displayName: "Alkohol",
      createdOn: new Date(),
      modifiedOn: new Date()
    }, {
      id: 1,
      name: "Anti",
      displayName: "Anti",
      createdOn: new Date(),
      modifiedOn: new Date()
    },
    {
      id: 2,
      name: "Essen",
      displayName: "Essen",
      createdOn: new Date(),
      modifiedOn: new Date()
    }
    ]
  }

  getProducts(): Product[] {
    return [{
      id: 0,
      createdOn: new Date(),
      modifiedOn: new Date(),
      name: 'Baumgartner Märzen',
      priceAmount: 5.20,
      currencyCode: "EUR",
      shortDescription: 'Bier',
      sortOrder: 1,
      productType: ProductTypeEnum.DRINK,
      unitAmount: 250,
      unit: UnitEnum.ml,
      categoryId: 0
    },
    {
      id: 1,
      createdOn: new Date(),
      modifiedOn: new Date(),
      name: 'Baumgartner Märzen',
      priceAmount: 5.20,
      currencyCode: "EUR",
      shortDescription: 'Bier',
      sortOrder: 1,
      productType: ProductTypeEnum.DRINK,
      unitAmount: 500,
      unit: UnitEnum.ml,
      categoryId: 0,
    },
    {
      id: 2,
      createdOn: new Date(),
      modifiedOn: new Date(),
      name: 'Spritzer Weiß',
      priceAmount: 5.20,
      currencyCode: "EUR",
      shortDescription: 'Wein',
      sortOrder: 2,
      productType: ProductTypeEnum.DRINK,
      unitAmount: 250,
      unit: UnitEnum.ml,
      categoryId: 0,
    },
    {
      id: 3,
      createdOn: new Date(),
      modifiedOn: new Date(),
      name: 'Spritzer Weiß',
      priceAmount: 5.20,
      currencyCode: "EUR",
      shortDescription: 'Wein',
      sortOrder: 2,
      productType: ProductTypeEnum.DRINK,
      unitAmount: 500,
      unit: UnitEnum.ml,
      categoryId: 0,
    }, {
      id: 4,
      createdOn: new Date(),
      modifiedOn: new Date(),
      name: 'Cola Zero',
      priceAmount: 5.20,
      currencyCode: "EUR",
      shortDescription: 'Cola',
      sortOrder: 3,
      productType: ProductTypeEnum.DRINK,
      unitAmount: 250,
      unit: UnitEnum.ml,
      categoryId: 1,
    },
    {
      id: 5,
      createdOn: new Date(),
      modifiedOn: new Date(),
      name: 'Almdudler Leitung',
      priceAmount: 5.20,
      currencyCode: "EUR",
      shortDescription: 'Almdudler',
      sortOrder: 3,
      productType: ProductTypeEnum.DRINK,
      unitAmount: 250,
      unit: UnitEnum.ml,
      categoryId: 1,
    },
    {
      id: 6,
      createdOn: new Date(),
      modifiedOn: new Date(),
      name: 'Leberkäsesemmel',
      priceAmount: 5.20,
      currencyCode: "EUR",
      shortDescription: 'Leberkäsesemmel',
      sortOrder: 4,
      productType: ProductTypeEnum.FOOD,
      unitAmount: 1,
      unit: UnitEnum['#'],
      categoryId: 2,
    }, {
      id: 7,
      createdOn: new Date(),
      modifiedOn: new Date(),
      name: 'Käse-Leberkäsesemmel',
      priceAmount: 5.20,
      currencyCode: "EUR",
      shortDescription: 'Käse-Leberkäsesemmel',
      sortOrder: 4,
      productType: ProductTypeEnum.FOOD,
      unitAmount: 1,
      unit: UnitEnum['#'],
      categoryId: 2,
    }, {
      id: 8,
      createdOn: new Date(),
      modifiedOn: new Date(),
      name: 'Gummischlange',
      priceAmount: 5.20,
      currencyCode: "EUR",
      shortDescription: 'Gummischlange',
      sortOrder: 4,
      productType: ProductTypeEnum.FOOD,
      unitAmount: 1,
      unit: UnitEnum['#'],
      categoryId: 2,
    }, {
      id: 9,
      createdOn: new Date(),
      modifiedOn: new Date(),
      name: 'Schlecker div.',
      priceAmount: 5.20,
      currencyCode: "EUR",
      shortDescription: 'Schlecker',
      sortOrder: 4,
      productType: ProductTypeEnum.FOOD,
      unitAmount: 1,
      unit: UnitEnum['#'],
      categoryId: 2,
    }]
  }
}
