class User {
    name
    age

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }

    showName = () => {
        console.log(this.name)
    }
}

const user: User = new User('Cristina', 60)
user.showName()

const otherUser: User = new User('Ana', 36)
otherUser.showName()