// 3D scroll

let zSpacing = -1000,
   lastPos = zSpacing / 5,
   $frames = document.getElementsByClassName('frame'),
   pixels = Array.from($frames),
   zVals = []

window.onscroll = function() {

   let top = document.documentElement.scrollTop,
      delta = lastPos - top
   lastPos = top 

   pixels.forEach(function(n,i){

      zVals.push((i * zSpacing) + zSpacing)
      zVals[i] += delta * -5.5
      let frame = pixels[i],
          transform = `translateZ(${zVals[i]}px)`,
          opacity = zVals[i] < Math.abs(zSpacing) / 1.5 ? 1 : 0
      frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
   })

}

window.scrollTo(0, 1)

// audio 

let soundBtn = document.querySelector('.soundBtn'),
   audio = document.querySelector('.audio')

soundBtn.addEventListener('click', e => {
   soundBtn.classList.toggle('paused')
   audio.paused ? audio.play() : audio.pause()
})

window.onfocus = function() {
   soundBtn.classList.contains('paused') ? audio.pause() : audio.play() 
}

window.onblur = function() {
    audio.pause()
}