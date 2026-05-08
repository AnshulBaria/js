const form = document.querySelector("form")
const results = document.querySelector('#results')

form.addEventListener("submit", function(e) {
    e.preventDefault()

    const height = parseFloat(document.querySelector('#height').value)
    const weight = parseFloat(document.querySelector('#weight').value)

    if (!height || !weight) {
        results.innerHTML = '<span>Please enter both height and weight.</span>'
        return
    }

    const bmi = weight / ((height / 100) ** 2)
    results.innerHTML = `<span>Your BMI is ${bmi.toFixed(1)}</span>`}
) 