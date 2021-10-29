export const createFooter = () => {

    const footer = document.createElement('div')
    footer.classList.add('select-block__footer')
    footer.insertAdjacentHTML('afterbegin', `
    <div class="select-block__footer-button-wrapper">
        <span class="select-block__footer-button-item">применить</span>
    </div>
    <div class="select-block__footer-clear-button-wrapper">
        <span class="select-block__footer-clear-button-item">Очистить</span>
    </div>
`)
return footer
}