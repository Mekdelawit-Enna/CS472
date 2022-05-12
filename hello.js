const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`What's your name?`, name => {
    console.log(`Welcome ${name}!`);
    readline.question('Tell me your age: ' , age =>{
        if(age < 16)
            console.log('You\'re not allowed to drive in Iowa .');
        else
            console.log('You\'re allowed to get a drivers lisence in Iowa .');
        
        readline.close();
    })
    
  });
  