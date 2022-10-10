const ztoast = {
  TOAST_GROUP: 'z-toast-group',
  TOAST: 'z-toast'
}

const Toaster = init()

function init() {
  const node = document.createElement('section')
  node.classList.add(ztoast.TOAST_GROUP)
  document.firstElementChild.insertBefore(node, document.body)
  return node
}

function createToast(text) {
  const node = document.createElement('output')
  node.innerText = text
  node.classList.add(ztoast.TOAST)
  node.setAttribute('role', 'status')

  return node
}

function addToast(toast) {
  const { matches: motionOK } = window.matchMedia('(prefers-reduced-motion: no-preference)')
  Toaster.children.length && motionOK
    ? flipToast(toast)
    : Toaster.appendChild(toast)
}

function flipToast(toast) {
  const first = Toaster.offsetHeight
  Toaster.appendChild(toast)

  const last = Toaster.offsetHeight
  const invert = last - first

  const animation = Toaster.animate([
    { transform: `translateY(${invert}px)` },
    { transform: `tranmslateY(0)` }
  ], {
    duration: 150,
    easing: 'ease-out'
  })
}

const Toast = text => {
  let toast = createToast(text)
  addToast(toast)

  return new Promise(async (resolve, reject) => {
    Promise.allSettled(toast.getAnimations().map(animation => animation.finished))
      .then(() => {
        Toaster.removeChild(toast)
        resolve()
      })
  })
}

window.ZToast = Toast
window.ZToaster = Toaster