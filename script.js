var isGameFinished = false;

var currentCharacter = 'X';

var cells = [
    [ '', '', '' ],
    [ '', '', '' ],
    [ '', '', '' ],
];

function clickedCell(cellID) {
    if (!isGameFinished)
    {
        switch (cellID) {
            case 'cellOne':
                if(cells[0][0] === '') {
                    cells[0][0] = currentCharacter;
                    document.getElementById(cellID).innerText = currentCharacter;
                }
                break;
            case 'cellTwo':
                if(cells[0][1] === '') {
                    cells[0][1] = currentCharacter;
                    document.getElementById(cellID).innerText = currentCharacter;
                }
                break;
            case 'cellThree':
                if(cells[0][2] === '') {
                    cells[0][2] = currentCharacter;
                    document.getElementById(cellID).innerText = currentCharacter;
                }
                break;
            case 'cellFour':
                if(cells[1][0] === '') {
                    cells[1][0] = currentCharacter;
                    document.getElementById(cellID).innerText = currentCharacter;
                }
                break;
            case 'cellFive':
                if(cells[1][1] === '') {
                    cells[1][1] = currentCharacter;
                    document.getElementById(cellID).innerText = currentCharacter;
                }
                break;
            case 'cellSix':
                if(cells[1][2] === '') {
                    cells[1][2] = currentCharacter;
                    document.getElementById(cellID).innerText = currentCharacter;
                }
                break;
            case 'cellSeven':
                if(cells[2][0] === '') {
                    cells[2][0] = currentCharacter;
                    document.getElementById(cellID).innerText = currentCharacter;
                }
                break;
            case 'cellEight':
                if(cells[2][1] === '') {
                    cells[2][1] = currentCharacter;
                    document.getElementById(cellID).innerText = currentCharacter;
                }
                break;
            case 'cellNine':
                if(cells[2][2] === '') {
                    cells[2][2] = currentCharacter;
                    document.getElementById(cellID).innerText = currentCharacter;
                }
                break;
        }
        if (cells[0][0] !== '' && cells[0][0] === cells[1][1] && cells[0][0] === cells[2][2]) {
            document.getElementById('cellOne').style.color = 'green';
            document.getElementById('cellFive').style.color = 'green';
            document.getElementById('cellNine').style.color = 'green';
            isGameFinished = true;
        } else if (cells[0][2] !== '' && cells[0][2] === cells[1][1] && cells[0][2] === cells[2][0]) {
            document.getElementById('cellThree').style.color = 'green';
            document.getElementById('cellFive').style.color = 'green';
            document.getElementById('cellSeven').style.color = 'green';
            isGameFinished = true;
        } else if (cells[0][0] !== '' && cells[0][0] === cells[0][1] && cells[0][0] === cells[0][2]) {
            document.getElementById('cellOne').style.color = 'green';
            document.getElementById('cellTwo').style.color = 'green';
            document.getElementById('cellThree').style.color = 'green';
            isGameFinished = true;
        } else if (cells[1][0] !== '' && cells[1][0] === cells[1][1] && cells[1][0] === cells[1][2]) {
            document.getElementById('cellFour').style.color = 'green';
            document.getElementById('cellFive').style.color = 'green';
            document.getElementById('cellSix').style.color = 'green';
            isGameFinished = true;
        } else if (cells[2][0] !== '' && cells[2][0] === cells[2][1] && cells[2][0] === cells[2][2]) {
            document.getElementById('cellSeven').style.color = 'green';
            document.getElementById('cellEight').style.color = 'green';
            document.getElementById('cellNine').style.color = 'green';
            isGameFinished = true;
        } else if(cells[0][0] !== '' && cells[0][0] === cells[1][0] && cells[0][0] === cells[2][0]) {
            document.getElementById('cellOne').style.color = 'green';
            document.getElementById('cellFour').style.color = 'green';
            document.getElementById('cellSeven').style.color = 'green';
            isGameFinished = true;
        } else if(cells[0][1] !== '' && cells[0][1] === cells[1][1] && cells[0][1] === cells[2][1]) {
            document.getElementById('cellTwo').style.color = 'green';
            document.getElementById('cellFive').style.color = 'green';
            document.getElementById('cellEight').style.color = 'green';
            isGameFinished = true;
        } else if(cells[0][2] !== '' && cells[0][2] === cells[1][2] && cells[0][2] === cells[2][2]) {
            document.getElementById('cellThree').style.color = 'green';
            document.getElementById('cellSix').style.color = 'green';
            document.getElementById('cellNine').style.color = 'green';
            isGameFinished = true; 
        } else {
            var isFilledUp = true;
            cells.forEach((row) => {
                row.forEach((cell) => {
                    if (cell === '') {
                        isFilledUp = false;
                    }
                });
            });
            if (isFilledUp) {
                setTimeout(() => {
                    alert('Stalemate!');
                    var cellElements = document.querySelectorAll('span');
                        cellElements.forEach((cellElement) => {
                        cellElement.innerText = '';
                        cellElement.style.color = 'black';
                    });
                    cells = [
                        [ '', '', '' ],
                        [ '', '', '' ],
                        [ '', '', '' ],
                    ];
                    currentCharacter = 'X';
                }, 100);
            }
        }
        if (isGameFinished) {
            setTimeout(() => {
                alert(`The victor is ${ currentCharacter }!`);
                var cellElements = document.querySelectorAll('span');
                cellElements.forEach((cellElement) => {
                    cellElement.innerText = '';
                    cellElement.style.color = 'black';
                });
                cells = [
                    [ '', '', '' ],
                    [ '', '', '' ],
                    [ '', '', '' ],
                ];
                currentCharacter = 'X';
                isGameFinished = false;
            }, 100);
        } else {
            if (currentCharacter === 'X') {
                currentCharacter = 'O';
            } else {
                currentCharacter = 'X';
            }
        }
    }
}