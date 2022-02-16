const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(info) {
        super(info)

        this.github = info.github
    }

    getGitHub() {
        return this.github
    }

    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer