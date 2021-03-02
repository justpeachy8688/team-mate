const { test } = require("@jest/globals");
const Intern = require("../lib/Intern");

test('initiate Intern', () => {
    const i = new Intern();
    expect(typeof (i)).toBe("object");
})

test('set name by constructor', () => {
    const name = 'Dinesh';
    const emp = new Intern(name);
    expect(emp.name).toBe(name);
})

test('set id by constructor', () => {
    const id = 34;
    const emp = new Intern('Dinesh', id);
    expect(emp.id).toBe(id);
})

test('set email by constructor', () => {
    const email = "dman@piedpiper.com";
    const emp = new Intern('Dinesh', 34, email);
})

test('set school by constructor', () => {
    const school = "Stanford University";
    const emp = new Intern('Dinesh', 34, "dman@piedpiper.com", school);
})