const args = process.argv.slice(2);

// when givena date of format YYYY/MM/DD will return mmmm dd, yyyy
// "2017/12/02" = December 2nd, 2017

const dateParser = date => {
  const dateArray = date.split("/");
  let parsedDate = "";

  switch (dateArray[1]) {
    case "01":
      parsedDate += "January ";
      break;
    case "02":
      parsedDate += "Febuary ";
      break;
    case "03":
      parsedDate += "March ";
      break;
    case "04":
      parsedDate += "April ";
      break;
    case "05":
      parsedDate += "May ";
      break;
    case "06":
      parsedDate += "June ";
      break;
    case "07":
      parsedDate += "July ";
      break;
    case "08":
      parsedDate += "August ";
      break;
    case "09":
      parsedDate += "September ";
      break;
    case "10":
      parsedDate += "October ";
      break;
    case "11":
      parsedDate += "November ";
      break;
    case "12":
      parsedDate += "December ";
      break;
    default:
      parsedDate += "Invalid Month ";
  }

  switch (dateArray[2]) {
    case "01":
      parsedDate += "1st, ";
      break;
    case "02":
      parsedDate += "2nd, ";
      break;
    case "03":
      parsedDate += "3rd, ";
      break;
    case "21":
      parsedDate += "21st, ";
      break;
    case "22":
      parsedDate += "22nd, ";
      break;
    case "23":
      parsedDate += "23rd, ";
      break;
    case "31":
      parsedDate += "31st, ";
      break;
    default:
      if (dateArray[2][0] === "0") {
        parsedDate += dateArray[2].slice(1) + "th, ";
      } else {
        parsedDate += dateArray[2] + "th, ";
      }
  }
  parsedDate += dateArray[0];

  return parsedDate;
};

console.log(dateParser("2017/12/02"));
console.log(dateParser("2007/11/11"));
console.log(dateParser("1987/08/24"));

// might be a better way to verify validity of input args
if (args.length > 5) {
  console.log(dateParser(args))
}