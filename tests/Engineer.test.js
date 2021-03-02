const { test, expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test('initiate Engineer', () => {
    const e = new Engineer();
    expect(typeof (e)).toBe("object");
})

test('set name by constructor', () => {
    const name = 'Gilfoyle';
    const emp = new Engineer(name);
    expect(emp.name).toBe(name);
})

test('set id by constructor', () => {
    const id = 34;
    const emp = new Engineer('Gilfoyle', id);
    expect(emp.id).toBe(id);
})