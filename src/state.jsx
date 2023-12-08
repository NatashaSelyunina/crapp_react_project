const user = {
  name: "Иван",
  lastname: "Иванов",
  email: "ivanov@mail.io",
  id: "1",
  about: "Рассказ о себе длинный и важный",
  avatar:
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=300&q=70",
};

const users = {
  0: {
    name: "Марина",
    lastname: "Яблочкова",
    id: 24,
    email: "marina@marina.ru",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=300&q=80",
    about: "Рассказ о себе длинный и важный",
  },
  1: {
    name: "Катерина",
    lastname: "Надеждина",
    id: 4,
    email: "kate@open.ru",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D&w=300&q=80",
    about: "Рассказ о себе длинный и важный",
  },
  2: {
    name: "Николай",
    lastname: "Петров",
    id: 12,
    email: "nik@mail.ru",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=300&q=80",
    about: "Рассказ о себе длинный и важный",
  },
  3: {
    name: "Константин",
    lastname: "Тетерин",
    id: 8,
    email: "konstantinos@ya.ru",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHBlcnNvbmF8ZW58MHx8MHx8fDA%3D&w=300&q=80",
    about: "Рассказ о себе длинный и важный",
  },
  4: {
    name: "Евгения",
    lastname: "Николаева",
    id: 2,
    email: "nikolaevа65@yandex.ru",
    avatar:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHBlcnNvbmF8ZW58MHx8MHx8fDA%3D&w=300&q=80",
    about: "Рассказ о себе длинный и важный",
  },
};

export function getUser(userId) {
  for (let i = 0; i < Object.keys(users).length; i++) {
    if (users[i].id == userId) return users[i];
  }
  return user;
}
export function getUsers() {
  return users;
}