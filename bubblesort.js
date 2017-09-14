function bubbleSort(arr){
    let ranSort = false;

    for (var i = 1; i < arr.length; i++){
        if (arr[i] < arr[i-1]){
            ranSort = true;
            let temp = arr[i];
            arr[i] = arr[i-1];
            arr[i-1] = temp;
        }
    }

    if (ranSort){
       return bubbleSort(arr);
    } else {
        return arr;
    }
}
