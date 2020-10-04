module.exports = function toReadable (number) {

  const ones = ['zero', 'one', 'two', 'three', 'four',
                'five', 'six', 'seven', 'eight', 'nine', 'ten',
                'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
                'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const hundred = 'hundred';
  let result;
  num = number.toString();

  if (number >= 100) {
    if (number % 100 < 20 && number % 100 !== 0) {
    result = `${ones[num[0]]} ${hundred} ${ones[num % 100]}`;
    return result;
    } else if (number % 100 >= 20 && (number % 100) % 10 === 0) {
      result = `${ones[num[0]]} ${hundred} ${tens[num[1] - 2]}`;
      return result;
    } else if (number % 100 == 0) {
      result = `${ones[num[0]]} ${hundred}`;
      return result;
    } else {
      result = `${ones[num[0]]} ${hundred} ${tens[num[1] - 2]} ${ones[num[2]]}`;
      return result;
    }
  } else if (number < 100) {
    if (number >= 20) {
      if (number % 10 === 0) {
        result = `${tens[(num / 10) - 2]}`;
        return result;
      } else {
        result = `${tens[num[0] - 2]} ${ones[(num % 10)]}`;
        return result;
      }
    } else {
      result = `${ones[num]}`;
      return result;
    }
  }
}
