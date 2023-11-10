const inputEl = document.querySelector("#input-el")
const btnEl = document.querySelector("#btn-el")
const lengthEl = document.querySelector("#length-el")
const volumeEl = document.querySelector("#volume-el")
const massEl = document.querySelector("#mass-el")

const meterToFeet = 3.2808
const literToGallon = .264172
const kiloToPounds = 2.20462


btnEl.addEventListener("click", function() {
    if(inputEl.value === "") {
        renderResult(0)
    }
    else {
        renderResult(inputEl.value)
    }
})

inputEl.addEventListener("keypress", function(e) {
    if(e.which === 13 && inputEl.value === "") {
        renderResult(0)
    }
    else if(e.which === 13) {
        renderResult(inputEl.value)
    }
})

function convertToImperial(input, rate) {
    const result = input * rate
    return result.toFixed(3);
}

function convertToMetric(input, rate) {
    const result = input / rate
    return result.toFixed(3)
}

function renderResult(input) {
    const feet = convertToImperial(input, meterToFeet)
    const gallon = convertToImperial(input, literToGallon)
    const pound = convertToImperial(input, kiloToPounds)
    const meter = convertToMetric(input, meterToFeet)
    const liter = convertToMetric(input, literToGallon)
    const kilo = convertToMetric(input, kiloToPounds)
    
    lengthEl.textContent = `${input} meters = ${feet} feet | ${input} feet = ${meter} meters`
    volumeEl.textContent = `${input} liters = ${gallon} gallons | ${input} gallons = ${liter} liters`
    massEl.textContent = `${input} kilos = ${pound} pounds | ${input} pounds = ${kilo} kilos`
}