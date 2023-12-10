const inch = 1;
const cm = 2.54;

document.getElementById('goBtn').addEventListener('click', function() {
  let inputValue = document.getElementById('inBox').value;
  let inputUnit = document.getElementById('inSelect').value;
  let outputUnit = document.getElementById('outSelect').value;

  let result = convert(inputValue, inputUnit, outputUnit);
  document.getElementById('outBox').value = result;
});

function convert(inputValue, inputUnit, outputUnit) {

  if (inputUnit == outputUnit) {
    return inputValue;
  } else {
    // m, cm, mm, inch, mlie
    if (inputUnit == "m") {
      if (outputUnit == "cm") {
        return inputValue * 100;
      }
      else if (outputUnit == "mm") {
        return inputValue * 1000;
      }
      else if (outputUnit == "inch") {
        return inputValue * 39.3701;
      }
      else if (outputUnit == "mile") {
        return inputValue * 1609.34;
      }
    }
    else if (inputUnit == "cm") {
      if (outputUnit == "m") {
        return inputValue / 100;
      }
      else if (outputUnit == "mm") {
        return inputValue * 10;
      }
      else if (outputUnit == "inch") {
        return inputValue / 2.54;
      }
      else if (outputUnit == "mile") {
        return inputValue / 160934;
      }
    }
    else if (inputUnit == "mm") {
      if (outputUnit == "m") {
        return inputValue / 1000;
      }
      else if (outputUnit == "cm") {
        return inputValue / 10;
      }
      else if (outputUnit == "inch") {
        return inputValue / 25.4;
      }
      else if (outputUnit == "mile") {
        return inputValue / 160934000;
      }
    }
    else if (inputUnit == "inch") {
      if (outputUnit == "m") {
        return inputValue / 39.3701;
      }
      else if (outputUnit == "cm") {
        return inputValue * 2.54;
      }
      else if (outputUnit == "mm") {
        return inputValue * 25.4;
      }
      else if (outputUnit == "mile") {
        return inputValue / 5280;
      }
    }
    else if (inputUnit == "mile") {
      if (outputUnit == "m") {
        return inputValue * 1609.34;
      }
      else if (outputUnit == "cm") {
        return inputValue * 160934;
      }
      else if (outputUnit == "mm") {
        return inputValue * 160934000;
      }
      else if (outputUnit == "inch") {
        return inputValue * 5280;
      }
    }
  }
}