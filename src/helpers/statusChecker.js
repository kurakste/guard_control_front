export default function statusChecker(role) {
  switch (true) {
    case role === 0:
      return 'Новая';
    case role === 1:
      return 'Принята в обработку';
    default:
      return 'Направленна группа';
  }
}
