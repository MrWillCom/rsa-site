document.body.setAttribute('install-method', 'yarn')

for (const el of document.querySelectorAll('#use-npm')) {
    el.addEventListener('click', () => {
        document.body.setAttribute('install-method', 'npm')
    })
}

for (const el of document.querySelectorAll('#use-yarn')) {
    el.addEventListener('click', () => {
        document.body.setAttribute('install-method', 'yarn')
    })
}
