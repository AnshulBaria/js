const form = document.querySelector("form")
const results = document.querySelector('#results')

form.addEventListener("submit", function(e) {
    e.preventDefault()

    const height = parseFloat(document.querySelector('#height').value)
    const weight = parseFloat(document.querySelector('#weight').value)

    if (!height || !weight) {
        results.textContent = 'Please enter both height and weight.'
        return
    }

    const bmi = weight / ((height / 100) ** 2)
    results.textContent = `Your BMI is ${bmi.toFixed(1)}`
})