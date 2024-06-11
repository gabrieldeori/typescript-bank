export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private status: boolean = true

  protected balance: number = 0

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (amount: number): void => {
    if(this.validateStatus()){
      this.balance += amount
      console.log(`Você depositou ${amount}, seu saldo atual é ${this.balance}`)
    } else {
      console.log("Você não está validado para a operação")
    }
  }

  withdraw = (amount: number): void => {
    if (this.validateStatus()) {
      this.balance -= amount
      console.log(`Voce sacou ${amount}, saldo atual é ${this.balance}`)
    } else {
      console.log("Você não está validado para a operação")
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
