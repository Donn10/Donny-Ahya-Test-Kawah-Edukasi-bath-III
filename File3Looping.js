function segitiga1(baris){
  let pola = '';
  
  for(let i = 1; i <=baris; i++){
    for(let j = 1; j <=i; j++){
      pola += '*';
    }
    
    pola += '\n'
  }
  
  return pola;
}

console.log(segitiga1(5));

function segitiga3(panjang) {
    let hasil = '';
    for (let i = panjang; i > 0; i--) {
        for (let j = 1; j <= panjang; j++) {
            if (j >= i) {
                hasil += '*';
            } else {
                hasil += ' '
            }
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitiga3(5));