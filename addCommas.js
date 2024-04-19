/**
 * This function takes a number as an argument.
 * Converts the given number into a string formatted with commas
 *
 * @param {number} num
 * @returns {string} The number, formatted with commas
 */

function addCommas(num) {
  try {
    if (typeof num !== "number") {
      throw new Error("Argument must be a number");
    }

    let string = num.toString().split(".");

    let digitPlace = 0;

    let converted = "";

    for (let i = string[0].length - 1; i >= 0; i--) {
      digitPlace += 1;

      if (string[0][i] === "-") {
        converted = string[0][i] + converted;
      } else if (
        (digitPlace % 3 === 0 && i === 0) ||
        (string[0][0] === "-" && string[0].length === 4)
      ) {
        converted = string[0][i] + converted;
      } else if (digitPlace % 3 === 0) {
        let commaPlusDigit = "," + string[0][i];
        converted = commaPlusDigit + converted;
      } else {
        converted = string[0][i] + converted;
      }
    }

    if (string.length === 2) {
      console.log(converted + string[1]);
      return converted + "." + string[1];
    }
    console.log(converted);
    return converted;
  } catch (err) {
    console.error(err);
  }
}

export default addCommas;
