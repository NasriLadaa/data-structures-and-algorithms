//arr = [10, 2, 4, 5, 11]
arr = [ 2, 0 , 2 , 1, 1 , 0]
n = arr.length-1;
var count = 0;
for (i = 0; i < n ; i++) {
    for (j = 0; j < n - i ; j++) {
        count++;
        if ( arr[j] > arr[j+1]){
            temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log(arr)
console.log(count)