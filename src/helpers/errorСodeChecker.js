export default function codeChecker(code) {
  switch (true) {
    case code === 7:
      return 'Пользователь с таким email существует';
    case code === 8:
      return 'Пользователь не подтвержден администратором системы';
    case code === 500:
      return 'Данный пользователь уже покдлючен к системе';
    case code >= 6 && code <= 10:
      return 'Неверное имя пользователя или пароль';
    default:
      return 'Неверное имя пользователя или пароль';
  }
}
