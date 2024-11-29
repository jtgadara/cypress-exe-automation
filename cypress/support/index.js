import addContext from 'mochawesome/addContext'
Cypress.on('test:after:run', (test, runnable) => {
    if (test.state === 'failed') {
        addContext({ test }, {title: 'Screenshot', value: `screenshots/${Cypress.spec.name}/${runnable.parent.title.replace(':', '')} -- ${test.title} (failed).png`})
    }
});