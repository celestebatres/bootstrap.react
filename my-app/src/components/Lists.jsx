import React from 'react';

export const Lists = () => {
    const nums = [1, 2, 3, 4, 5];
    //Puede retornar una lista de elementos html
    const listar = nums.map((num)=>
        <li>{num * 8}</li>
    );
    //O simplemente contener numeros
    const numsMult = nums.map((num)=>
        num * 8
    );
    return (
        <div>
            <ul>{listar}</ul>
            <p>Esta es la lista {numsMult}</p>
        </div>
    )
}
