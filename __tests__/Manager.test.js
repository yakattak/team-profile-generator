const Manager = require('../lib/Manager');

test ('sets manager office number', () => {

    const manager = new Manager ('dave', '444', 'hey@gmail.com', '72');
    expect (manager.officeNumber).toBe('72');

})

test('get manager role', () => {
    const manager = new Manager ('dave', '444', 'hey@gmail.com', '72');
    expect(manager.getRole()).toBe('Manager');
});



test('get office number', () => {
    const manager = new Manager ('dave', '444', 'hey@gmail.com', '72');
    expect(manager.getOfficeNumber()).toBe('72');
});
