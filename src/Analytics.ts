import * as $ from 'jquery'

function createAnalytics(): object {
    let counter = 0
    let destroyed: boolean = false

    console.log('test')

    const listener = (): number => counter++

    $(document).on('click', listener)

    return {
        destroy() {
            $(document).of('click', listener)
            destroyed = true
        },

        getClicks() {
            if (destroyed) {
                return 'Analytics is destroyed. Total clicks = ${counter}'
            }
            return counter
        }
    }
}

window['analytics'] = createAnalytics()