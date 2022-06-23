abstract class Person {
    firstName: string;
    lastName: string;

    protected constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello(): void {
        console.log(`Hi, my name is ${this.firstName} ${this.lastName}`)
    }
}

class Guest extends Person {
    constructor(firstName: string, lastName: string) {
        super(firstName, lastName);
    }
}

abstract class Employee extends Person {
    permissionLevel: string;

    protected constructor(firstName: string, lastName: string) {
        super(firstName, lastName);
        this.permissionLevel = 'Standard permission';
    }

    welcomeGuest(guest: Guest): void {
        console.log(`Welcome, ${guest.firstName} ${guest.lastName}.`);
    }
}

class Clerk extends Employee {
    constructor(firstName: string, lastName: string) {
        super(firstName, lastName);
    }
}

abstract class EmployeeWithExtraPermission extends Employee {
    permissionLevel: string;

    protected constructor(firstName: string, lastName: string) {
        super(firstName, lastName);
        this.permissionLevel = 'Extra permission';
    }

    welcomeGuest(guest: Person): void {
        console.log(`Welcome, ${guest.firstName} ${guest.lastName}. How can I help you?`);
    }
}

class Director extends EmployeeWithExtraPermission {
    constructor(firstName: string, lastName: string) {
        super(firstName, lastName);
    }
}

const clerk = new Clerk('Jakub', 'Nowak');
const director = new Director('Jan', 'Kowalski');
const guest= new Guest('Adam', 'Jasiński');

guest.sayHello()
director.sayHello();
clerk.welcomeGuest(guest);
director.welcomeGuest(guest);
