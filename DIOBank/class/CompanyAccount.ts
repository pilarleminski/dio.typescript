import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
    
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    getLoan = (loanValue: number): number | undefined => {
        if(this.validateStatus()){
            this.balance = this.balance + loanValue
            console.log('Você pegou um empréstimo de ' + loanValue)
            return loanValue
        }
    }

    deposit = (depositValue: number): number | undefined  => {
        if(this.validateStatus()){
            this.balance = this.balance + depositValue
            console.log('A empresa depositou ' + depositValue )
            return depositValue
        }
    }
}