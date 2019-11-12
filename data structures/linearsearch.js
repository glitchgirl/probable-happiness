function linear(result, arr){
    var exists = false;
    for(var i = 0; i < arr.length; i++){
        if(result == arr[i]){
            console.log(`the result is at ${i}`);
            exists = true;
        } 
    }
    if(!exists){
        console.log("this number doesn't exist");
    }
}

linear(8, [0,7,8,6]);