import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { ProductTypeEnum } from '../models/enums/productType.enum';
import { UnitEnum } from '../models/enums/unit.enum';

@Injectable({ providedIn: 'root' })
export class ProductMockService {
  getCategories(): Category[] {
    return [{
      id: 0,
      name: "Alkohol",
      displayName: "Alkohol",
      createdOn: new Date(),
      modifiedOn: new Date(),
      products: [{
        id: 0,
        createdOn: new Date('17.01.2022'),
        modifiedOn: new Date('17.01.2022'),
        name: 'Baumgartner Märzen',
        price: {
          amount: 5.10,
          currency: {
            id: 0,
            name: "Euro",
            displayName: "Euro",
            currencyCode: "EUR"
          }
        },
        shortDescription: 'Bier',
        sortOrder: 1,
        productType: ProductTypeEnum.DRINK,
        units: [{
          sort: 0,
          amount: 250,
          unit: UnitEnum.ml
        }, {
          sort: 1,
          amount: 500,
          unit: UnitEnum.ml
        }]
      },
      {
        id: 1,
        createdOn: new Date('22.01.2022'),
        modifiedOn: new Date('25.01.2022'),
        name: 'Spritzer Weiß',
        price: {
          amount: 4.5,
          currency: {
            id: 0,
            name: "Euro",
            displayName: "Euro",
            currencyCode: "EUR"
          },
        },
        shortDescription: 'Wein',
        sortOrder: 2,
        productType: ProductTypeEnum.DRINK,
        units: [{
          sort: 0,
          amount: 250,
          unit: UnitEnum.ml
        }, {
          sort: 1,
          amount: 500,
          unit: UnitEnum.ml
        }]
      }, {
        id: 2,
        createdOn: new Date('10.01.2022'),
        modifiedOn: new Date('30.01.2022'),
        name: 'Cola Zero',
        price: {
          amount: 5.10,
          currency: {
            id: 0,
            name: "Euro",
            displayName: "Euro",
            currencyCode: "EUR"
          },
        },
        shortDescription: 'Cola',
        sortOrder: 3,
        productType: ProductTypeEnum.DRINK,
        units: [{
          sort: 0,
          amount: 250,
          unit: UnitEnum.ml
        }, {
          sort: 1,
          amount: 500,
          unit: UnitEnum.ml
        }]
      },
      {
        id: 3,
        createdOn: new Date('10.01.2022'),
        modifiedOn: new Date('30.01.2022'),
        name: 'Almdudler Leitung',
        price: {
          amount: 3.70,
          currency: {
            id: 0,
            name: "Euro",
            displayName: "Euro",
            currencyCode: "EUR"
          },
        },
        shortDescription: 'Almdudler',
        sortOrder: 3,
        productType: ProductTypeEnum.DRINK,
        units: [{
          sort: 0,
          amount: 250,
          unit: UnitEnum.ml
        }, {
          sort: 1,
          amount: 500,
          unit: UnitEnum.ml
        }]
      }],
    },
    {
      id: 1,
      name: "Essen",
      displayName: "Essen",
      createdOn: new Date('17.01.2022'),
      modifiedOn: new Date('17.01.2022'),
      products: [{
        id: 0,
        createdOn: new Date('10.01.2022'),
        modifiedOn: new Date('30.01.2022'),
        name: 'Leberkäsesemmel',
        price: {
          amount: 2.70,
          currency: {
            id: 0,
            name: "Euro",
            displayName: "Euro",
            currencyCode: "EUR"
          },
        },
        shortDescription: 'Leberkäsesemmel',
        sortOrder: 4,
        productType: ProductTypeEnum.FOOD,
        units: [{
          sort: 0,
          amount: 1,
          unit: UnitEnum['#']
        }]
      }, {
        id: 2,
        createdOn: new Date('10.01.2022'),
        modifiedOn: new Date('30.01.2022'),
        name: 'Käse-Leberkäsesemmel',
        price: {
          amount: 2.90,
          currency: {
            id: 0,
            name: "Euro",
            displayName: "Euro",
            currencyCode: "EUR"
          },
        },
        shortDescription: 'Käse-Leberkäsesemmel',
        sortOrder: 4,
        productType: ProductTypeEnum.FOOD,
        units: [{
          sort: 0,
          amount: 1,
          unit: UnitEnum['#']
        }]
      }, {
        id: 3,
        createdOn: new Date('10.01.2022'),
        modifiedOn: new Date('30.01.2022'),
        name: 'Gummischlange',
        price: {
          amount: 1.10,
          currency: {
            id: 0,
            name: "Euro",
            displayName: "Euro",
            currencyCode: "EUR"
          },
        },
        shortDescription: 'Gummischlange',
        sortOrder: 4,
        productType: ProductTypeEnum.FOOD,
        units: [{
          sort: 0,
          amount: 1,
          unit: UnitEnum['#']
        }]
      }, {
        id: 4,
        createdOn: new Date('10.01.2022'),
        modifiedOn: new Date('30.01.2022'),
        name: 'Schlecker div.',
        price: {
          amount: 1.50,
          currency: {
            id: 0,
            name: "Euro",
            displayName: "Euro",
            currencyCode: "EUR"
          },
        },
        shortDescription: 'Schlecker',
        sortOrder: 4,
        productType: ProductTypeEnum.FOOD,
        units: [{
          sort: 0,
          amount: 1,
          unit: UnitEnum['#']
        }]
      }]
    }
    ]
  }
}
