// declaração da variavel checkbox para receber o evento 'clique'
const chk = document.getElementById('chk')
//configuração do evento clique para mudar tema de claro p/ dark
chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})
// declaração de variavel para menumobile(que vai receber a ação)  e navlist que vai receber o comando 
const menu = document.querySelector(".mobilemenu")
const navlist = document.querySelector('.navlist')
// função para quando a variavel menu receber o clique a variavei navlist vai alterar sua propiedade no css para open
menu.onclick = () => {
    navlist.classList.toggle('open')
}

