const strings = [
  "Why let StubHub or other secondary market firms profit off of their tickets after they've been sold?",
  "It's not believable",
  "The moves were a combo of herky-jerky and fluid.",
  "Tom won't miss you.",
  "He brings to a millennia-old institution the eyes of a child",
  "Tom has been reported missing.",
  "My hobby is collecting insects."
]


document.getElementById('toast-trigger')
  .addEventListener('click', e => {
    const index = Math.floor(Math.random() * 7)
    ZToast(strings[index])
  })