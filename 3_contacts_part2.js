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
