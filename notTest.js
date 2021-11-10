const arr = [52,22,14,64,95,85]

let sum = 0

for(let i = 0; i<arr.length ; i++){
    sum += arr[i]
    console.log(`Sum: ${sum}`)
}

let avg = (sum / arr.length).toFixed(3)

console.log("AVG: "+ avg)


let min =101
for (let i = 0; i < arr.length; i++) {
    const score = arr[i]
    if(score<min){
        min = score
    }
}
console.log(min)


let max=-1
for(let i =0; i < arr. length ; i++){
    const score = arr[i]
    if(score>max){
        max = score
    }
}
console.log(max)
let temp = arr[0]

for (let i=0; i< arr.length; i++){
    const score =arr[i]

    if(score>temp){
        temp = score
    }
}
console.log(temp
)