const arr = [
    //  1분기
    [90,87,140],
    //  2분기
    [120,130,150],
    //  3분기
    [180,240,200],
    //  4분기
    [180,140,190]
]

//가장 매출이 좋았던 분기
//각 분기별 매출 평균을 만든다
//그 중에서 최대 평균을 찾는다.


let sum = 0
const temparr= []
let tempavg = -1
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        sum = sum + arr[i][j]
    }
    temparr[i] = sum/arr[i].length
    console.log((i+1) +"분기 평균: "+ temparr[i])
    sum = 0;

    if(tempavg<temparr[i]){
        tempavg = temparr[i]
    }
}

console.log("최대 매출분기는: "+ (temparr.indexOf(tempavg)+1)+"분기 입니다.")