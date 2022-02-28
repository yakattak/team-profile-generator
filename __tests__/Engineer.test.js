const Engineer = require('../lib/Engineer.js');

test ('set github username', () => {
    const engineer = new Engineer('steve', '1', 'steve@steve.steve', "Engineer", "yakattak");
    expect(engineer.github).toBe("yakattak");

});


test ('get github username', () => {
    const engineer = new Engineer('steve', '1', 'steve@steve.steve',"Engineer", "yakattak");
    expect (engineer.getGithub()).toBe("yakattak");
})


test ('get role', () => {
    const engineer = new Engineer('steve', '1', 'steve@steve.steve',"Engineer", "yakattak");
    expect (engineer.getRole()).toBe('Engineer');
})