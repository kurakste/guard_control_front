export default function roleChecker(role) {
  switch (true) {
    case role === 0:
      return 'Администратор';
    case role === 10:
      return 'Оператор';
    case role === 20:
      return 'Пользователь';
    case role === 31:
      return 'Пользователь, кандидат';
    case role === 32:
      return 'Пользователь КП, кандидат';
    case role === 33:
      return 'Пользователь, отклоненный';
    case role === 34:
      return 'Пользователь КП, отклоненный';
    case role === 35:
      return 'Пользователь';
    case role === 36:
      return 'Пользователь КП';
    default:
      throw new Error('Роль не найдена');
  }
}
