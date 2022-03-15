const add = function(a,b){
    return a+b;
}

const subtract = function(a,b){
    return a -b ;
}

const multiply = function(a,b){
    return a*b;
}

const divide = function(a,b){
    return a/b;
}

const operate = function(string){
    const mapping={
        '+':add,
        '-':subtract,
        '*':multiply,
        '/':divide
    };

    const operators = ['+','-','*','/'];

    for (oper of operators){
        let input = string.split(oper);
        if (input == string){
            continue;
        }else{
            
            let result = mapping[oper](Number(input[0]),Number(input[1]));
            return Math.round(result*100)/100;
        }
    }
    


}