function binarySearch(array, number){
    let middle = Math.floor(array.length / 2)
    
    if(number == array[middle]){
        return arr.indexOf(array[middle])
    }else if(number > array[middle]){
        return binarySearch(array.filter((item, index) => index > middle), number)
    }else{
        return binarySearch(array.filter((item, index) => middle > index), number)
    }

}

let arr = [1, 2 ,3 ,4, 5, 6, 7]

console.log(binarySearch(arr, 3))