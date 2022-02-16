const Employee = require('./Employee');

class Manager extends Employee {
    constructor(info) {
        super(info)

        this.officeNumber = info.officeNumber
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager