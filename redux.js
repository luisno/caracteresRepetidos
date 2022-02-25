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
repetido('AABBBCCDEE');
console.log(caracteresRepetido);
