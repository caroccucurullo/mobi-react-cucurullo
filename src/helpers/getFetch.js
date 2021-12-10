import banquetaAzul from "../img/shop/banquetaAzul.png";
import banquetaVerdeAgua from "../img/shop/banquetaVerdeAgua.png";
import banquetaVerdeIngles from "../img/shop/banquetaVerdeIngles.png";
import sillonAmarilloMaiz from "../img/shop/sillonAmarilloMaiz.png";
import sillonRosa from "../img/shop/sillonRosa.png";
import sillonVerdeAgua from "../img/shop/sillonVerdeAgua.png";
import sillonGrisCemento from "../img/shop/sillonGrisCemento.png";
import sillonNaranja from "../img/shop/sillonNaranja.png";
import sillonGrisClaro from "../img/shop/sillonGrisClaro.png";

const productos = [{
    "id":1,
    "nombre":"BANCO de terciopelo azul",
    "img": banquetaAzul,
    "categoria":"SALE", 
    "material":"Hierro, terciopelo", 
    "medidas":"45 x 45", 
    "precio":10000,
    "cantidad":1
},

{
    "id":2,
    "nombre":"PUF agua marina",
    "img": banquetaVerdeAgua, 
    "categoria":"NUEVO", 
    "material":"Madera, pana", 
    "medidas":"45 x 40", 
    "precio":9000,
    "cantidad":1
},

{
    "id":3,
    "nombre":"PUF terciopelo verde",
    "img": banquetaVerdeIngles, 
    "categoria":"MÁS VENDIDO", 
    "material":"Madera, terciopelo", 
    "medidas":"45 x 40", 
    "precio":11000,
    "cantidad":1
},

{
    "id":4,
    "nombre":"SILLÓN en chenille amarillo",
    "img": sillonAmarilloMaiz, 
    "categoria":"DESTACADO", 
    "material":"Madera, chenille", 
    "medidas":"200 x 90", 
    "precio":100000,
    "cantidad":1
},

{
    "id":5,
    "nombre":"SILLÓN de terciopelo rosa",
    "img": sillonRosa, 
    "categoria":"NUEVO", 
    "material":"Madera, terciopelo", 
    "medidas":"170 x 70", 
    "precio":80000,
    "cantidad":1
},

{
    "id":6,
    "nombre":"SILLÓN de lino agua marina",
    "img": sillonVerdeAgua, 
    "categoria":"MÁS VENDIDO", 
    "material":"Madera, lino", 
    "medidas":"160 x 70", 
    "precio":70000,
    "cantidad":1
},

{
    "id":7,
    "nombre":"SILLÓN en lino gris cemento",
    "img": sillonGrisCemento, 
    "categoria":"Sillón 1 cuerpo", 
    "material":"SALE", 
    "medidas":"70 x 70", 
    "precio":45000,
    "cantidad":1
},

{
    "id":8,
    "nombre": "SILLÓN en chenille naranja",
    "img": sillonNaranja, 
    "categoria":"NUEVO", 
    "material":"Madera, chenille", 
    "medidas":"60 x 70", 
    "precio":48000,
    "cantidad":1
},

{
    "id":9,
    "nombre": "SILLÓN en lino gris claro",
    "img": sillonGrisClaro, 
    "categoria":"DESTACADO", 
    "material":"Madera, lino", 
    "medidas":"60 x 60", 
    "precio":35000,
    "cantidad":1
}];

export const getFetch = new Promise ((resolve) => {
    setTimeout(() => {
        resolve(productos)
    }, 2000)
})