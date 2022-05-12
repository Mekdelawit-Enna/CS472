

const readline = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout,
});




const recursiveReadline = function(){
readline.question('Enter a number or enter STOP.' , numb => {
    console.log(`${numb}`);
    if(numb =='stop')
    {
        return readline.close();
        
    }
    recursiveReadline();
    });
}

recursiveReadline();

 




