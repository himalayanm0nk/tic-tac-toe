// let currentPlayer ="X"
// let array =Array(9).fill(null)


// function checkWinner(){
//     if(
//         ( array[0]!==null && array[0]== array[1] && array[1] == array[2])||
//          ( array[3]!==null && array[3]== array[4] && array[4]==array[5]) ||
//          ( array[6]!==null && array[6]== array[7] && array[7]==array[8]) ||
//         ( array[0]!==null && array[0]== array[3] && array[3]==array[6])  ||
//         ( array[1]!==null && array[1]== array[4] && array[4]==array[7]) ||
//         ( array[2]!==null && array[2]== array[5] && array[5]==array[8])||
//         (  array[0]!==null &&array[0]== array[4] && array[4]==array[8])||
//         (  array[2]!==null &&array[2]== array[4] && array[4]==array[6])
//     ){
//        document.write(`Winner is ${currentPlayer}`)
//        return;
//     }
//     if(!array.some((e) => e===null)){
//         document.write(`Draw!`)
//         return;
//     }
// }
// function handleClick(e){
   
//     const id =Number(e.id)
//     if(array[id]!=null) return;
//     array[id]=currentPlayer
//     e.innerText=currentPlayer
//     checkWinner();
//     currentPlayer=currentPlayer ==='X' ? '0' : 'X' // agar current player x be brabar hai tho use 0 ni tho X

  
// }
// 0 1 2
// 3 4 5
// 6 7 8

let currentPlayer = "X";
let arr = Array(9).fill(null);

function checkWinner() {
  if (
    (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
    (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
    (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
    (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
    (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
    (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||
    (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
    (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6])
  ) {
    document.write(`Winner is ${currentPlayer}`);
    return;
  }

  if (!arr.some((e) => e === null)) {
    document.write(`Draw!!`);
    return;
  }
}

function handleClick(el) {
  const id = Number(el.id);
  if (arr[id] !== null) return;
  arr[id] = currentPlayer;
  el.innerText = currentPlayer;
  checkWinner();
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}
