
    describe('Split Array function', function() {
        it('is able to split an array into two halves', function() {
            expect(split([4,5,6,9])).toEqual([[4,5],[6,9]]);
        });
        it('is able to split an array with an odd number of elements', function() {
            expect(split([4,5,6,9,7])).toEqual([[4,5],[6,9,7]]);
        });
      });
      describe('Merge Sort', function(){
        it('is able to merge two sorted arrays into one sorted array', function(){
            expect(mergeSort([[1,6,8],[4,7,9]])).toEqual([1,4,6,7,8,9]);
        });
        it('is able to merge two sorted arrays of different lengths into one sorted array', function(){
            expect(mergeSort([[1,6,8],[7,9]])).toEqual([1,6,7,8,9]);
        });
      });