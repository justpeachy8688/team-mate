const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, role, office) {
        super(name, id, email, role)
        this.office = office;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getOffice() {
        return this.office;
    }

    getRole() {
        return 'Manager'
    }
};

module.exports = Manager;
