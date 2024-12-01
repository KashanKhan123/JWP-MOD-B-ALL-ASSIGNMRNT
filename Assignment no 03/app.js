
let a =5
let exp1 =((4+5)&& "abc" || false + "test")*(a-- || --a) || (false &&(++a +1))*"end";
// Output = NaN
// console.log(exp1);


// Question no 2
let exp2 =10*("foo"&& 5 + (++a)||"bar")&&(false + "test")|| 0&& true;
// Output = "falsetest"
// console.log(exp2);


// Question no 3
let exp3 =3+(a-- || "start")* 4 &&(--a + "value")*(1+2)+"result";
//  Output = NaN 
// console.log(exp3);

// Question no 4
let exp4 ="hello"*(++a + true) || (2 +3 * "abc")*(0+1)+"xyz" && 0;
//Output = 0 
// console.log(exp4);
   


// Questipn no 5
let exp5 =(true ||(0+1)* "test"&&4) || (false && 3+"value")*a-- + 2;
// Output = true
// console.log(exp5);


// Question no 6
let exp6 = ++a +"abc" && (4*2)+ 3 || (0+1) && (3*"hello")|| a--;
// Output = 11
// console.log(exp6);


// Question no 7
let exp7 = ("foo" + 5) * (++a + true) || 2 * 3 + (true + 2) || "result";
// Output = 9
// console.log(exp7);


// Question no 8
let exp8 = (0 + 1) && (true + 0) || (false + "test") * 4 && 3 + 2 || "value";
// Output = 1
// console.log(exp8);


// Question no 9
let exp9 = 3 * "abc" + (true + 1) || (++a + "test") && (3 + "result") || null;
// Output = "3result"
// console.log(exp9);


// Question no 10
let exp10 = (++a + false) && "start" || 0 + 1 && "value" || 5 * "end" && a++;
// Output = "start"
// console.log(exp10);



// Question no 11
let exp11 = (false && "hello") + (a++ || 3 + "test") * 4 || 5 * "abc" && 0;
// Output = 28
// console.log(exp11);




// Question no 12
let exp12 = "hello" * (true + 0) + 2 || (false + 1) * 3 && "result" || 4 + "test";
// Output = "Result"
// console.log(exp12);



// Question no 13
let exp13 = 5 * (a++ || false) + 2 && (false + "test") || 3 * "end" && 4;
// Output = "falsetest"
// console.log(exp13);



// Question no 14
let exp14 = (false + "abc") * 2 || (--a + 1) * "start" + 3 && 4 || "end";
// Output = "end"
// console.log(exp14);



// Question no 15
let exp15 = (0 + "foo") * 3 + (true && "result") || "start" + (++a + 1) * 4;
// Output = "NaNresult"
// console.log(exp15);



// Question no 16
let exp16 = 2 * "end" || (false && true) || "start" + (--a + 2) * 5 && null;
// Output = "null"
// console.log(exp16);



// Question no 17
let exp17 = 3 + 2 * ("test" + a--) && (false + 3) * 5 || 0 + "value" && 4;
// Output = 4
// console.log(exp17);



// Question no 18
let exp18 = "start" && (false || 2 * "end") || (++a + 1) * 3 + "result" && 0;
// Output = 0
// console.log(exp18);


// Question no 19
let exp19 = ((5 + 1) && "foo") || (++a + 2) * (false + 3) + "test" && 7;
// Output = "foo"
// console.log(exp19);



// Question no 20
let exp20 = 2 * 3 + "hello" && (false + ++a) * "result" || "end" + 5 || 0;
// Output = "end5"
// console.log(exp20);



// Question no 21
let exp21 = 5 * (true + ++a) && ("test" + false) || 7 * (true + 2) + "value";
// Output = "testfalse"
// console.log(exp21);



// Question no 22
let exp22 = "foo" + 4 && (++a + 1) * "start" || 5 + 6 * (false + true) && "test";
// Output = "test"
// console.log(exp21);



// Question no 23
let exp23 = (false && 2) || (a++ + 1) * "end" && "start" || 4 * 5 && "result";
// Output = "start"
// console.log(exp23);



// Question no 24
let exp24 = 3 + 2 * "test" || (false + a--) * "hello" && "world" + 1 || 2;
// Output = 2
// console.log(exp24);



// Question no 25
let exp25 = (3 + 4) * (false || a--) && 5 || "start" + 1 + "test" && 0;
// Output = 5
// console.log(exp25);



// Question no 26
let exp26 = "hello" && 3 * 2 + (a++ + 1) || (false + true) * "result" + "end";
// Output = 13
// console.log(exp26);



// Question no 27
let exp27 = 3 * "test" + (true + 2) && (false || "value") || "start" + a++;
// Output = "start7"
// console.log(exp27);



// Question no 28
let exp28 = (false + 1) * "hello" || 3 + (a-- && 5) * "result" || "world";
// Output = "world"
// console.log(exp28);



// Question no 29
let exp29 = "start" + 2 * (true || 1) && (false || "value") * 5 + "result";
// Output = "Nanresult"
// console.log(exp29);



// Question no 30
let exp30 = (true + 3) * "test" || 1 * 5 && (false + "value") + "end" || a--;
// Output = "falsevalueend"
// console.log(exp30);



// Question no 31
let exp31 = 3 + "end" || 2 * "test" && (++a + true) || "start" + 1;
// Output = "3end"
// console.log(exp31);



// Question no 32
let exp32 = (0 + 3) * (true + false) || 5 * "hello" + 2 && (false + "test");
// Output = 3
// console.log(exp32);



// Question no 33
let exp33 = 2 + 3 && ("end" + a++) || (false + "test") * 4 && 5;
// Output = "end6"
// console.log(exp33);



// Question no 34
let exp34 = "hello" + 4 * (false + a--) || 3 && "start" + 1 || (true + "test");
// Output = "hello28"
// console.log(exp34);



// Question no 35
let exp35 = "start" && (a-- || "test") * 4 + 5 && (false + "end") || 2;
// Output = "falseend"
// console.log(exp35);



// Question no 36
let exp36 = 1 + "value" && (++a + 2) || (3 + "result") * true && 4;
// Output = 8
// console.log(exp36);



// Question no 37
let exp37 = "hello" && 2 + "test" || (++a + 3) && (true + "value") + 1;
// Output = "2test"
// console.log(exp37);



// Question no 38
let exp38 = 5 * (a-- || "test") && 6 * "result" || 2 + "end";
// Output = 2end
// console.log(exp38);



// Question no 39
let exp39 = "start" && (false + 1) * 2 || 3 + 4 * "hello" + 5 && 0;
// Output = 2
// console.log(exp39);



// Question no 40
let exp40 = (false || "test") * 5 || 6 + (a-- && "result") * 4;
// Output = NaN
// console.log(exp40);



// Question no 41
let exp41 = "start" && (3 + 2) * "test" + 5 || 4 * (false + 1) && "hello";
// Output = "hello"
// console.log(exp41);


// Question no 42
let exp42 = 1 + 2 * "end" || (false + 3) && "result" * 4 + a--;
// Output = NaN
// console.log(exp42);




// Question no 43
let exp43 = (false && a--) || 4 * (3 + 2) && "start" + 5;
// Output = "start5"
// console.log(exp43);



// Question no 44
let exp44 = 3 + 2 * (true + 5) && "value" + 1 || (++a + 2) + "test";
// Output = "value1"
// console.log(exp44);



// Question no 45
let exp45 = (false || 1) + "test" && 5 + (3 * a--) || "end" + 2;
// Output = "20"
// console.log(exp45);



// Question no 46
let exp46 = (2 * a-- + 4) && "test" || 3 + "hello" && (false + 1) * 5;
// Output = "test"
// console.log(exp46);



// Question no 47
let exp47 = 0 + "result" && (3 + 1) * 2 || (false + a--) * "end";
// Output = 0
// console.log(exp47);



// Question no 48
let exp48 = (false || 1) * "test" && 4 || (true + 2) * "hello" + a--;
// Output = 
// console.log(exp48);



// Question no 49
let exp49 = (2 * 3) + "result" && 4 * (a-- + 1) || "start" + 2 + "end";
// Output = 8
// console.log(exp49);



// Question no 50
let exp50 = 32 && true - ++a && " " || "true";  // for a = 5
// Output = ""
// console.log(exp50);



// Question no 51
let exp51 = (5 + 2) * (a-- + 1) || "start" + (++a + "end") * 3;
// Output = 49
// console.log(exp51);



// Question no 52
let exp52 = (++a && 3) * "test" || 4 + "start" * (a-- + "result");
// Output = NaN
// console.log(exp52);



// Question no 53
let exp53 = 3 + "value" * (++a + 1) || (a-- && "start") + "end";
// Output = "Startend"
// console.log(exp53);


// Question no 54
let exp54 = (a-- + 2) * "result" || (false && 5) * "test" + 4;
// Output = "NaN"
// console.log(exp54);



// Question no 55
let exp55 = "start" + 5 * (a-- + "test") || (false + 2) * "value";
// Output = "StartNaN"
// console.log(exp55);



// Question no 56
let exp56 = 4 * (a-- + 1) + "test" || (++a + 3) * "start" + 5;
// Output = "16test"
// console.log(exp56);




// Question no 57
let exp57 = (3 * "test" + 1) || (++a && a--) * "result" || "value";
// Output = "result"
// console.log(exp57);



// Question no 58
let exp58 = (a-- + "start") * "result" || (false + 2) + "end" + 3;
// Output = "2end3"
// console.log(exp58);


// Question no 59
let exp59 = 5 * (a-- + 3) * "test" || (false && "start") + 2;
// Output = "20test"
// console.log(exp59);



// Question no 60
let exp60 = (a-- + "value") * "test" + 4 || (false + 2) * "end";
// Output = "2end"
// console.log(exp60);



// Question no 61
let exp61 = 3 + (++a + "result") || (a-- + 2) * "test" + 5;
// Output = "36result"
// console.log(exp61);


// Question no 62
let exp62 = "start" + (a-- + "test") * 3 || (false && 4) * "end" + 5;

// Output = "start5test5test5test"
// console.log(exp62);

// Question no 63
let exp63 = (++a + 2) * "test" || "value" + (a-- + 3) * "result";



// Question no 64
let exp64 = 5 * "end" + (a-- + 1) * "test" || "start" + (false && "result");



// Question no 65
let exp65 = "value" + 3 * (a-- + "test") || (false + 1) * "end";



// Question no 66
let exp66 = (++a + "test") * 2 || (a-- + 1) * "start" + "result";



// Question no 67
let exp67 = "start" + (a-- + 3) * "end" || (++a + "test") * 5;



// Question no 68
let exp68 = 2 * (a-- + 1) + "result" || (false && "start") * 3;



// Question no 69
let exp69 = 4 + (a-- + "test") * 5 || (false + 2) * "start";



// Question no 70
let exp70 = (a-- + 2) * "result" || (false && "end") + 3;



// Question no 71
let exp71 = "test" + 2 * (a-- + 3) || (false && "start") + 4;



// Question no 72
let exp72 = 3 * (a-- + "value") || (false + 2) * "test";



// Question no 73
let exp73 = (a-- + "test") * 4 || (false + 1) * "result" + "start";



// Question no 74
let exp74 = (++a + 5) * "end" || (a-- + 2) * "result" + "start";



// Question no 75
let exp75 = (3 * "test") + (a-- + "start") || (false + 1) * "result";