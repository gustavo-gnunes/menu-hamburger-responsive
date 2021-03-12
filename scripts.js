const Modal = {
  menuHamburgersOnOff() {
    if(document.querySelector('.menu-container.active')) {
      document.querySelector('.menu-container').classList.remove('active')
      // console.log('removeu active')
    } else {
      document.querySelector('.menu-container').classList.add('active')
      // console.log('add active')
    }
  }
}