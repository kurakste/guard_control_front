export default function roleChecker(role) {
  switch (true) {
    case role === 0: 
      return 'Администратор'
    case role <= 19 && role > 0:
      return 'Оператор'
    case role > 19 && role <= 29:
      return 'Пользователь'
    case role >= 30: 
      return 'Кандидат' 
    default:
      return 'Кандидат'
  }
}