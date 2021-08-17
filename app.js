var reverse = function(x) {
    let number = [];
    let x1 = x.toString();
    let x2 = x1.split("");
    x2.reverse();
    for(let i = 0; i < x2.length; i++){
        let value = parseInt(x2[i], 10);
        number.push(value);        
    }
    let last = number[number.length-1];   
    if (isNaN(last))
    {      
      number.pop()
      let result = number.join("");
      console.log(Math.trunc(result) * -1);      
    }
    else{
        let result = number.join("");
        console.log(Math.trunc(result));
    }
    
};

reverse(-123);



