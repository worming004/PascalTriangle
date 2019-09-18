type Triangle = Array<Array<number>>

function GenerateTriangle(): Triangle {
    let result: Triangle = [];
    result.push([1]);

    for (let index = 1; index <= 50; index++) {
        let newRow = [];
        for(let column = 0; column <= index; column++){
            if (column == 0 || column == index){
                newRow.push(1);
            } else {
                let previousRow = result[index-1]; 
                newRow.push(previousRow[column-1] + previousRow[column]);
            }
        }
        result.push(newRow);
    }

    return result;
}

let tr = GenerateTriangle();

console.log(tr);