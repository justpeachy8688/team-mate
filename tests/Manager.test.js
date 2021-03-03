const { test, expect } = require("@jest/globals");
//Include the Manager.js file
const Manager = require("../lib/Manager");

test('initiate Employee', () => {
    const m = new Manager();
    expect(typeof (m)).toBe("object");
})

test('set name by constructor', () => {
    const name = 'Richard';
    const man = new Manager(name);
    expect(man.name).toBe(name);
});

test('set id by constructor', () => {
    const id = 56;
    const man = new Manager('Richard', id);
    expect(man.id).toBe(id);
});

test('set email by constructor', () => {
    const email = "bossman@piedpiper.com";
    const man = new Manager('Richard', 56, email);
    expect(man.email).toBe(email);
});

test('set role by constructor', () => {
    const role = "Manager";
    const man = new Manager('Richard', 56, "bossman@piedpiper.com", role);
    expect(man.role).toBe(role);
});

test('set office number by constructor', () => {
    const office = 250;
    const man = new Manager('Richard', 56, "bossman@piedpiper.com", "Manager", office);
    expect(man.office).toBe(office);
});

test('test manager methods', () => {
    const man = new Manager('Richard', 56, "bossman@piedpiper.com", "Manager", "Manager's Office");
    expect(man.getName()).toBe("Richard");
    //Do for each method
    expect(man.getId()).toBe(56);
    expect(man.getEmail()).toBe("bossman@piedpiper.com");
    expect(man.getRole()).toBe("Manager");
    expect(man.getOffice()).toBe("Manager's Office")
});
