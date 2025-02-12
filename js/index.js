document.addEventListener('DOMContentLoaded', () => {
    const curriculo = document.getElementById('curriculo')
    const foto = document.getElementById('myfoto')
    const header = document.getElementById('header')
    const main = document.getElementById('main')
    const footer = document.getElementById('footer')
    const menuLateral = document.getElementById('lateral')
    
    curriculo.addEventListener('scroll', e => {
        console.log(curriculo.scrollTop)
        if(curriculo.scrollTop > 50){
            main.style.height = "100vh"
            curriculo.style.height = "100vh"
            curriculo.style.width = "85vw"
            menuLateral.style.width = "15vw"
            
            header.style.height = "0vh"
            
            footer.style.height = "0vh"
            
            foto.style.top = "5vh"
            foto.style.left = "2.5vw"
            foto.style.borderRadius = "15vh"
        }else if(curriculo.scrollTop < 100){
            main.style.height = "85vh"
            curriculo.style.width = "100vw"
            curriculo.style.height = "85vh"
            menuLateral.style.width = "0vw"
            
            header.style.height = "10vh"
            
            footer.style.height = "10vh"

            foto.style.top = "15vh"
            foto.style.left = "45vw"
            foto.style.borderRadius = "0px"
        }
    })
})