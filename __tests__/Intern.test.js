const Intern = require('../lib/Intern.js');

test ('set github username', () => {
    const intern = new Intern('steve', '1', 'steve@steve.steve', "Intern", "RPI");
    expect(intern.school).toBe("RPI");

});


test ('get school', () => {
    const intern = new Intern('steve', '1', 'steve@steve.steve',"Intern", "RPI");
    expect (intern.getSchool()).toBe("RPI");
})


test ('get role', () => {
    const intern = new Intern('steve', '1', 'steve@steve.steve',"Intern", "RPI");
    expect (intern.getRole()).toBe('Intern');
})