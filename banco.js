function banco (size, cellWidth, cellHeight) {
    let row =  "*".repeat(size * (cellWidth + 1) + 1);
    console.log(row)
    for (let i = 0; i < size; i++) {
        for (let h = 0; h < cellHeight; h++) {
            let row = "*";
            for (let j = 0; j < size; j++) {
                let isWhite = (i + j) % 2 === 0;
                let fillBox = isWhite ? "-" : " ";
                row += fillBox.repeat(cellWidth) + "*";
            }
            console.log(row);
        }
    }
    console.log(row);
}

banco(8, 4, 2)