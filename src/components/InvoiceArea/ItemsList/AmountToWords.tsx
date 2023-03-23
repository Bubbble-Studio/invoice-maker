function convertNumberToWords(amount: number): string {
  const units = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  const tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  const scales = ["", "thousand", "lakh", "crore", "arab", "kharab"];
  let numberInWords: string = "";
  const isNegative = amount < 0;
  amount = Math.abs(amount);
  const decimalPart = Math.round((amount % 1) * 100);
  amount = Math.floor(amount);
  if (amount === 0) {
    numberInWords = "zero";
  }
  let scaleCount = 0;
  while (amount > 0) {
    const num = amount % 1000;
    if (num > 0) {
      let words = "";
      if (num > 99) {
        words += units[Math.floor(num / 100)] + " hundred ";
        num % 100 === 0 ? (words = words.trim()) : (words += " ");
      }
      if (num % 100 < 20) {
        words += units[num % 100];
      } else {
        words += tens[Math.floor((num % 100) / 10)];
        if (num % 10 > 0) {
          words += " " + units[num % 10];
        }
      }
      numberInWords =
        words.trim() + " " + scales[scaleCount] + " " + numberInWords;
    }
    amount = Math.floor(amount / 1000);
    scaleCount++;
  }
  if (isNegative) {
    numberInWords = "minus " + numberInWords;
  }
  if (decimalPart > 0) {
    numberInWords += " and ";
    if (decimalPart < 20) {
      numberInWords += units[decimalPart];
    } else {
      numberInWords += tens[Math.floor(decimalPart / 10)];
      if (decimalPart % 10 > 0) {
        numberInWords += " " + units[decimalPart % 10];
      }
    }
    numberInWords += " paise";
  }
  return numberInWords.trim() + " only";
}

export default convertNumberToWords;
