// const arr = 'racecar'
// const arr = 'tot'
const arr = 'bob'


const res = () => {
    const arr2 = arr.split('').reverse().join('')
    if (arr2 === arr) {
        return 'Полиндром'
    } else {
        return 'не полиндром'
    }
}

console.log(res(arr))

/// -2 

// const arr2 = ['1', '4', '2', '8', '5', '7']
const arr2 = ['-1', '-3', '-2', '-7', '-5', '-4']

const res2 = (arr2) => {
    let min = arr2[0]
    let max = arr2[0]
  
    for (let i = 1; i < arr2.length; i++) {
      if (arr2[i] < min) {
        min = arr2[i];
      }
      if (arr2[i] > max) {
        max = arr2[i];
      }
    }
  
    return { min, max };
  }


console.log(res2(arr2))

// --3 


const findDuplicates = (arr4) => {
    const countMap = {}
    const duplicates = []
    
    arr4.map((el) => {
        const key = String(el)
        countMap[key] = (countMap[key] || 0) + 1
    })
    
    Object.keys(countMap).map((key) => {
        if (countMap[key] > 1) {
            duplicates.push(key)
        }
    })
    
    return duplicates
}

console.log(findDuplicates([1,2,2,3,4,4,5]))
console.log(findDuplicates(['a','c', 'a', 'b']))
console.log(findDuplicates([1, '1', '2', 2]))
