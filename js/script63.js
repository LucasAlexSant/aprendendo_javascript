console.log("Celsius  |  Fahrenheit")
console.log("------------------------")

let celsius = 10
while (celsius <= 100) {
  let fahrenheit = (celsius * 9 / 5) + 32
  console.log(celsius + "       |     " + fahrenheit.toFixed(2))
  celsius += 10
}