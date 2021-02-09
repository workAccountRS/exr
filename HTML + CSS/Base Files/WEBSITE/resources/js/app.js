const btn = document.querySelector('h1')

const fn = (va) => {
    console.log('TEST', va)
}



for (i = 0; i < 1000; i++) {
    btn.addEventListener('click', fn.bind(this, i))

    while (true) {
        element = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, 'button')))
    }

}