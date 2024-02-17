import { DioAccount } from "./DioAccount";

export class BonusAccount extends DioAccount{
    private bonusDeposit: number = 0
    private bonusBalance: number = 0
    

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }



    deposit = (depositValue: number): number | undefined  => {
        if(this.validateStatus()){
            this.bonusDeposit = depositValue + 10
            this.balance = this.balance + this.bonusDeposit
            console.log('Voce depositou ' + this.bonusDeposit )
            return this.bonusDeposit
        }
    }
}