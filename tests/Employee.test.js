const { test } = require("@jest/globals");
//input and output?
//set and get name, id, email, 

const Employee = require("../lib/Employee");

test('initiate Employee', () => {
    const e = new Employee();
    expect(typeof (e)).toBe("object");
})

test('set name by constructor', () => {
    const name = 'Jian-Yang';
    const emp = new Employee(name);
    expect(emp.name).toBe(name); ``
});

test('set id by constructor', () => {
    const id = 12;
    const emp = new Employee('Jian-Yang', id);
    expect(emp.id).toBe(id);
});


test('set email by constructor', () => {
    const email = "asian.persuasion@piedpiper.com";
    const emp = new Employee('Jian-Yang', 12, email);
})