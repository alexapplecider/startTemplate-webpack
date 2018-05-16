import '../scss/main.scss'
import './polyfill'
// import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel'

if (process.env.NODE_ENV !== 'production') {
  require('./../pug/pages/index.pug')
}

export class Common {
  constructor () {
    this.init()
  }

  dropdown () {
    const dopdownTrigger = document.querySelectorAll('.dropdown__trigger')
    for (let trigger of dopdownTrigger) {
      trigger.addEventListener('click', function () {
        this.nextSibling.classList.toggle('show')
      })
    }
  }

  closeDropdown () {
    window.onclick = function (event) {
      if (!event.target.matches('.dropdown__trigger')) {
        const dropdowns = document.querySelectorAll('.dropdown__content')
        for (let dropdown of dropdowns) {
          let openDropdown = dropdown
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show')
          }
        }
      }
    }
  }

  modalOpen () {
    const modalArray = document.querySelectorAll('.modal-trigger')
    for (let modal of modalArray) {
      modal.addEventListener('click', function (event) {
        event.preventDefault()
        let modalDataAttr = this.dataset.modal
        document.querySelector(modalDataAttr).style.display = 'block'
      })
    }
  }

  modalClose () {
    const modalCloseSpanArray = document.querySelectorAll('.modal .close')
    for (let modalCloseSpan of modalCloseSpanArray) {
      modalCloseSpan.addEventListener('click', function (event) {
        event.preventDefault()
        this.closest('.modal').style.display = 'none'
      })
    }

    window.onclick = function (event) {
      if (event.target.className === 'modal') {
        let modals = document.querySelectorAll('.modal')
        for (let modal of modals) {
          modal.style.display = 'none'
        }
      }
    }
  }

  init () {
    this.dropdown()
    this.closeDropdown()
    this.modalOpen()
    this.modalClose()
  }
}
export default new Common()
