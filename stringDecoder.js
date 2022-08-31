const stringDecoder = (str) => {
    let finalStr = ''
  
    let arr = str.split('')
    arr.push(5)
  
    for(let i = 1; i < arr.length ; i++){
      if(+arr[i] || +arr[i] === 0){
        finalStr += arr[i-1]
      }
    }
    
  
    // for(let i = 0; i < arr.length; i++){
    //   if(+arr[i] === 0){
    //     finalStr += arr[i + 1]
    //   }else if(+arr[i] && +arr[i] !== 0){
    //     i += +arr[i]
    //     finalStr += arr[i + 1]
    //   }
    // }
  
    console.log(finalStr)
    
  }
  
  stringDecoder('0h2xce5ngbrdy')
  stringDecoder('0y4akjfe0s')
  stringDecoder('2bna0p1mp2osl0e')


