function makeInputVerifier(min, max){
        var minimum = min
        var maximum = max
}

function init(val){
    
    if(val<minimum)return "Input is less than minimum value";
    if(val>=minimum && val<=maximum)return "Input is in range";
    return "Input is more than maximum value";
}

function main(){
    var min = 0;
    var max = 10;
    var init = makeInputVerifier(min, max);

    var input=12;
    var values=init(input);

    console.log(values)
}


main()
