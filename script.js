let data = new Date()
let hora = data.getHours()
let background = document.getElementById('sectionBack')
let root = document.querySelector(':root')
// rs.getPropertyValue('--nomeVar') --> pegar variável CSS, necessário criar outra variável RS
// r.style.setProperty('--nomeVar', '#ffffff') --> alterar variável CSS

// madrugada, manhã e tarde. O Site já foi desenvolvido com o tema noite.
if(hora<=4){
    background.style.backgroundImage = "url(images/backgroundMadrugada.jpg"
    root.style.setProperty('--priCor', '#0E1E2D')
    root.style.setProperty('--segCor', '#132831')
    root.style.setProperty('--terCor', '#203A43')
}
else if (hora<=12){
    background.style.backgroundImage = "url(images/backgroundManha.jpg)"
    root.style.setProperty('--priCor', '#4346B6')
    root.style.setProperty('--segCor', '#413c94')
    root.style.setProperty('--terCor', '#7A5BC9')
}
else if (hora<=18){
    background.style.backgroundImage = "url(images/backgroundTarde.jpg"
    root.style.setProperty('--priCor', '#1D2671')
    root.style.setProperty('--segCor', "#4f4e94")
    root.style.setProperty('--terCor', '#65417a')
}