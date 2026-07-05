function List(){
    // Creacion de array de frutas
    const frutas = ["manzana","naranja","banana","piña"];

    // Necesitamos convertir el array de string en un array de li items
    /*  
    
    <li>manzana</li>
    <li>naranja</li>
    <li>piña</li>
    <li>banaana</li>
    */

    //recorro cada elemento y creo un elemento li
    const elementosDeLista = frutas.map((fruta) => {
         return <li>{fruta}</li>
    })
   

   

   /*
   console.log(elementosDeLista);

   Array(4):
   0:manzana,
   1:naranja,
   2:banana,
   3:piña
     */

   //retornamos una lista desordenada con los elementos creados en mi array de frutas que recorrí con map

   return (<ul>{elementosDeLista}</ul>);

}

export default List