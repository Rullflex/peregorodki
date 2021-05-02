import 'lazysizes'
import UIkit from 'uikit'
import { App, Form } from '../../modules/scripts/_core'

document.addEventListener(`DOMContentLoaded`, function () {
    const app = new App()

    const form = new Form()
    form.init()

    app.dynamicVideo()
    app.mapSpy(`#map`, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2242.04224415465!2d37.833560416139136!3d55.80986699505649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414acb52fb4c021f%3A0x934a4c4096c894dd!2z0J7QkNCeICLQotC10YXQvdC-0L_QsNGA0Log0YbQstC10YInJw!5e0!3m2!1sru!2sru!4v1619195203491!5m2!1sru!2sru')

    document.querySelector(`.menu__btn`)?.addEventListener('click', () => UIkit.dropdown('.menu-drop').hide(0))

    const $virtualWrapper = document.querySelector(`#virtual .popup__body`)
    if ($virtualWrapper) {
        UIkit.scrollspy($virtualWrapper)
        $virtualWrapper.addEventListener(`inview`, () => {
            $virtualWrapper.insertAdjacentHTML(`beforeend`, app.loaderHtml)
            $virtualWrapper.insertAdjacentHTML(`beforeend`, `<iframe src="https://hafizovtimur.ru/virtual/index.html" scrolling='no' frameborder="0" allowfullscreen="true" data-uk-responsive"></iframe>`)
        })
    }

    const s13_slider = document.querySelector(`.s13__slider`)
    if (s13_slider != undefined & window.innerWidth < app.lg) {
        UIkit.slider(s13_slider)
    }


    //CALC
    if (document.querySelector(`.calc`)) {
        const $calc = document.querySelector(`.calc`),
              $calcSwitcher = $calc.querySelector(`.calc-switcher`),
              $btnPrev = $calc.querySelectorAll('.calc__prev'),
              $btnNext = $calc.querySelector('.calc__next'),
              $itemSet = $calc.querySelectorAll(`.calc__item`),
              $formValues = $calc.querySelector(`.calc-form-values`)

        $itemSet.forEach((el, key, set) => {
            el.addEventListener('beforeshow', ev => {

                const currentIndex = app.getIndexOfElements(el, set)


                if (currentIndex === 0) {
                    $btnPrev[1].classList.add('uk-disabled')
                } else {
                    $btnPrev[1].classList.remove('uk-disabled')
                }
                
                if (currentIndex === set.length - 1) {
                    $calc.querySelector('.calc__btns').classList.add('d-none')

                    //сбор ответов
                    $formValues.innerHTML = ''
                    let appendInput = (name, value) => {
                        let input = document.createElement('input')
                        input.type = 'hidden'
                        input.value = value
                        input.name = name
                        $formValues.append(input)
                    }
                    $itemSet.forEach((el, key, set) => {
                        const name = el.querySelector('.calc__title').innerText
                        if (el.querySelector('.calc__input')) {
                            appendInput(name, el.querySelector('.calc__input')?.value)
                        } else if (el.querySelector('.calc__radio.active')) {
                            appendInput(name, el.querySelector('.calc__radio.active')?.innerText)
                        }
                    })

                } else {
                    $calc.querySelector('.calc__btns').classList.remove('d-none')
                }
            })
        })

        document.querySelectorAll(`.calc__radios`).forEach(items => {
            items.querySelectorAll('.calc__radio').forEach((radio, key, parent) => {
                radio.addEventListener('click', ev => {
                    ev.preventDefault()
                    app.changeActivitySet(parent, key)
                })
            })
        })

        // BTNS
        $btnPrev.forEach(el => {
            el.addEventListener('click', ev => {
                ev.preventDefault()
                UIkit.switcher($calcSwitcher).show('previous')
            })
        })
        $btnNext.addEventListener('click', ev => {
            ev.preventDefault()
            UIkit.switcher($calcSwitcher).show('next')
        })
    }
})
