class Employee {
    constructor(info) {
        this.name = info.name,
        this.id = info.id,
        this.email = info.email
    }

    getName() {
        return this.name
    }

    getId () {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return 'Employee'
    }
}

module.exports = Employee