const textOne = "Costs of total consumed fuel";
const textTwo = "grn on";
const text5 = "km of road";
function checkForm2(el) {
  const averFuel = el.avrageCons.value;
  const planDistance = el.planDist.value;
  const typeFuel = el.fuelType.value;
  let fuelTypeCosts;
  const typeOfFuel = (fuelType) => {
    fuelType = typeFuel;
    if (typeof fuelType !== "string") {
      return console.log("Please choose fuel type");
    }
    if (fuelType === "Gas 95") {
      fuelTypeCosts = 45;
      return fuelTypeCosts;
    }
    if (fuelType === "Gas 92") {
      fuelTypeCosts = 42;
      return fuelTypeCosts;
    }
    if (fuelType === "Diesel") {
      fuelTypeCosts = 50;
      return fuelTypeCosts;
    }
    if (fuelType === "LPG") {
      fuelTypeCosts = 38;
      return fuelTypeCosts;
    }
  };
  typeOfFuel();
  const planMoney = (averGas, gasCosts, allDist) => {
    averGas = averFuel;
    allDist = planDistance;
    gasCosts = fuelTypeCosts;
    if (averGas <= 0 || allDist <= 0) {
      return (document.getElementById("needMoney").innerHTML =
        "Distance or average fuel consumption can`t be negative");
    }
    const allGasCosts = (allDist / 100) * averGas * gasCosts;
    const resultForm2 = `${textOne} ${allGasCosts} ${textTwo} ${planDistance} ${text5}`;
    return (document.getElementById("needMoney").innerHTML = resultForm2);
  };
  planMoney();
  return false;
}
