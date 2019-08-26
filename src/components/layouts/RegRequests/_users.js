
const newPerson = (id) => {
  return {
    "id": id,
    "firstName": "Boby!)",
    "lastName": "Dylan",
    "email": "bob@gmail.com",
    "tel": "+70172345678",
    "active": true,
    "role": Math.floor(Math.random() * 32) + 1,
    "img": "uid.jpg",
    "pasImg1": "uid_pas1.jpg",
    "pasImg2": "uid_pas2.jpg",
    "password": null,
    "notes": "Anithing you want writ here",
    "createdAt": "2019-08-25T20:01:41.296Z",
    "updatedAt": "2019-08-26T06:04:27.526Z"
  };
};

const generateUsers = (length) => {
  const users = []
  for (let i = 1; i < length; i ++) {
    users.push(
      newPerson(i)
    )
  }
  return users
}

export default generateUsers