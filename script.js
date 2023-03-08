const turnOnOff = document.querySelector('#turnOnOff')
const lamp = document.querySelector('#lamp')

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn() {
    if(!isLampBroken()) {
    lamp.src = "./assets/ligada.jpg"
    }
}

function lampOff() {
    if(!isLampBroken()) {
    lamp.src = "./assets/desligada.jpg"
    }
}

function lampBroken() {
    lamp.src = "./assets/quebrada.jpg"
}

function lampOnOff() {
    if(turnOnOff.textContent == 'Ligar') {
        lampOn()
        turnOnOff.textContent = 'Desligar'
    } else {
        lampOff()
        turnOnOff.textContent = 'Ligar'
    }
}



turnOnOff.addEventListener('click', lampOnOff)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampBroken)