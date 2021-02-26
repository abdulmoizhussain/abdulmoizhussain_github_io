
export function rgbToHex() {
  let rgb = "";
  rgb = (document.getElementById("rgb") as HTMLInputElement).value.trim();
  rgb = rgb.replace(/\s+/g, " ");
  let hexValue = 'invalid RGB value: ' + rgb;
  // if (!rgb.length || rgb.length < 5 || (rgb.match(/ /g) || []).length !== 2) {
  if (!rgb.length || rgb.length < 5) {
    return setHexa(hexValue);
  }
  const rgbaSplit = rgb.split(rgb.indexOf(',') > -1 ? "," : " ");
  
  const r = rgbaSplit[0];
  const g = rgbaSplit[1];
  const b = rgbaSplit[2];
  const a = rgbaSplit.length > 3 ? rgbaSplit[3] : "1";
  
  hexValue = "#";
  hexValue += toHexa(r);
  hexValue += toHexa(g);
  hexValue += toHexa(b);
  hexValue += toAlpha(a);
  setHexa(hexValue);
}

export function toHexa(deciVal = "") {
  const deciInINT = parseInt(deciVal, 10);
  if (isNaN(deciInINT)) return "00";
  return convertToHex(deciInINT);
}

export function toAlpha(alphaValue: string) {
  // let alphaInFloat = parseFloat(alphaValue, 10);
  let alphaInFloat = parseFloat(alphaValue);
  if (alphaInFloat === undefined || alphaInFloat === null || isNaN(alphaInFloat) || alphaInFloat > 1 || alphaInFloat < 0) return "ff";
  alphaInFloat = Math.round(alphaInFloat * 100) / 100; // for 0.95, two decimal places
  alphaInFloat = Math.round(alphaInFloat * 255);
  return convertToHex(alphaInFloat);
}

export function convertToHex(deci: Number) {
  const inHex = deci.toString(16).toUpperCase();
  if (inHex.length === 1) return "0" + inHex;
  return inHex;
}

export function setHexa(hexStr = "") {
  (document.getElementById("hexSTR") as HTMLInputElement).innerHTML = hexStr;
  (document.getElementById("rgbBox") as HTMLInputElement).setAttribute("style", "background-color: " + hexStr);
}

export function hexToRGB() {
  let hexa = "";
  hexa = (document.getElementById("hex") as HTMLInputElement).value.trim();
  hexa = hexa.replace(/ /g, "");
  let rgbValue = "Invalid Hex Value: " + hexa;
  if (!hexa.length || hexa.length < 6) {
    return setRGB(rgbValue);
  }
  if (hexa.indexOf("#") > -1) {
    hexa = hexa.substr(1);
  }
  hexa = hexa.substr(0, 6);
  const r = hexa.substr(0, 2);
  const g = hexa.substr(2, 2);
  const b = hexa.substr(4, 2);
  hexa = "rgb(";
  hexa += toDeci(r) + ", ";
  hexa += toDeci(g) + ", ";
  hexa += toDeci(b) + ")";
  setRGB(hexa);
}

export function toDeci(hexVal = "0") {
  return parseInt(hexVal, 16);
}

export function setRGB(rgbStr: string) {
  (document.getElementById("rgbSTR") as HTMLInputElement).innerHTML = rgbStr;
  (document.getElementById("hexBox") as HTMLInputElement).setAttribute("style", "background-color: " + rgbStr);
}

// export function parseInteger(integer) {
//   let parsed = parseInt(integer);
//   return parsed || parsed === 0 ? parsed : 0;
// }
// export function dividedBy(x, y) {
//   let z = x / y;
//   return isNaN(z) ? 0 : z;
// }
