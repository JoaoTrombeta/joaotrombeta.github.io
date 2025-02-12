document.addEventListener('DOMContentLoaded', () => {
    const curriculo = document.getElementById('curriculo')
    const foto = document.getElementById('myfoto')

    curriculo.addEventListener('scroll', e => {
        console.log(curriculo.scrollTop)
        if(curriculo.scrollTop > 50){
            foto.style.top = "15vh"
            foto.style.left = "2.5vw"
            foto.style.borderRadius = "15vh"
        }else if(curriculo.scrollTop < 100){
            foto.style.top = "15vh"
            foto.style.left = "45vw"
            foto.style.borderRadius = "0px"
        }
    })
})