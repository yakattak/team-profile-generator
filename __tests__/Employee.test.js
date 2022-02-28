const Employee = require('../lib/Employee.js')

test('creates employee object', () => {
    const employee = new Employee('dave');
    expect(employee.name).toBe('dave');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

});