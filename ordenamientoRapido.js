const quickSort = ( [ x = [], ...xs ] ) => {
    return ( x.length === 0 ) ? [] : [
      ...quickSort( xs.filter( y => y <= x ) ),
      x,
      ...quickSort( xs.filter( y => y > x ) )
    ];
  }
  //Cargamos los valores en un array 
  const arr = [10, 4, 40, 32, 67, 12, 43, 31, 65, 1];
  const result = quickSort(arr);
  
  result; // [1, 4, 19, 12, 31, 32, 40, 43, 65, 67]
  console.log(result);