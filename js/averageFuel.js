const text3 = "Average fuel consumption";
const text4 = "litres ";
const text6 = "per 100km";
function checkForm(el) {
  const fuel = el.allUsedFuel.value;
  const allDistance = el.allDistance.value;
  const averageCons = (gas, distance) => {
    gas = fuel;
    distance = allDistance;
    if (gas <= 0 || distance <= 0) {
      return (document.getElementById("averageFuel").innerHTML =
        "Fuel or Distance can`t be negative");
    }
    const averConFuel = (gas * 100) / distance;
    const resultForm1 = `${text3} ${averConFuel} ${text4} ${text6}`;
    return (document.getElementById("averageFuel").innerHTML = resultForm1);
  };
  averageCons();
  return false;
}
