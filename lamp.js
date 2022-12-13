const turnOnOff = document.getElementById ( 'turnOnOff' );
const lamp = document.getElementById ( 'lamp' );

function isLampBroken () {
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn () {
    if (!isLampBroken () ) {
    lamp.src = './assets/ligada.jpg';
    }
}

function lampOff () {
    if (!isLampBroken () ) {
    lamp.src = './assets/desligada.jpg';
    }
}

function lampBreake () {
    lamp.src = './assets/quebrada.jpg';
}

function lampOnOff () {
    if (turnOnOff.textContent == 'ON') {
        lampOn();
        turnOnOff.textContent = 'OFF';
    }
    else {
        lampOff();
        turnOnOff.textContent = 'ON'
    }
}


turnOnOff.addEventListener ( 'click', lampOnOff );
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBreake );