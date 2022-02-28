//extend employee

//github username

//getGithub

//getRole (override to return ENG)


const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name, id, email, role, github) {
        super(name, id, email, role);

        this.github = github;
    }

    getRole() {
        return 'Engineer';
    }

    getGithub() {
        return this.github;
    }
};

module.exports = Engineer;