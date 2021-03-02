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

test('set office number by constructor', () => {
    const office = 250;
    const man = new Manager('Richard', 56, "bossman@piedpiper.com", office);
    expect(man.office).toBe(office);
});
