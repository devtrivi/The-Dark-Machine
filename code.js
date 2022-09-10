const l = function (n) {
    return console.log(n)
}
const button = document.getElementById('audio')
let audio1 = new Audio('./SubterraneanTerror.mp3')

button.addEventListener('click', function(){
    audio1.play()
    audio1.addEventListener('playing', function(){
    l('audio is playing')      
    })
    audio1.addEventListener('ended', function(){
        l('audio stopped')
    })
})