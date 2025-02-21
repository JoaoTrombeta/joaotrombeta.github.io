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
            menuLateral.style.display = "flex"
            setTimeout(() => {
                
                main.style.height = "100vh"
                curriculo.style.height = "100vh"
                curriculo.style.width = "82vw"
                menuLateral.style.width = "18vw"
                
                header.style.height = "0vh"
                
                footer.style.height = "0vh"
                
                fotoPerfil.style.filter = "opacity(0)"
                fotoPerfil2.style.filter = "opacity(1)"
                
                foto.style.top = "2.5vh"
                foto.style.left = "4vw"
                foto.style.borderRadius = "15vh"
            }, 50);
        }else if(curriculo.scrollTop < 50){
            main.style.height = "85vh"
            curriculo.style.width = "100vw"
            curriculo.style.height = "85vh"
            menuLateral.style.width = "0vw"
            
            header.style.height = "10vh"
            
            footer.style.height = "5vh"
            
            fotoPerfil.style.filter = "opacity(1)"
            fotoPerfil2.style.filter = "opacity(0)"
            menuLateral.style.overflow = "hidden"

            foto.style.top = "15vh"
            foto.style.left = "45vw"
            foto.style.borderRadius = "5px"
        }
    })
    calcIdade()
})

function abreContent(id, idClick) {
    const elemento = document.getElementById(id)
    const ClickElement = document.getElementById(idClick)

    if(elemento.style.height == "fit-content" || elemento.style.height == ""){
        elemento.style.height = "0px"
        ClickElement.style.transform = "rotate(0deg)"
    }else{
        elemento.style.height = "fit-content"
        ClickElement.style.transform = "rotate(90deg)"
    }
}

function calcIdade() {
    var DataAtual = new Date()
    var anoAtual = DataAtual.getFullYear()
    var mesAtual = DataAtual.getMonth()
    var diaAtual = DataAtual.getDate()
    const idade = document.getElementById('minhaIdade')
    if(diaAtual >= 3 && mesAtual >= 8){
        idade.innerText = anoAtual - 2005
    }else{
        idade.innerText = anoAtual - 2005 - 1
    }
}