// Uyga vazifa 

//1. misol
// let a = Math.floor(prompt('a sonni kiriting: '));
// let b = Math.floor(prompt('b sonni kiriting: '));
// let peremetri = 2 * (a+b);
// let S = a * b;
// console.log(`Perimetri: ${peremetri}`);
// console.log("Yuzi :" + S);

//2. misol
// let diametr = Math.floor(prompt('aylananing diametrini kiriting: '));
// const pi = 3.14;
// let L =  pi * diametr;
// let r = diametr / 2;
// let S =  pi * (r**2);
// console.log("Aylananing uzunligi: " + L);
// console.log("Aylananing Yuzi: " + S);

//3. misol 
// let a = Math.floor(prompt('Kubning yon tomonini kiriting: '));
// let V = a**3;
// let S = 6 * (a**2);
// console.log("Kubning hajmi: " + V);
// console.log("Kubning yuzi: " + S);

//4. misol
// let a = Math.floor(prompt('paralippedning a tomonini kiriting: '));
// let b = Math.floor(prompt('Kubning b tomonini kiriting: '));
// let c = Math.floor(prompt('Kubning c tomonini kiriting: '));
// let V = (a * b * c) / 6;
// let S = 2 * (a * b + b * c + c * a);
// console.log("Paralipipedning hajmi: " + V);
// console.log("Paralipipedning yuzi: " + S);

//5. misol
// let a = Math.floor(prompt('a sonni kiriting: '));
// let b = Math.floor(prompt('b sonni kiriting: '));
// let ortaArifmetigi = (a+b) / 2;
// console.log("o'rta arifmetigi: " + ortaArifmetigi);

//6. misol
// let a = Math.floor(prompt('a sonni kiriting: '));
// let b = Math.floor(prompt('b sonni kiriting: '));
// let c = Math.sqrt(a**2 + b**2);
// let p = a+b+c;
// console.log("gipotenuzasi: " + c);
// console.log("peremetri: " + p);


//7. misol
// let r1 = Math.floor(prompt('r1 peremetrni kiriting: '));
// let r2 = Math.floor(prompt('r2 peremetrni kiriting: '));
// const pi = 3.14;
// let s1 = pi * r1;
// let s2 =  pi * r2;
// const s = pi * (r1 ** 2 - r2 ** 2);
// console.log(s1);
// console.log(s2);
// console.log(s);


//8. misol
// let l =  Math.floor(prompt('l sonni kiriting: '));
// const pi = 3.14;
// let r = (2 * pi) / l;
// let s = (pi * r ** 2);
// console.log(r);
// console.log(s);

//9. misol
//  let x1 = Math.floor(prompt('x1 sonni kiriting: '));
//  let x2 = Math.floor(prompt('x2 sonni kiriting: '));
//  let y1 = Math.floor(prompt('y1 sonni kiriting: '));
//  let y2 = Math.floor(prompt('y2 sonni kiriting: '));
//  let l = Math.sqrt((x1 - x2)**2 + (y1 - y2)**2);
//  console.log(l);

//10. misol
//  let A =  Math.floor(prompt('A sonni kiriting: '));
//  let B =  Math.floor(prompt('B sonni kiriting: '));
//  let C =  Math.floor(prompt('C sonni kiriting: '));
//  A = B 
//  B = A 
//  C = A
//  console.log(A);
//  console.log(B);
//  console.log(C);

//11. misol 
//  let x =  Math.floor(prompt('x sonni kiriting: '));
//  let y = 4 * (x - 3)**6 - 7 * (x - 3)**3 + 2;
//  console.log(y);


//12. misol
// let A =  Math.floor(prompt('A sonni kiriting: '));
// let qubi = A ** 3;
// let oltinchisi = A ** 6;
// let toqqizinchidarjasi = A ** 9;
// let onbeshinchisi = A ** 15;
// console.log(qubi);
// console.log(oltinchisi);
// console.log(onbeshinchisi);

//13. misol
// let Tf =  Math.floor(prompt('Temperaturani kiriting: '));
// let Tc =  (Tf - 32) * 5/9;
// console.log(Tc);

//14. misol
// let X =  Math.floor(prompt('X shokalad kilogramini kiriting: '));
// let A = Math.floor(prompt('A shokalad narxini kiriting: '));
// let Y = Math.floor(prompt('Y konfet kilogramini kiriting: '));
// let B = Math.floor(prompt('Y konfet narxini kiriting: '));
// let shokoladNarxi = A / X; // 1 kg shokolad narxi
// let konfetNarxi = B / Y; // 1 kg konfet narxi
// const farq = shokoladNarxi - konfetNarxi;
// console.log(`1 kg shokolad 1 kg konfetdan ${farq.toFixed(2)} so'm qimmatroq.`);


//15. misol
// let X =  Math.floor(prompt('X olmani kilogramini kiriting: '));
// let A = Math.floor(prompt('A olmani narxini kiriting: '));
// let Y = Math.floor(prompt('Y olmani kilogramini kiriting: '));
// let B = Math.floor(prompt('Y olmani narxini kiriting: '));
// let jamiSavdo = (X * A) + (Y * B);
// console.log(`Abdulaziz jami ${jamiSavdo} so'm sarfladi.`);


//16. misol
// let uchXonaliSon =  Math.floor(prompt('uch xonali sonni kiriting: '));
// let  birlarXonasi = uchXonaliSon % 10;
// let onlarXonasi = Math.floor((uchXonaliSon % 100) / 10);
// console.log("Birliklar xonasidagi raqam: " + birlarXonasi);
// console.log("O'nliklar xonasidagi raqam: " + onlarXonasi);


//17. misol
// let number = Math.floor(prompt('uch xonali sonni kiriting: '));
// let birlik = number % 10;
// let onlik = Math.floor((number % 100) / 10);
// let yuzlik = Math.floor(number / 100);
// let yigindi = birlik + onlik + yuzlik;
// console.log("Raqamlar yig'indisi: " + yigindi);

//18. misol
// let number = Math.floor(prompt('uch xonali sonni kiriting: '));
// let birlik = number % 10;
// let onlik = Math.floor((number % 100) / 10);
// let yuzlik = Math.floor(number / 100);
// let teskariSon = (birlik * 100) + (onlik * 10) + yuzlik;
// console.log("Teskari tartibdagi son: " + teskariSon);

//19. misol
// let number = Math.floor(prompt('uch xonali sonni kiriting: '));
// let birlik = number % 10;
// let onlik = Math.floor((number % 100) / 10);
// let yuzlik = Math.floor(number / 100);
// let yangiSon = (onlik * 100) + (yuzlik * 10) + birlik;
// console.log("O'nlik va yuzlik raqamlari almashtirilgan son: " + yangiSon);

//20. misol
// let number = Math.floor(prompt('uch xonali sonni kiriting: '));
// let birlik = number % 10;
// let onlik = Math.floor((number % 100) / 10);
// let yuzlik = Math.floor(number / 100);
// let yangiSon = (yuzlik * 100) + (birlik * 10) + onlik;
// console.log("O'nlik va birlik raqamlari almashtirilgan son: " + yangiSon);

//21. misol
// let number = Math.floor(prompt('tort xonali sonni kiriting: '));
// let minglik = Math.floor(number / 1000);
// console.log("Mingliklar xonasidagi raqam: " + minglik);


//22. misol
// let soniya = Math.floor(prompt('soniyani kiriting: '));
// let tolaMinut = Math.floor(soniya / 60);
// console.log("Kun boshidan boshlab to'la o'tgan minutlar: " + tolaMinut);

//23. misol
// let soniya = Math.floor(prompt('soniyani kiriting: '));
// let tolaSoat = Math.floor(soniya / 3600);
// console.log(tolaSoat);

//24. misol
// let soniya = Math.floor(prompt('soniyani kiriting: '));
// let minut = Math.floor(soniya / 60);
// let sekund = Math.floor(soniya % 60);
// console.log(`Kun boshidan ${soniya} sekund o'tgach, ${minut} minut va ${sekund} sekund o'tdi.`);

//25. misol 
// let soniya = Math.floor(prompt('soniyani kiriting: '));
// let soat = Math.floor(soniya / 3600);
// let sekund = Math.floor(soniya % 3600);
// console.log(`Kun boshidan ${soniya} sekund o'tgach, ${soat} soat va ${sekund} sekund o'tdi.`);