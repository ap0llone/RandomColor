const btnNode = document.querySelector('.js-button');
const trafficLight = document.querySelector('.js-traffic-light');

initLight(trafficLight);

btnNode.addEventListener('click', function() {
    switchColor(trafficLight);
})