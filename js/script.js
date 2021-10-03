const form = document.forms[0]
const inputs = form.elements

for (const input of inputs) {
	if (input.checked) input.parentElement.classList.add('active')
}

form.addEventListener('click', event => {
	const inputBox = event.target.closest('.checkbox') || event.target.closest('.radiobuttons__item')
	if (!inputBox) return

	if (inputBox.classList.contains('checkbox')) toggleInputBox(inputBox)

	if (inputBox.classList.contains('radiobuttons__item')) {
		clearActiveClasses(inputBox.parentElement)
		clearCheckedItems(inputBox.parentElement)
		toggleInputBox(inputBox)
	}
})

function toggleInputBox(box) {
	const innerInput = box.querySelector('input')
	innerInput.checked ? innerInput.checked = false : innerInput.checked = true
	box.classList.toggle('active')
}

function clearActiveClasses(box) {
	for (const item of box.children) item.classList.remove('active')
}

function clearCheckedItems(box) {
	const inputs = box.querySelectorAll('input')
	for (const input of inputs) input.checked = false
}