// multipilicar dos numero sin utilizar signo de muliplicacion
let caracteresRepetido = [];
let repetido = (cadena) => {
   arregloCaracteres =  cadena.split('');
   arregloCaracteres.reduce((acc, val) => {
      if(acc === val){
          caracteresRepetido.push(acc)
         return acc;
      } else {
         return  val;
      }
   });
}
repetido('AABBBCCD');
console.log(caracteresRepetido);
