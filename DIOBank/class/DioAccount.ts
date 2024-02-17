export abstract class DioAccount {
    private readonly name: string
    private readonly accountNumber: number
    balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
        this.balance = 0
    }

    getName = (): string => {
        return this.name
    }

    getBalance = (): void => {
        console.log(this.balance)
    }

    deposit = (depositValue: number): number | undefined  => {
        if(this.validateStatus()){
            this.balance = this.balance + depositValue
            console.log('Você depositou ' + depositValue )
            return depositValue
        }
    }
    
    withdraw = (withdrawValue: number): number | undefined => {
        if(this.validateStatus() && withdrawValue < this.balance){
            this.balance = this.balance - withdrawValue
            console.log('Você sacou ' + withdrawValue)
            return withdrawValue
        } else {
            console.log('Saldo insuficiente')
        }

        
    }

    validateStatus = ():boolean => {
        if(this.status){
            return this.status
        }

        throw new Error('Conta inativa')
    }
}