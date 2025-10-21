// 0 ,  1  , 1, 2 , 3, 5 , 8 , .... 

//F(n) = F(n-1) + F(n-2)


////F(3) = F(2) + F(1)  =   1 + 1 = 2

function Fib(num){
    if ( num == 0){      //Base Case
        return 0;
    }
    if( num == 1){
        return 1;
    }
    else{
        return Fib(num- 1) + Fib(num -2) //Forward Progress

    }

}

console.log(Fib(5))
