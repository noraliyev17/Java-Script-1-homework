"use strict";
// 1-Misol

// var l=500
// console.log(l/100+" metr");

// 2-Misol

// var m=200
// console.log(m/1000+" tonna");

// 3-Misol

// var a=17
// var b=7
// console.log(a/b +" marta joylashtirish mumkin");

// 4-Misol

// var a=56
// console.log(Math.floor(a/10+" birlik"));
// console.log(a%10+" o'nlik");

// 5-Misol

// var a = 75
// var q;
// var c;
// // console.log( (q = Math.floor( a / 10)) + " birlik");
// // console.log((c = a % 10) + " o'nlik");
// q = Math.floor( a / 10) ;
// c =  a % 10;
// console.log(q+c);

// 6-Misol

// var a = 75
// var q;
// var c;
// q = Math.floor( a / 10) ;
// c =  a % 10;
// console.log(q*c);

// 7-Misol

// var a=2022
// console.log( Math.floor( a / 1000) + " birlik");
// console.log(a % 100 + " yuzlik");

// 8-Misol

// var a = 360000
// console.log((Math.floor( a / 3600)) + " soat");
//  console.log( (Math.floor( a / 60)) + " minut");

// if else**************************************************************************************************************************************************************

// var hour;

// if(hour>=6 && hour<12){
//     console.log('Hayrli tong ');
// }
// else if(hour>=12 && hour<18){
//     console.log('Hayrli kun ');
// }
// else{
//     console.log('Hayrli kech');
// }

// let world;

// if (world === "pencil") {

//   console.log("qalam");

// } else if (world === "book") {

//   console.log("kitob");

// } else {

//   console.log("nomalum soz");

// }

// M-1

// let son1=prompt(' 1-Sonni kiriting')
// let son2=prompt(' 2-Sonni kiriting')
// let son3=prompt(' 3-Sonni kiriting')

// if(son1<son2 && son1<son3){
//  console.log(son1 + ' eng kichig son');
// }
// else if(son2<son1 && son2<son3){

//     console.log(son2 + ' eng kichig son');
// }

// else {
//     console.log(son3 + ' eng kichig son');
// }

// M-2

// let son1=prompt(' 1-Sonni kiriting')
// let son2=prompt(' 2-Sonni kiriting')
// let son3=prompt(' 3-Sonni kiriting')

// if(son1>son2 && son1>son3){
//  console.log(son1 + ' eng katta son');
// }
// else if(son2>son1 && son2>son3){

//     console.log(son2 + ' eng katta son');
// }

// else {
//     console.log(son3 + ' eng katta son');
// }

// M-3

// var son1=prompt(' 1-sonni kiriting')
// var son2=prompt(' 2-sonni kiriting')

// if( son1>son2) console.log(son1);
// else{console.log(son2);}

// M-4

// let son=prompt(' sonni kiriting')

// if(son>0 ){
//     console.log(son---2 + ' manfiy songa -2');
// }
// else{
//     console.log(son+++3 + ' musbat songa +3');
// }

// M-5

// let son=prompt(' sonni kiriting')

// if(son>0 ){
//     console.log(son---1 + ' manfiy songa -1');
// }
// else{
//     console.log(son+++1 + ' musbat songa +1');
// }

// M-6

// var num=+prompt(' Telefon raqamingizni kodini kiriting!')

// if(num===97 || num===88){
//  console.log('Nomeringiz MOBIUZ');
// }
// else if(num===90 || num===91){
//     console.log('Nomeringiz BELLINE');
// }
// else if(num===93 || num===94){
//     console.log('Nomeringiz UCELL');
// }
// else if(num===99 || num===95){
//     console.log('Nomeringiz UZMOBILE');
// }
// else if(num===33){
//     console.log('Nomeringiz HUMANS');
// }
// else if(num===98){
//     console.log('Nomeringiz PERFECTUM');
// }
// else{
//     console.log('Nomalum Kod');
// }

// M-7

// let kun=+prompt('Raqam kiriting')

// if(kun===1) console.log('Dushanba');
// else if(kun===2) console.log('Seshanba');
// else if(kun===3) console.log('Chorshanba');
// else if(kun===4) console.log('Payshanba');
// else if(kun===5) console.log('Juma');
// else if(kun===6) console.log('Shanba');
// else if(kun===7) console.log('Yakshanba');
// else{ console.log('Bunday kun Yoq');}

// if else**************************************************************************************************************************************************************

// switch case**********************************************************************************************************************************************************

// M-1

// let kun = +prompt(" Raqam kiriting ✔");

// switch (kun) {
//   case 1:
//     console.log("Dushanba");
//     break;

//   case 2:
//     console.log("Seshanba");
//     break;

//   case 3:
//     console.log("Payshanba");
//     break;

//   case 4:
//     console.log("Chorshanba");
//     break;

//   case 5:
//     console.log("Juma");
//     break;

//   case 6:
//     console.log("Shanba");
//     break;

//   case 7:
//     console.log("Yakshanba");
//     break;

//     default:
//         console.log('Nomalum soz');
// }

// M-2

// let baxo = +prompt(" Baxoingizni kiriting ✔");

// switch (baxo) {
//   case 1:
//     console.log(baxo+"-Yomon");
//     break;

//   case 2:
//     console.log(baxo+"-Qoniqarsiz");
//     break;

//   case 3:
//     console.log(baxo+"-Qoniqarli");
//     break;

//   case 4:
//     console.log(baxo+"-Yaxshi");
//     break;

//   case 5:
//     console.log(baxo+"-A'lo");
//     break;

//     default:
//         console.log('Bunday Baxo Yoq');
// }

// M-3

// let oy = +prompt(" Oyni kiriting ✔");

// switch (oy) {
//   case 1:
//     console.log(oy + "-oy Qish");
//     break;

//   case 2:
//     console.log(oy + "-oy Qish");
//     break;

//   case 3:
//     console.log(oy + "-oy Bahor");
//     break;

//   case 4:
//     console.log(oy + "-oy Bahor");
//     break;

//   case 5:
//     console.log(oy + "-oy Bahor");
//     break;

//   case 6:
//     console.log(oy + "-oy Yoz");
//     break;

//   case 7:
//     console.log(oy + "-oy Yoz");
//     break;

//   case 8:
//     console.log(oy + "-oy Yoz");
//     break;

//   case 9:
//     console.log(oy + "oy Kuz");
//     break;

//   case 10:
//     console.log(oy + "-oy Kuz");
//     break;

//   case 11:
//     console.log(oy + "-oy Kuz");
//     break;

//   case 12:
//     console.log(oy + "-oy Qish");
//     break;

//   default:
//     console.log("Bunday oy yo'q");
// }


// M-4

// let oy = +prompt(" Oyni kiriting ✔");

// switch (oy) {
//   case 1:
//     console.log(oy + "-oy 30 kun");
//     break;

//   case 2:
//     console.log(oy + "-oy 31 kun");
//     break;

//   case 3:
//     console.log(oy + "-oy 30 kun");
//     break;

//   case 4:
//     console.log(oy + "-oy 31 kun");
//     break;

//   case 5:
//     console.log(oy + "-oy 30 kun");
//     break;

//   case 6:
//     console.log(oy + "-oy 31 kun");
//     break;

//   case 7:
//     console.log(oy + "-oy 30 kun");
//     break;

//   case 8:
//     console.log(oy + "-oy 31 kun");
//     break;

//   case 9:
//     console.log(oy + "oy 30 kun");
//     break;

//   case 10:
//     console.log(oy + "-oy 31 kun");
//     break;

//   case 11:
//     console.log(oy + "-oy 30 kun");
//     break;

//   case 12:
//     console.log(oy + "-oy 31 kun");
//     break;

//   default:
//     console.log("Bunday oy yo'q");
// }

// M-5

// let baxo = +prompt(" Baxoingizni kiriting ✔");

// switch (baxo) {
//   case 1:
//     console.log(baxo+" ga 50 ming som stipendiya ");
//     break;

//   case 2:
//     console.log(baxo+" ga 100 ming som stipendiya ");
//     break;

//   case 3:
//     console.log(baxo+" ga 300 ming som stipendiya ");
//     break;

//   case 4:
//     console.log(baxo+" ga 500 ming som stipendiya ");
//     break;

//   case 5:
//     console.log(baxo+" ga 700 ming som stipendiya ");
//     break;

//     default:
//         console.log('Uzr sizga Stipendiya berilmaydi! 🤣😊');
// }


// switch case**********************************************************************************************************************************************************


