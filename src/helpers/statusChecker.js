export default function statusChecker(role) {
  switch (true) {
    case role === 0:
      return 'Новая';
    case role === 10:
      return 'Принята в обработку';
    case role === 20:
      return 'Отправлена группа';
    default:
      return 'Новая';
  }
}
