function perulangan(genap) {
    for (let i = 1; i <= genap; i++) {
    if (i % 2 == 0) {
    console.log('genap');
    }
   else if (i % 1 == 0) {
    console.log(i);
   }     
    }
    return ' '
}
perulangan(20)