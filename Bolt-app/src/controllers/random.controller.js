const randomCtrl = {};

function between(min, max){
    return Math.floor(
        Math.random() * (max - min) + min
        
    )
}
//si yo no creo la siguiente funcion, solo me tiraría un random cuando creo el server, de esta manera, lo loopeo y tengo un random 
//distinto cada vez que me lo piden 
var random = between(0000, 9999);  
function intervalFunc() {
    random = between(0000, 10000);  
}
setInterval(intervalFunc, 1000);

randomCtrl.getRandom = (req, res) => res.json(random);
module.exports = randomCtrl;