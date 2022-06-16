let commandHeader = document.getElementById("editableHeader")

function isInt() {
  let textFieldValue = document.getElementById("textboxInput").value;
  if(isNaN(textFieldValue)) {
    commandHeader.textContent=`Provided input is not a number: ${textFieldValue}`;
  } else if(textFieldValue.length <= 0) {
    commandHeader.textContent="Input not provided"
  } else {
    commandHeader.textContent=`Provided input is a number: ${textFieldValue}`;
  }
}