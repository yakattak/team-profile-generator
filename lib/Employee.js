
//create class employee with attributes name, id, email, role
class Employee {
    constructor (name, id, email, role) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.role = role;
    }

    getName() {
        return this.name;
    };

    getId() {
        return this.id
    }

    getEmail() {
        return this.email;
    }

    getRole () {
        return 'Employee';
    }
}

module.exports = Employee;