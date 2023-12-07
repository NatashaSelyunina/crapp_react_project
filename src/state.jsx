const user = {
  name: "Иван",
  lastname: "Иванов",
  email: "ivanov@mail.io",
  id: "1",
  about: "Рассказ о себе длинный и важный",
  avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=300&q=70",
};

const users = {
  0: {name: "Марина", lastname: "Яблочкова"},
  1: {name: "Екатерина", lastname: "Надеждина"},
  2: {name: "Николай", lastname: "Петров"},
  3: {name: "Константин", lastname: "Тетерин"},
}

export function getUser() {
  return user;
}

export function getUsers() {
  return users;
}