import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { LuckAccount } from './class/LuckAccount'

// People
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 0)
console.log(peopleAccount)

peopleAccount.getBalance()

peopleAccount.deposit(50)

console.log(peopleAccount.getName())

peopleAccount.setName('Nathália')

console.log(peopleAccount.getName())

peopleAccount.getBalance()

peopleAccount.deposit(1000)

peopleAccount.withdraw(500)

peopleAccount.getBalance()

peopleAccount.withdraw(2000)

peopleAccount.getBalance()

// Luck
const luckAccount: LuckAccount = new LuckAccount('Nath', 25)
console.log(luckAccount)

luckAccount.getBalance()

luckAccount.deposit(50)

console.log(luckAccount.getName())

luckAccount.setName('Nathália')

console.log(luckAccount.getName())

luckAccount.getBalance()

luckAccount.deposit(1000)

luckAccount.withdraw(500)

luckAccount.getBalance()

luckAccount.withdraw(2000)

luckAccount.getBalance()

// Company
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount)

companyAccount.getBalance()

companyAccount.deposit(50)

console.log(companyAccount.getName())

companyAccount.setName('Nathália')

console.log(companyAccount.getName())

companyAccount.getBalance()

companyAccount.deposit(1000)

companyAccount.withdraw(500)

companyAccount.getBalance()

companyAccount.withdraw(2000)

companyAccount.getBalance()

companyAccount.deposit(10250)

companyAccount.getLoan(5000)

companyAccount.getBalance()
