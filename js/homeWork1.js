//1)  'number' + 3 + 3
var result = 'number' + 3 + 3; //змінній присвоюється значення рівне виразу, де операція виконується зліва направо, тобто є лівоасоціативна, так як перше значення типу string, то всі операнди з.єднуються в один рядок, в цьому випадку + означає конкатенацію
console.log(result); //відповідь: змінна result отримує значення типу string: number33

//2)  null + 3
var result = null + 3;//додавання нал до числа, null - не стрігн, тому js приводить до числа
console.log(result);//відповідь 3 (0+3=3) 

//3)  5 && "qwerty"
var result = 5 && "qwerty"; //оператор порівняння, 5 - намбер = тру, стрінг = теж тру
    console.log(result); // перший вираз тру, другий вираз тру - ми дійшли до кінця - повертаємо останній

//4)  +'40' + +'2' + "hillel";
var result = +'40' + +'2' + "VOSTOK"; //лівоасоціативна операція, приведення до числа 40 + привелення до числа 2 : звичайне додавання, + рядок, тоді буде конкатенація
    console.log(result); //42VOSTOK

//5)  '10' - 5 === 6;
var result = '10' - 5 === 6; //зілва різні типи приводяться до числа і виконується дія віднімання 10-5=5, 5 строго рівне 6? - ні
    console.log(result); // фолс

//6)  true + false
var result = true + false // булеві значення перетворюються в числові, звичайне додавання
    console.log(result); //відповідь: 1+0 = 1

//7)  '4px' - 3
var result = '4px' - 3; // відмінання від рядка числа - нот а намбер, - примушує операнди ставати числами
    console.log(result); //Nan

//8)  '4' - 3
var result = '4' - 3; //операція відмінання, лівоасоціативна, стрінгове значення перетворюється на числове
    console.log(result); //відповідь: 4-3=1

//9)  '6' + 3 ** 0;
var result = '6' + 3 ** 0;//операція правоасоціативна, виконується з права на ліво 
    console.log(result); //1)3 в степіні 0 = 1, 2) стрінгове значення не переводиться в числове, а з.єднується з 1, тобто відбувається конкатенація = 61

//10)  12 / '6'
var result = 12 / '6'; //звичайне ділення, стрінга перетворюється на числове
    console.log(result); //12/6=2

//11)  '10' + (5 === 6);
var result= '10' + (5 === 6); //правоасоціативна, спочатку виконується те що в дужках: строге порівняння 5 строго дорівнює 6? - ні, фолс, рядок + фолс - конкатинація
    console.log(result); //10false

//12)  null == ''
var result = null == ''; //не строга рівність, 
    console.log(result); //нал  рівний порожньому рядку? - ні фолс

//13)  3 ** (9 / 3);
var result13 = 3 ** (9 / 3); //правоасоціативна операція, спочатку обчислюється те, шо в дужках
    console.log(result13); //1) 9/3=3, 2)3 в степені 3=27

//14)  !!'false' == !!'true'
var result = !!'false' == !!'true'; // після!! - значення - не порожня стрінга, тому його булеве значенн - тру
    console.log(result);//! (!true)== !(!true), next !false==!false, next true==true so true

//15)  0 || '0' && 1
var result = 0 || '0' && 1; // спочатку виконуємо І ('0' && 1), потім АБО: рядок '0'- тру І число теж тру, тому повертаємо остання зтрушне значення = 1, далі вираз стає таким  (0 || 1) : 0-фолс АБО 1-тру, і повертає занчення тру: 1   
console.log(result); //

//16)  (+null == false) < 1;
var result = (+null == false) < 1;// (0 рівне фолс)? так (до чого приводити до числа чи до булевого?) - тру, тру менше за 1, ні
    console.log(result);

//17)  false && true || true
var result = false && true || true;// false && true - false (операнди не обидва тру), false || true - true (є один тру - повертає тру)
    console.log(result);

//18)  false && (false || true);
var result = false && (false || true); // 1) (false || true) - буде тру, бо є хочаб один операнд тру, 2) false && true - буде фолс, бо перший операнд уже фолс
    console.log(result); //false

//19)  (+null == false) < 1 ** 5;
var result = (+null == false) < 1 ** 5;// (null приведемо до числа 0, 0 нестрого рівне фолс (фолс також приводиться до числа = 0? - так, тру), 1 в степені 5 = 1, тру менше 1? - ні, фолс
    console.log(result);

//для практики ще

    const age = 25;
const isMember = true;

// Використовуйте && для перевірки, чи людина може отримати знижку.
if (age > 18 && isMember) {
  console.log("Вам доступна знижка!");
} else {
  console.log("Знижка недоступна.");
}

console.log('20' - 10 === 10); // строга рівність, з ліва стрінга приводиться до числа - число, буде 10, 10 строго рівний 10 - так, тру
console.log('30' + 5 === '305'); // стрінга + число буде конкатинація - 305 в стрінгі, '305' строго рівне '305'
console.log(5 == '5' && 5 === '5'); // потрібно визначити які булеву значення по одибва боки від І: зліва: 5 рівне '5' (не строга рівність, тому все зводиться до числового значення, отже вираз тру) зправа вираз зі строгою рівністю, а отже типи теж важливі, вони різні отже фолс, тру І фолс - фолс

console.log('10px' - 2); // віднімання числа від рядка - НаН
console.log(parseInt('10px') + 2); // парсить рядок і  зчитує число з рядка зліва направо 10, 10 +2 =12
console.log('abc' - 5); // нот е намбер
console.log(isNaN('10' - 5)); // чи є значення НаН (10-5) віднімання примушує ставати числами, тоді 5 , 5 - це НаН - ні, фолс

console.log(null == undefined); // тру
console.log(null == 0); // нал рівний 0 - ні, фолс, нал не приводиться до числа
console.log('' == false); // порожня строка прирівнюється до фолс, тому тру
console.log(null === undefined); // 

console.log(!!'0' == !!'1'); // ?
console.log(!!'' == !!' '); // не (не порожня строка) = не (не фолс)= не (тру)= фолс - зліва, зправа: не (не строка з пробілом)=не (не тру)= не (фолс)=тру, фолс рівний тру? - фолс
console.log('false' == false); // приводяться до одного типу - числового,  NaN == 0:
console.log(!!null == !!undefined); // ?

console.log(null || 0 && 'test'); // ?
console.log('' && 42 || 'default'); // ?
console.log(1 || 'string' && 0); // ?
console.log('truthy' && 'also truthy' || false); // ?

console.log(+undefined == false); // ?
console.log(null < 1); // ?
console.log(true == 1); // ?
console.log(false === 0); // ?

console.log(true || false && false); // ?
console.log(false && true || false); // ?
console.log(false || (true && false)); // ?
console.log((true || false) && true); // ?

console.log(false && true || true && false); // ?
console.log(true || false && true || false); // ?
console.log((false || true) && (true || false)); // ?

console.log((+undefined == false) < 2 ** 3); // ?
console.log((+true == 1) < 3 ** 2); // ?
console.log(2 ** 3 < 4 ** 2); // ?
console.log(3 ** 0 == 1); // ?

console.log((+null == false) >= 0 ** 5); // ?
console.log((false == 0) < (1 ** 0)); // ?