const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    const isActive = panel.classList.contains('active')

    removeActiveClasses()

    if (!isActive) {
      panel.classList.add('active')
    }
  })
})

function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
}
const buttons = document.querySelectorAll('.panel-button')

buttons.forEach(button => {
  button.addEventListener('click', event => {
    event.stopPropagation()

    const panel = button.closest('.panel')
    const title = panel.querySelector('h3').textContent

    alert(`Вы выбрали направление: ${title}`)
  })
})