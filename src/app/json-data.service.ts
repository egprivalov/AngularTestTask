import { Injectable } from '@angular/core';
import { Data } from "../data";

export type dataType = "income" | "outcome" | "investment" | "loan"

export interface ITransaction {
  "_id" : string,
  "amount" : string,
  "type" : string,
  "name": {
    "first": string,
    "last": string
  },
  "company": string,
  "email": string,
  "phone": string,
  "address": string
}

@Injectable({
  providedIn: 'root'
})
export class JsonDataService {
  structuredData = {
    "total": 0,
    "income": {
      count: 0,
      transactions: <ITransaction[]>[]
    },
    "outcome": {
      count: 0,
      transactions: <ITransaction[]>[]
    },
    "investment": {
      count: 0,
      transactions: <ITransaction[]>[]
    },
    "loan": {
      count: 0,
      transactions: <ITransaction[]>[]
    }
  }

  constructor() {
    this.structuredData.total = Data.total;
    Data.data.forEach((element: ITransaction) => {
      switch (element.type){
        case "income":
          this.structuredData.income.count += 1;
          this.structuredData.income.transactions.push(element);
          break;
        case "outcome":
          this.structuredData.outcome.count += 1;
          this.structuredData.outcome.transactions.push(element);
          break;
        case "investment":
          this.structuredData.investment.count += 1;
          this.structuredData.investment.transactions.push(element);
          break;
        case "loan":
          this.structuredData.loan.count += 1;
          this.structuredData.loan.transactions.push(element);
          break;
        default:
          throw new Error("Что то пошло не так")
      }
    })
    for (let prop in Data) { if (Data.hasOwnProperty(prop)) { delete Data[prop]; } }
  }

  getTotal(): number{
    return this.structuredData.total
  }
  getTotalByType(type: dataType): number {
    return this.structuredData[type].count;
  }
  getDataByType(type: dataType): ITransaction[]{
    return this.structuredData[type].transactions
  }
}
