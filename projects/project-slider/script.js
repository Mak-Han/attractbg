const upBtn = document.querySelector('.up-button'),
      downBtn = document.querySelector('.down-button'),
      sideBar = document.querySelector('.sidebar'),
      mainSlide = document.querySelector('.main-slide'),
      slidesCnt = sideBar.querySelectorAll('div');
let activeIdx = 0;

sideBar.style.top = `-${(slidesCnt.length - 1) * 100}vh`

const changeSlide = (direction) => {
  switch (direction) {
    case 'up': {
      activeIdx++
      if (activeIdx >= slidesCnt.length) activeIdx = 0
      mainSlide.style.transform = `translateY(-${activeIdx * 100}vh)`
      sideBar.style.transform = `translateY(${activeIdx * 100}vh)`
      break
    }
    case 'down': {
      console.log(activeIdx)
      activeIdx--
      if (activeIdx < 0) activeIdx = slidesCnt.length - 1
      mainSlide.style.transform = `translateY(-${activeIdx * 100}vh)`
      sideBar.style.transform = `translateY(${activeIdx * 100}vh)`
      break
    }
  }
}

upBtn.addEventListener('click', () => changeSlide('up'))
downBtn.addEventListener('click', () => changeSlide('down'))

const myTimer = setInterval(() => changeSlide('up'), 5000)