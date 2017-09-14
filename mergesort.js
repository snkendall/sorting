
function split(wholeArray) {
    var firstHalf,secondHalf,
    half = Math.floor(wholeArray.length /2);

    firstHalf = wholeArray.slice(0,half);
    secondHalf = wholeArray.slice(half);
    return [firstHalf, secondHalf];
}
function mergeSort(array) {
    var holder = [],
    firstHalf = array[0],
    lastHalf = array[1];
   while(firstHalf.length && lastHalf.length)   {
       if(firstHalf[0] < lastHalf[0])   {
           holder.push(firstHalf.shift());
       }
       else{holder.push(lastHalf.shift());}
        //(firstHalf[0] < lastHalf[0]) ? (holder.push(firstHalf.unshift())) : (holder.push(lastHalf.unshift()));
    }
    if(firstHalf.length) {holder.push(...firstHalf);}
    else {holder.push(...lastHalf);}   
    return holder; 
}
