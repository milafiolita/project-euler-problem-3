function largestFactor(x) {
  var factor=2;
  // looping dengan kondisi factornya kurang dari x
  while (factor <= x){
  // jika x habis dibagi dengan factor dan tidak menghasilkan sisa / 0
    if (x % factor == 0){
        // maka x akan terus dibagi dengan factor
        x /= factor;    
    }
    else{
        // dan jika bilangan masih ada sisa artinya factor akan ditambah trus sampai bisa dibagi
        factor++;
    }
  }
  return factor;
}
module.exports = largestFactor;
