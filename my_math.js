const my_math = (function()
{
    let pi = 3.14 ;
    function add( x,y)
    {
        return x+y ;
    }

    function subtract(x,y)
    {
        return x-y;
    }

    function multiply(x,y)
    {
        return x*y;
    }

    function divide (x,y)
    {
        return x/y;
    }
    return{
        pi : pi ,
        add : add,
        subtract : subtract ,
        multiply : multiply ,
        divide : divide

    }
})();

module.exports =my_math;