const elipse = document.querySelectorAll('.elipse')
const checked = document.querySelectorAll('.checkbox')
elipse.forEach(el => {
	el.addEventListener('click', () => {
		el.classList.toggle('hide')
	})
})
checked.forEach(el => {
	el.addEventListener('click', () => {
		el.classList.toggle('click')
	})
})
