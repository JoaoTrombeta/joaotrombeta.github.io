document.addEventListener('DOMContentLoaded', () => {
    const curriculo = document.getElementById('curriculo')
    const foto = document.getElementById('myfoto')
    const header = document.getElementById('header')
    const main = document.getElementById('main')
    const footer = document.getElementById('footer')
    const menuLateral = document.getElementById('lateral')
    const fotoPerfil = document.getElementById('fotoPerfil')
    const fotoPerfil2 = document.getElementById('fotoPerfil2')

    
    curriculo.addEventListener('scroll', e => {
        console.log(curriculo.scrollTop)
        if(curriculo.scrollTop > 50){
            main.style.height = "100vh"
            curriculo.style.height = "100vh"
            curriculo.style.width = "82vw"
            menuLateral.style.width = "18vw"
            
            header.style.height = "0vh"
            
            footer.style.height = "0vh"
            
            fotoPerfil.style.filter = "opacity(0)"
            fotoPerfil2.style.filter = "opacity(1)"
            
            foto.style.top = "5vh"
            foto.style.left = "4vw"
            foto.style.borderRadius = "15vh"
        }else if(curriculo.scrollTop < 100){
            main.style.height = "85vh"
            curriculo.style.width = "100vw"
            curriculo.style.height = "85vh"
            menuLateral.style.width = "0vw"
            
            header.style.height = "10vh"
            
            footer.style.height = "5vh"
            
            fotoPerfil.style.filter = "opacity(1)"
            fotoPerfil2.style.filter = "opacity(0)"

            foto.style.top = "15vh"
            foto.style.left = "45vw"
            foto.style.borderRadius = "5px"
        }
    })
})