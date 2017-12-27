 if(charCount == 13 || charCount == 14 || charCount == 15 || charCount == 16){
        var valid = isValid(num, charCount);
        if(valid){
            $("#type").html("valida");
            $("input").attr("name", "checkout.cardNumber").attr("class", "valid-card");
        } else {
            $("#type").html("invalida");
            $("input").attr("name", "checkout.cardNumber").attr("class", "invalid-card");
        }
    }
    /* !ALGORITMO */    
});

function isValid(ccNum, charCount){
    var double = true;
    var numArr = [];
    var sumTotal = 0;
    for(i=0; i<charCount; i++){
        var digit = parseInt(ccNum.charAt(i));

        if(double){
            digit = digit * 2;
            digit = toSingle(digit);
            double = false;
        } else {
            double = true;
        }
        numArr.push(digit);
    }

    for(i=0; i<numArr.length; i++){
        sumTotal += numArr[i];
    }
    var diff = eval(sumTotal % 10);
    console.log(diff);
    console.log(diff == "0");
    return (diff == "0");
}

function toSingle(digit){
    if(digit > 9){
        var tmp = digit.toString();
        var d1 = parseInt(tmp.charAt(0));
        var d2 = parseInt(tmp.charAt(1));
        return (d1 + d2); 
    } else {
        return digit;
    }
}