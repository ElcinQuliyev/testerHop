const cars = [
  {
    value: "audi",
    text: "Audi",
  },
  {
    value: "mercedes",
    text: "Mercedes",
  },
  {
    value: "opel",
    text: "Opel",
  },
];

const root = document.getElementById("root");

const h1 = document.createElement("h1");
h1.className = "heading";
h1.textContent = "Dynamic select box";

const form = document.createElement("form");

const label = document.createElement("label");
label.setAttribute("for", "cars");
label.textContent = "Choose a car: ";
const select = document.createElement("select");
select.setAttribute("name", "cars");
select.id = "cars";
cars.forEach((car) => {
  const option = document.createElement("option");
  option.value = car.value;
  option.textContent = car.text;
  select.append(option);
});
let result = document.createElement("h3");
result.textContent = `Selected car: `;

root.append(h1, form, result);

const submitBtn = document.createElement("input");
submitBtn.type = "submit";
submitBtn.value = "Submit";
submitBtn.onclick = (event) => {
  event.preventDefault();
  result.textContent = `Selected car: ${select.value}`;
};
form.append(label, select, submitBtn);
