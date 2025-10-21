// 3!  = 3 * 2 * 1 = 6

// 5! = 5 * 4 * 3 * 2 * 1 = 120

function Fact(num) {

    //Base Case// Can determine the asnwer
    if (num == 1) {
        return 1;
    }
    else {
        /* Forward Progress: cannot solve the problem in one step so that 
        //can narrow thr range of possiblites. */
        return num * Fact(num - 1);
    }
}

console.log(Fact(5))