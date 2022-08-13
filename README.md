# binary-search-array

Pure javascript binary search for javascript arrays.

returns the matched key or -1 if not found.


## example

    let  array = []
    
    for (let  index = 0; index < 16922000; index++) {
    
    array.push(index)
    
    }
    
    var  bs = require("binary-search-array");
    
      
    
    console.log(bs.binarySearch(array, 58558)); //Promise { 58558 }
    
    console.log(bs.binarySearch(array, 16922001)); //Promise { -1 }
    
      
      
    
    console.log(bs.binarySearch([10, 16, 5, 28, 30, 6, 7], 7)); //Auto sort Promise { 2 }


## Time Results

**Code:**

    let  array = []
    for (let  index = 1; index < 16922000; index++) {
        array.push(index)
    }

    
    let  searchValue = 1692200
    console.time("map")
    a.map((val, index) => {
        if (val == searchValue) return
    })
    console.timeEnd("map")
    console.time("forEach")
    a.forEach((val, index) => {
        if (val == searchValue) return
    })
    console.timeEnd("forEach")
    console.time("forof")
    for  await (const  val  of  a) {
        if (val == searchValue) break
    }
    console.timeEnd("forof")
    console.time("filter")
    a.filter((val, index) => {
        if (val == searchValue) return
    })
    console.timeEnd("filter")
    console.time("find")
    a.find(element  =>  element == searchValue)
    console.timeEnd("find")
    console.time("includes")
    a.includes(searchValue)
    console.timeEnd("includes")
    console.time("indexOf")
    a.indexOf(searchValue)
    console.timeEnd("indexOf")
    console.time("binarySearch")
    var  result = await  binarySearch(a, searchValue);
    console.timeEnd("binarySearch")
    let  test = a[result]
    console.log({ searchValue, result, test });

**Console :** 

    map: 293.726ms
    forEach: 181.763ms
    forof: 283.693ms
    filter: 213.839ms
    find: 25.369ms
    includes: 3.881ms
    indexOf: 3.244ms
    binarySearch: 0.244ms
    { searchValue: 1692200, result: 1692199, test: 1692200 }