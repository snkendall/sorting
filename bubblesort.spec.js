describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });

  it('handles an array of ten elements', function(){
    expect( bubbleSort([4,7,3,0,1,5,8,9,2,6]) ).toEqual( [0,1,2,3,4,5,6,7,8,9] );
  });

  it('handles an array with repeated elements', function(){
    expect( bubbleSort([5,4,7,9,5,1]) ).toEqual( [1,4,5,5,7,9] );
  });

});