const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Async!!'), 2000)
            : rejet(new Error('Error!!'))
    });
}

const anotherFunction=async ()=>{
    const something=await fnAsync();
    console.log(something);
    console.log('Hello World');
}

console.log('Before');
anotherFunction();
console.log('After');

/*EL PROGRAMA ANTERIOR PERMITE HALLAR UNA SOLUCION PARA QUE
* JAVASCRIPT PUEDA SEGUIR EJECUTANDO CODIGO MIENTRAS CORRE
* SE ESPERA QUE OTRAS TAREAS TERMINAN*/