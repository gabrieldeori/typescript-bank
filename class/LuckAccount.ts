import { DioAccount } from "./DioAccount"

export class LuckAccount extends DioAccount {
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (amount: number): void => {
    if(this.validateStatus()){
      this.balance += amount + 10
      console.log(`Você depositou ${amount}, seu saldo atual é ${this.balance}`)
    } else {
      console.log("Você não está validado para a operação")
    }
  }
}