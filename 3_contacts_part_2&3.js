var contacts = ["Matt Smith", "Sam Davis", "Ashley Jones"];

var findContact = function () {console.log(contacts[2]);
};
findContact();

var updateLastContact = function () {contacts[contacts.length -1] = "Patty Davis";
};
updateLastContact();

var addContact = function () {contacts.push("Bill Jones");
};
addContact();

console.log(contacts);



//Part 3

var contacts = ["Matt Smith", "Sam Davis", "Ashley Jones"];

var findContact = function(index) {
    return contacts[index];
};

var updateLastContact = function(newName) {
    return contacts[contacts.length - 1] = newName;
};

var addContact = function(name) {
    contacts.push(name);
};

console.log(findContact(2));
updateLastContact("Patty Davis");
addContact("Mark Jones");
console.log(contacts);
