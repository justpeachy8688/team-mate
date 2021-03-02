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

test('set email by constructor', () => {
    const email = "devilish@piedpiper.com";
    const emp = new Engineer('Gilfoyle', 34, email);
})

test('set github username by constructor', () => {
    const github = "bertram-gilfoyle";
    const emp = new Engineer('Gilfoyle', 34, "devilish@piedpiper.com", github);
})