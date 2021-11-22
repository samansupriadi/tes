function kadalbuntung (input){
        for(let i = 1; i <= input; i++){
                if(i % 3 === 0 & i % 5 !== 0){
                        console.log("kadal")
                }else if(i % 5 === 0 & i % 3 !== 0){
                        console.log("buntung")
                }else if(i % 3 === 0 & i % 5 === 0){
                        console.log("kadalbuntung")
                }else{
                        console.log(i)
                }
        }
        console.log("\n")
}

function main(){
        var input = 20;
        kadalbuntung(input)
}

main()
