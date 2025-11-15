const temp = 15;        // static number
const wind = 10;        // static number

// CALCULATE WINDCHILL (metric version)
function calculateWindChill(t, s) {
  return 13.12 + 0.6215*t - 11.37*Math.pow(s, 0.16) + 0.3965*t*Math.pow(s, 0.16);
}

let windChill;

if (temp <= 10 && wind > 4.8) {
  windChill = calculateWindChill(temp, wind).toFixed(1);
} else {
  windChill = "N/A";
}

document.querySelector("#windChillValue").textContent = windChill;