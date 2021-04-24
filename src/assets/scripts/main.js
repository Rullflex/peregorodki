import 'lazysizes'
import UIkit from 'uikit'
import { App } from '../../modules/scripts/_core'

document.addEventListener(`DOMContentLoaded`, function () {
    const app = new App()
    app.init()

    app.videoSpy(`#video .popup__body`, 'fmT2FFVuWDA')
    app.mapSpy(`#map`, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2242.04224415465!2d37.833560416139136!3d55.80986699505649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414acb52fb4c021f%3A0x934a4c4096c894dd!2z0J7QkNCeICLQotC10YXQvdC-0L_QsNGA0Log0YbQstC10YInJw!5e0!3m2!1sru!2sru!4v1619195203491!5m2!1sru!2sru')

    const s13_slider = document.querySelector(`.s13__slider`)
    if (s13_slider != undefined & window.innerWidth < app.lg) {
        UIkit.slider(s13_slider)
    }
})
