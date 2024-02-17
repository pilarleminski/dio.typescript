// Dio Banking

import { PeopleAccount } from './class/PeopleAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { BonusAccount } from './class/BonusAccount'



const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Pilar', 1)
//peopleAccount.deposit()
//peopleAccount.setName('Pilar Leminski Veiga')
//console.log(peopleAccount)
//console.log(peopleAccount.getName())
peopleAccount.deposit(200)
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 2)
companyAccount.deposit(1000)
console.log(companyAccount)

peopleAccount.withdraw(250)
console.log(peopleAccount)
companyAccount.withdraw(250)
console.log(companyAccount)

companyAccount.getLoan(1000)
console.log(companyAccount)

const bonusAccount: BonusAccount = new BonusAccount('José Rico', 3)
bonusAccount.deposit(100)
