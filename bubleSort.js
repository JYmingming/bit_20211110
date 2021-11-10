const arr = [52,22,14,64,95,85,35,99,5,3]

let temp
for (let j = 0; j < arr.length; j++) {
    for (let i=0; i< arr.length; i++){
        const score =arr[i]

        if(arr[i] > arr[i+1]){
            temp = arr[i+1]
            arr[i+1] = arr[i]
            arr[i] = temp
        }
    }console.log(arr)
}

