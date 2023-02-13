function Formatting(Str, K) {
    
    Str = Str.replace(/-/g, '');  
    Str = Str.toUpperCase();    
    
    let firstLength = Str.length % K;
    if (firstLength === 0) {
      firstLength = K;
    }
    
     let result = '';
    
    result = result+Str.substr(0, firstLength);
    
    for (let i = firstLength; i < Str.length; i += K) {
      
      result =result+'-';
      
      result = result+Str.substr(i, K);
    }
    
    return(result);
  }
  
  console.log(Formatting('sum-it-sin-g-h', 4));



// const string = 'Hello hello hello';

// // performing a replacement
// const result1 = string.replace(/hello/ig, 'world');
// console.log(result1);