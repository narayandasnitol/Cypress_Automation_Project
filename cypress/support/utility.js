class Utility {
  constructor() {
    this.login = new Login();
    this.randomUserInformation = new UserRandomInformation();
  }
}
class Login {
  username = "paa.phptravel.user1@yopmail.com";
  password = "Selise@123";
}

class UserRandomInformation {
  firstNameArr = [
    "James",
    "John",
    "Robert",
    "Michael",
    "William",
    "David",
    "Richard",
    "Charles",
    "Joseph",
    "Thomas",
    "Mary",
    "Patricia",
    "Linda",
    "Barbara",
    "Elizabeth",
    "Jennifer",
    "Maria",
    "Susan",
    "Margaret",
    "Dorothy",
  ];

  lastNameArr = [
    "Smith",
    "Johnson",
    "Williams",
    "Jones",
    "Brown",
    "Davis",
    "Miller",
    "Wilson",
    "Moore",
    "Taylor",
    "Anderson",
    "Thomas",
    "Jackson",
    "White",
    "Harris",
  ];
  userAddressesArr = [
    "123 Sheikh Zayed Road, Dubai, UAE",
    "456 Jumeirah Beach Road, Dubai, UAE",
    "789 Al Rigga Street, Dubai, UAE",
    "101 Business Bay, Dubai, UAE",
    "202 Dubai Marina, Dubai, UAE",
    "303 Deira City Centre, Dubai, UAE",
    "404 Al Fahidi Street, Dubai, UAE",
    "505 Al Maktoum Street, Dubai, UAE",
    "606 Burj Khalifa, Dubai, UAE",
    "707 Al Wasl Road, Dubai, UAE",
    "808 Emirates Towers, Dubai, UAE",
    "909 Al Barsha, Dubai, UAE",
    "111 Downtown Dubai, Dubai, UAE",
    "222 Al Karama, Dubai, UAE",
    "333 Al Quoz, Dubai, UAE",
    "444 Dubai Internet City, Dubai, UAE",
    "555 Palm Jumeirah, Dubai, UAE",
    "666 Dubai Media City, Dubai, UAE",
    "777 Al Garhoud, Dubai, UAE",
    "888 Dubai Sports City, Dubai, UAE",
  ];
  userPhoneNumbersArr = [
    "+971501234567",
    "+971502345678",
    "+971503456789",
    "+971504567890",
    "+971505678901",
    "+971506789012",
    "+971507890123",
    "+971508901234",
    "+971509012345",
    "+971551234567",
    "+971552345678",
    "+971553456789",
    "+971554567890",
    "+971555678901",
    "+971556789012",
    "+971557890123",
    "+971558901234",
    "+971559012345",
    "+971561234567",
    "+971562345678",
  ];
}

export default new Utility();
