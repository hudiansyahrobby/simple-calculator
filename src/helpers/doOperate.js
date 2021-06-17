export const doOperate = (total, currentValue, operation) => {
  switch (operation) {
    case '+':
      return total + currentValue;
    case '-':
      return total - currentValue;
    case 'x':
      return total * currentValue;
    case '/':
      return total / currentValue;
    default:
      return;
  }
};
