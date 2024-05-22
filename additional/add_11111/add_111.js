function foobar (id, name){
    return {id,
        name,
        work(){

        },
    };

}
// --------copy obj-----

let cinderellas = [
    {name:'Cinderella Manyunya (1)', age: 16, shoeSize:34},
    {name: 'Cinderella Flipper (2)', age: 22, shoeSize:46},
    {name: 'Cinderella Fluff (3)', age: 20, shoeSize:38},
    {name: 'Cinderella of the foolish laugh (4)', age: 20, shoeSize: 37},
    {name: 'Cinderella Crooked-Eyed (5)', age:21, shoeSize: 38},
    {name: 'Cinderella Ugly (6)', age: 25, shoeSize:39},
    {name: 'Cinderella Belle (7)', age:22, shoeSize: 39},
    {name: 'Cinderella is the best wife (8)', age: 18, shoeSize: 37},
    {name: 'Cinderella is a glutton (9)', age: 31, shoeSize: 40},
    {name: 'Cinderella is an old woman', age: 93, shoeSize: 36}
];
let map = cinderellas.map((cinderellas, index) => {
    return {...cinderellas, id: index + 1}
});
console.log(cinderellas);
console.log(map);

let s =JSON.stringify(cinderellas);
console.log(typeof s);
console.log(s);
let parse = JSON.parse(s)
console.log(parse);

function cloner(cinderellas) {
    return JSON.parse (JSON.stringify((cinderellas)));
}
console.log(cinderellas);



