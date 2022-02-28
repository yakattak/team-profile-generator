const Employee = require('../lib/Employee.js')

test('creates employee object', () => {
    const employee = new Employee('dave', '444', 'hey@gmail.com', 'engineer');
    expect(employee.name).toBe('dave');
    expect(employee.id).toBe('444');
    expect(employee.email).toBe('hey@gmail.com');

});

test('gets employees name, id, email, role', () => {
    const employee = new Employee('dave', '444', 'hey@gmail.com', 'engineer');

    expect(employee.getName()).toBe('dave');
    expect(employee.getId()).toBe('444');
    expect(employee.getEmail()).toBe('hey@gmail.com');
    expect(employee.getRole()).toBe('Employee');

});