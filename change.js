const COLORS = {
    red: 'red',
    yellow: 'yellow',
    green: 'greeen',
    orange: 'orange',
    purple: 'purple',
    aqua:   'aqua',
    blue: 'blue'

};

const CLASSES_BY_COLOR = {
    [COLORS.red]: 'traffic-light-red',
    [COLORS.yellow]: 'traffic-light-yellow',
    [COLORS.green]: 'traffic-light-green',
    [COLORS.orange]: 'traffic-light-orange',
    [COLORS.purple]: 'traffic-light-purple',
    [COLORS.aqua]: 'traffic-light-aqua',
    [COLORS.blue]: 'traffic-light-blue'
};

const NEXT_COLOR = {
    [COLORS.red]: COLORS.yellow,
    [COLORS.yellow]: COLORS.green,
    [COLORS.green]: COLORS.orange,
    [COLORS.orange]: COLORS.purple,
    [COLORS.purple]: COLORS.aqua,
    [COLORS.aqua]: COLORS.blue,
    [COLORS.blue]: COLORS.red
};

let = currentColor = COLORS.red; 

function switchColor(node) {
    const currentClass = CLASSES_BY_COLOR[currentColor];
    const nextColor = NEXT_COLOR[currentColor];
    const nextClass = CLASSES_BY_COLOR[nextColor];

    currentColor = NEXT_COLOR[currentColor];
    node.classList.replace(currentClass, nextClass);
};

function initLight(node) {
    node.classList.add(CLASSES_BY_COLOR[currentColor]);
};