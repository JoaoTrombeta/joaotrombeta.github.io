document.addEventListener('DOMContentLoaded', () => {
    calcIdade()
    
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
})

