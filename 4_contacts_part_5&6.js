//Part 5
var contacts = [
{ 
  firstName: "John",
  lastName: "Doe",
  phone: "(512) 555-0453",
  email: "johndoe@email.com"
},

{
  firstName: "Jane",
  lastName: "Doe",
  phone: "(312) 555-2203",
  email: "janedoe@email.com"
},
  
{ 
  firstName: "Suzie",
  lastName: "Smith",
  phone: "(415) 555-4219",
  email: "suziesmith@email.com"
},
  ];

function listContacts() {
  for (var i = 0; i < contacts.length; i++) {
    console.log(contacts[i].firstName + " " + contacts[i].lastName);
  }
}
listContacts();


//Part 6
var Contact = function (firstName, lastName, phone, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phone = phone;
  this.email = email;
  this.displayContact = function () {
    console.log(this.firstName + ' ' + this.lastName);
  };
};

var johnDoe = new Contact("John", "Doe", "(512) 555-0453", "johndoe@email.com");
var janeDoe = new Contact("Jane", "Doe", "(312) 555-2203", "janedoe@email.com");
var suzieSmith = new Contact("Suzie", "Smith", "(415) 555-4219", "suziesmith@email.com");
var mattKlaus = new Contact("Matt", "Klaus", "(875) 555-0453", "mattklaus@email.com");

var contacts = [johnDoe, janeDoe, suzieSmith];
var listContacts = function() {
  for (var i = 0; i < contacts.length; i++) {
    contacts[i].displayContact();
  }
};
var addContact = function(newContact) {
  contacts.push(newContact);
};
addContact(mattKlaus);
listContacts();
