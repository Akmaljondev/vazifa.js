// JavaScript asoslari moduli uchun vazifa

//1-misol

// let a = 0
// let b = 4
// let c = 6
// if(a>0 && b>0 && c>0){
//     console.log(a*100 + b*10 + c)
//     console.log(a*100 + c*10 + b)
//     console.log(b*100 + a*10 + c)
//     console.log(b*100 + c*10 + a)
//     console.log(c*100 + a*10 + b)
//     console.log(c*100 + b*10 + a)
// }else{
//     console.log("0")
// }

//2-misol

// let a = 9
// if(a==1){
//     console.log("Dushanba")
// }else if(a==2){
//     console.log("Seshanba")
// }else if(a==3){
//     console.log("Chorshanba")
// }else if(a==4){
//     console.log("Payshanba")
// }else if(a==5){
//     console.log("Juma")
// }else if(a==6){
//     console.log("Shanba")
// }else if(a==7){
//     console.log("Yakshanba")
// }else{
//     console.log("none")
// }

//3-misol

// let a = 1232    
// let b = a%4
// if(b==0){
//     console.log(true)
// }else if(b<0){
//     console.log("Musbat son kiriting")
// }else{
//     console.log(false)
// }

//4-misol

// let a = 6333
// if(a>=100 && a<1000){
//     console.log("3")
// }else if(a>=10 && a<100){
//     console.log("2")
// }else if(a>0 && a<10){
//     console.log("1")
// }else{
//     console.log("1 dan 999 gacha son kiriting")
// }

//5-misol

// let a=1, b=2, c=4, d=-1
// if(a>0 && b>0 && c>0 && d>0){
//     console.log(true)
// }else{
//     console.log(false)
// }

//6-misol

// let a=10
// let b=0
// for(let i=0; i<=a; i++){
//     b = b + i
// }
// console.log(b)

//7-misol

// let a = 15, b=0
// for(let i=1; i<a; i++){
//     if(a%i==0){
//         b=b+i
//     }   
// }
// if(a==b){
//     console.log(true)
// }else{
//     console.log(false)
// }

//8-misol

// let n=12345
// let a=n.toString();
// console.log(a.length)

//9-misol

// let n=1234321, d
// let a=n.toString();
// let b=a.length-1
// for(let i=0; i<=Math.floor(a.length/2); i++){
//     if(a[i]==a[b]){
//         d=true
//     }else{
//         d=false
//         break
//     }
//     b=b-1
// }
// console.log(d)

//10-misol

// let n=123456789, b=0
// let a=n.toString();
// for(let i=0; i<a.length; i++){
//     b=b+Number(a[i])
// }
// console.log(b)

//11-misol

// let meva = ["anor", "olma", "nok", "uzum"]
// let copyMeva = []
// for(let i=meva.length-1; i>=0; i--){
//     copyMeva.push(meva[i])
// }
// console.log(copyMeva)

//12-misol

// let n=3, b=0
// let son = [1, 2, 4, 5, 3, 9, 3, 6, 10, 23, 3]
// for(let i=0; i<son.length; i++){
//     if(n==son[i]){
//         b=b+1
//     }
// }
// console.log("Bu yerda " + b + " ta " + n + " bor.")

//13-misol

// let a=10, b=0
// let sonlar=[1, 2, 4, 5, 3, 9, 3, 6, 10, 23, 3, 7]
// for(let i=0; i<sonlar.length; i++){
//     for(let q=b; q<sonlar.length; q++){
//         if(sonlar[i]!=sonlar[q] && sonlar[i]+sonlar[q]==a){
//             console.log(sonlar[i]+"+"+sonlar[q]+"="+a)
//         }
//     }
//     b=b+1
// }

//14-misol

// let son=[1, 2, 4, 5, 3, 9, 54, 6, 10, 23, 34, 7]
// son.sort((max,min) => max-min)
// console.log(son)

//15-misol

// let son=[1, 2, 4, 5, 3, 9, 54, 6, 10, 23, 34, 7, 65]
// son.sort((max,min) => max-min)
// console.log(son[son.length-2])