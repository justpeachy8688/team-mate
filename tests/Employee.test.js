//input and output?
//set and get name, id, email, 

const Employee = require("../lib/Employee");

test('initiate Employee', () => {
    const e = new Employee();
    expect(typeof (e)).toBe("object");
})

test('set name by constructor', () => {
    const name = 'Dinesh';
    const emp = new Employee(name);
    expect(emp.name).toBe(name);
});

test('set id by constructor', () => {
    const id = 12;
    const emp = new Employee('Dinesh', id);
    expect(emp.id).toBe(id);
});
