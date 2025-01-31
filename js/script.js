"use strict"
// про use strict поговоримо трохи пізніше

// коментарі, почнемо з них! Це однорядковий коментар (для пояснень, видаляти код, без видаляння)

/*
   Це багаторядковий коментар.
   Він може розтягуватися на декілька рядків.
   Тут можна додавати більше пояснень.
 */


//Змінна - це іменована область пам'яті, ім'я якої можна використовувати для здійснення доступу до даних. Дані знаходяться у змінній.



/* 
var message; //Об'ява змінної "age", оголосили, але вона пока порожня
message = 'Hello world'; //Ініціалізація змінної значенням "Hello world", змінній присвоюється значення
console.log(message) // Вивід зміної в консоль  
*/



// Найчастіше використовують так
//var message = "Hello world"; //  Об'ява та ініціалізація змінної

// А ще можна ось так, але так не роблять, бо це важко сприймати.Цебуде працювати, але не зручно читати
//var a = 5, b = "qwerty", c = 1.2;

//І навіть можна зустріти таке. Зміну НЕ оголошено, використали змінну, але не повідомили про неї. 
//Але ось тут і поговримо про use strict - команда строго сприймати все що написано
/* message = "Hello world";
console.log(message);
 */

// Значення змінної можна змінити
/* var message = "Hillel QA pro";
console.log(message);
message = "JavaScript";
console.log(message); */

/**
 Декілька важливих правил при виборі імені змінної:
 - Імена змінних повинні бути описовими: Вибирайте імена, які відображають призначення змінної. Читаючи ім'я змінної, інші розробники повинні зрозуміти, що саме вона зберігає.
 - Використовуйте зрозумілі слова: Використовуйте розумілі та логічні слова в іменах змінних. Наприклад, userName для зберігання імені користувача.
 - Уникайте скорочень: Уникайте скорочень та абревіатур, які можуть бути неочевидними для інших. Наприклад, використовуйте numberOfItems замість numItems.
 */

//var age = 18;

/**
 У імені змінної є декілька обмежень:
 - цифри на початку
 - пробіли в назві, дефіси
 - зарезервовані слова - this, return і так далі
 */

//var 1login='Вася'; - не можна
//var log-in='Вася'; - не можна
//var return='повернення'; // зарезервоване слово!

// А ось так вже можна.
/*var login='vasja';
var log_in='vasja';
var login123='vasja';
var $='дивна зміна'; - не раджу
var _='А чому ні?';
var імя='можливо навіть так, але це погана практика і використовуємо тільки англійську мову';
console.log(імя);*/

// Для створення імені змінної більше ніж одне слово використовувайте:
var newMessage; //camelCase, з маленької букви - змінна
var new_message; //snake_case

// Регістр має значення !
var login;
//Login='Вася'; // Помилка, Login та login різні зміні.

/**
 Константи - це змінні, значення яких не може бути змінено після їхньої ініціалізації.
 Іншими словами, коли ви визначаєте константу, ви призначаєте їй значення один раз,
 і після цього ви не можете змінити це значення протягом виконання програми.
 */

// Технічно константи це просто змінні, які ми домовляємося не змінювати, поки що!
/*var COLOR_RED = '#ff0000';
var COLOR_SILVER = '#c0c0c0';
var elementColor = COLOR_RED;
console.log(elementColor);*/


/**
 підняття" або "вспливання" (hoisting) змінних та функцій у JavaScript.
 Це важлива концепція, яка впливає на те, як інтерпретатор JavaScript обробляє оголошення змінних та функцій під час виконання коду.
 лише з вар*/

/* console.log(message); // Дуже цікаво, ніяких помилок.
var message = "QA pro"; */

// Новинки, які вже зовсім не новинки. Підняття на відмінно від var не відбувається
/* console.log(PI) //  Cannot access 'PI' before initialization
const PI = 3.14; // А ось вже нормальний спосіб створення константи
 */

/* console.log(name) //  Cannot access 'name' before initialization
let name = "Alex"; // Інший спосіб створення змінної. */

/**
 Типи даних
 - Number (Число): Відповідає числовим значенням, включаючи цілі числа та числа з плаваючою комою.
 - String (Рядок): Відповідає послідовностям символів (текстові дані), які можна представити у лапках (одинарних або подвійних).
 - Boolean (Булевий): Відповідає двом можливим значенням: true (істина) або false (хиба). Використовується для логічних операцій.
 - Object (Об'єкт): Відповідає складним даним, які можуть містити властивості та методи.
 Об'єкти є основними елементами ООП (об'єктно-орієнтованого програмування).
 - Null (Порожність): Вказує на відсутність значення або відсутність посилання на об'єкт.
 - Undefined (Не визначено): Відповідає змінним, які не були ініціалізовані та не мають значення.
 - Symbol (Символ): Введений у ECMAScript 6, символи представляють унікальні ідентифікатори та використовуються,
 зокрема, для властивостей об'єктів.
 - BigInt (Велике ціле число): Введений у ECMAScript 11, цей тип даних дозволяє працювати з цілими числами,
 які перевищують максимальні обмеження типу Number.
 */

// Number
/* var n=12; //Це number
var float=12.345; //І це також Number
var number = 0x2a; // шістнадцятирічна система
console.log(n);
console.log(float);
console.log(number) */

// Infinity - з метою виявлення недопустимих математичних операцій
/* var infinity = 10/0;
console.log(infinity) // Infinity
var negativeInfinity = -10/0;
console.log(negativeInfinity) // -Infinity */

//Nan. Значення Nan не дорівнює нічому, включаючи себе. Будь які операції з Nan повертають Nan
/* var nan = 0/0;
console.log(nan)
var nan2 = "qwerty" * 25;
console.log(nan2) */


// String

/* var str = "Ми вже так 100 разів робили";
console.log(str);
var str2 = 'QA pro'; // Зверніть увагу, лапки одинарні, і це цілком собі законно та не має ніякої різниці між ""
console.log(str2); */


// Boolean. Цей тип даних має тільки два значення true/false/ Для умов, алгоритмів
/* var bool = true;
console.log(bool); */

// Object. Про цей тип даних буде ми поговоримо на наступних уроках.
//набір характеристик в фігурних дужках, властивості описуються: колюч: значення
/* var user = {
    name : "Alex",
    email: "qapro@gmail.com"
} */

// Undefined
/* var text; // За замовчуванням якщо змінна не ініціалізована, її значення Undefined
console.log(text)
var number = undefined // Самі можемо вказати
console.log(number); */

//Null

/* var empty = null;
console.log(empty) */

// Symbol. Новий тип, створений для унікальних ідентифікаторів в обєктах. Символи з однаковим імям не дорівнюють один одному.
// зберігаються в різних місцях, однакові значення, але різні місця, тому вони різні
/* var symbol = Symbol("Alex");
var symbol2 = Symbol("Alex");
console.log(symbol === symbol2) // Ми ще цього не вчили, пізніше розглянемо.
 */

//BigInt. Цей тип даних надає змогу створювати цілі числа більш ніж 2 в 53
/* var bigInt = BigInt(8888999999881124);
var bigInt2 = 8888999999881124n;
var num = 12n;
console.log(typeof bigInt2);
console.log(num + bigInt2) //Cannot mix BigInt and other types, use explicit conversions
 */

//Динамічна типізація - за межею добра і зла.
//одна й та змінна може бути будь-ким
//типізовані мови програмування - оголошуємо тип змінної явно

/* var guessWho = 3.14;
guessWho = 'А тепер тут строка';
guessWho = false; */


// А як нам дізнатися якого типу яка змінна ? На допомогу приходить Nan

/* console.log(typeof "Hello");
console.log(typeof 41);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof Symbol());
console.log({}); // Хто пропустив, це обьєкт, але без значень
console.log(typeof []); // А ось тут цікаво, це масив який ми ще не вчили але він також типу object
console.log(typeof BigInt(1));
console.log(typeof console.log); // Функція!!! Хоча функції це також обєкти, але для зручності зробили вивід function
console.log(typeof null); // Це офіційна помилка самої мови програмування.
 */

//Оператори***************************
/**
 У програмуванні оператор - це символ або ключове слово, яке вказує комп'ютеру виконати певну дію або операцію над даними.
 Оператори використовуються для маніпулювання значеннями змінних, виконання математичних операцій, порівняння значень,
 управління потоком виконання програми та багато іншого.
 Операнд - це термін, який використовується в програмуванні та математиці для позначення значень чи об'єктів, над якими виконується операція.
 У контексті операторів, які виконують різні дії, операнди є значеннями, до яких ці операції застосовуються.
 Тобто 4 + 3 оператор плюс(+) з лівим та правим операндами.
 */

// Унарний мінус
/* var number = 12;
number = -number;
console.log(number); */

// Бінарний мінус
/* var number = 7;
var number2 = 3;
var number3 = number - number2;
console.log(number3); */

// Арифметичні операції
/**
 - Додавання (+)
 - Віднімання (-)
 - Поділ (/)
 - Множення (*)
 - Залишок від поділу (%)
 - зведення в ступінь (**)
 - Інкремент (++)
 - Декремент (--)
 - Унарний плюс (+)
 - Унарний мінус (-)
 */

// Додавання (+)
/* var num = 5 + 4;
console.log(num) // Тут все просто */

// А що буде якщо я спробую додати не тільки числа
/* var result = true + 10; //намагається привести до типу намбер (1+10)
console.log(result) // І що ми отримаємо ?
var boolResult = true + false; // (1+0)
console.log(boolResult); */

//Або давайте спробуємо множення. Js завжди намагається привести все до числа.
/* var result = true * 5; //(1*5)
console.log(result) */

/* var result = "55" - 5; //(55-5)=50
console.log(result); */

// Але + не завжди вам просто додавання. Що трапиться якщо я спробую додати строку ? Конкатенація!
/* var result = "qwerty" + 25; //з.єднання двох рядків
console.log(result); */

/* var a = '11';
var b = 23;
var c = a + b;
console.log(c); // І що ми отримаємо ? */

/* var result = "QaProIsCool:" + true;
console.log(result) */

//можна використовувати конкатенацію, або зворотні лапки
/* var messageOwner = "Oleg";
var message = "Hello I'm message from " + messageOwner; // Ну тут все просто!
//console.log(message);
console.log(`Hello I'm message from ${messageOwner}`) */

//Побічний ефект: унарний '+' - завжди призводить до числа!
/* var a = '55';
console.log(typeof a);
console.log(typeof +a);//спрацює лише тут
console.log(typeof a); // сюрприз? */

/* var b = +true;
console.log(b) */

/* var c = +null;
console.log(c); */

/* var a = +("Hello" + 12);
console.log(a); */

// Ну і знов доречно згадати про Nan
/* var result = "Hello" * 5;
console.log(result) */

//Залишок від поділу (%)
/* console.log(12 % 6);
console.log(12 % 5);
console.log(4 % 3);
console.log(-4 % 3);
console.log(-6 % 2); // !!!! Дуже цікаво!)
console.log(NaN % 2); */

//Зведення в ступінь (**). Перед тим як розібратися у зведенні в ступінь, давайте розглянемо:
/**
 Правоасоціативні та лівоасоціативні оператори - це терміни,
 які використовуються для опису напрямку асоціації (групування) операторів з однаковим пріоритетом у виразах.
 Ці терміни особливо важливі при виразах з однаковими або різними операторами, які мають однаковий пріоритет.
 */

//Приклад лівоасоціативної операції
//var a = 5 + 6 + 7;

//Приклад правоасоціативної операції. Це одна з операцій присвоєння
/*var a = 5;
var b = 6;
var c = a = b; //a присвоєне б, а потім с
console.log(c) // ??? */

// Повернемося до зведення в ступінь
/* console.log(2 ** 3);
console.log(2 ** 3 ** 2); // Ось в такому випадку виконується правоасоціативна операція, спочату 3 в 2, в тоді 2 в 9 степені
console.log(-2 ** 2); // Так не підходить
console.log(-(2 ** 2));
console.log((-2) ** 2); */



//Інкремент/Декремент постфіксний - операція після того, як считати змінну
var a = 1;
console.log(a++); // виявили а і збільшили цого= 1, ,спочатку поверни 1
console.log(a); // вже збільшене на 1= 2, потім збільши на 1 = 2
var b = 2;
console.log(b--); //вивели і зменшили = 2 , спочатку поверни = 2
console.log(b) // вже зменшене = 1, потім зменши - 1

//Інкремент/Декремент префіксний - операція до того, як считати

var b=1;
console.log(++b); //виведеться вже збільшене =2, спочатку змінює
console.log(b); //і виводимо те що збільшили = 2, повертає змінене
var b = 2;
console.log(--b); //вивели зменшене = 1, зміни на 1 менше = 1
console.log(b) // 1, поверни нове = 1

let a = 5;
console.log(a++); //  поверни 5, зміни на 6
console.log(++a); //  збільши = 7 (бо з попереднього а-6), поверни збільшене 7
console.log(a--); //  поверни 7, поті зменши = 6
console.log(--a);//   зменши = 5 (бо останнє юуло 6), поверни 5

// Операції присвоювання
/**
 - Присвоєння
 - Присвоєння з додаванням
 - Присвоєння з відніманням
 - Присвоєння з множенням
 - Присвоєння з розподілом
 - Присвоэння по модулю
 */

// Присвоєння

/* var a = 5;  //правоасоціативна
var b = 10;
var c = b;
c = a = b; //а присвоїти значення б, тобі а =10, в тепер с присвоїти значення а, яке тепер =10, а отже с=10
console.log(c); */

//Присвоєння з додаванням
/* var number = 15; //оголосили зміенну
number +=10; // Це так само як number = number + 10; короткий запис
number = number +=10
console.log(number)

var result = true; //1
result +=true; //1+1
console.log(result) //2 */

//Присвоєння з відніманням
var number = 5;
number -=5;
console.log(number);

//Присвоєння з множенням
var number = 20;
number *= 2;
console.log(number);

//Присвоєння з розподілом
var number = 20;
number /= 2; // number = number/=2 = 20/ =2=10
console.log(number);

//Присвоэння по модулю
var number = 20;
number %= 2;
console.log(number);

// Операції порівняння
/**
 У JavaScript існують різноманітні оператори порівняння,
 які дозволяють порівнювати значення та здійснювати логічні порівняння між ними. Ось декілька основних операторів порівняння:
 - Оператор рівності (==)
 - Оператор нерівності (!=)
 - Оператор строгої рівності (===)
 - Оператор строгої нерівності (!==)
 - Оператор більше (>)
 - Оператор менше (<)
 - Оператор більше або рівно (>=)
 - Оператор менше або рівно (<=)
 
 Завжди приводяться до false
 - null
 - NaN
 - 0
 - '' пуста строка
 - undefined
 - 0n
 Все інше true!

 Js завжди намагається привести все до числа.
 */


//Оператор рівності (==) - Порівнює два значення на рівність (за значенням),
// і повертає true, якщо вони рівні, і false - якщо нерівні. Враховує автоматичне приведення типів.
/* console.log('2' == 1); // пробує привести до одного типу - числового, false
console.log('001'== 1); //true 1 рівне 1 (чи значення однакові?)
console.log(true == 1); //true
console.log(false == 1); //false
console.log('' == '0'); // А що буде тут ?, якби був 0, то було би тру, а так фолс не дорівнює 0
 */


// Оператор строгої рівності (===): порівнює два значення на рівність як за значенням, так і за типом даних.
// Повертає true, якщо значення рівні і мають однаковий тип, і false - якщо вони різні.
console.log(0 === false);//різні типи, не приводить, тому фолс
console.log('' === false); 
console.log('' === 0);

// Оператор нерівності (!=)  Порівнює два значення на нерівність, і повертає true, якщо вони не рівні, і false - якщо рівні.
// Враховує автоматичне приведення типів.
console.log(11 != 11); //чи відрізняється? - ні - фолс
console.log(1 != true) //
console.log('' != false)

// Оператор строгої нерівності (!==): Порівнює два значення на нерівність як за значенням, так і за типом даних.
// Повертає true, якщо значення різні або мають різний тип, і false - якщо вони рівні і мають однаковий тип.
console.log(21 !== '21'); //значення різні та моють різний тип? - так - тру
console.log(false !== 0);
console.log(23 !== 20);

//  Оператор більше (>), Оператор менше (<), Оператор більше або рівно (>=), Оператор менше або рівно (<=).
// Нічого не звичайного!
console.log(5 > 2);
console.log(false > true);
console.log(true > 0)

//Делікатна тема – порівняння рядків. (коди знаків)Пам.ятайте: машина працює з текстом через код!!!

console.log('a'>'b'); //порівнююються юнікоди, у б код більше ніж а
console.log('a'>'A'); // малі літери "більше" великих (ідуть після великих літер)
console.log('A'>'1'); // великі "більше" цифр
console.log('1' > '$'); // цифри "більше" спецсимволів

// Все набагато простіше, яка літера стоїть раніше у таблиці unicode, та і буде меншою, яка пізніше більшою.

//Порівняння рядків більше ніж з одного символу - як у телефонній книзі.

console.log('Ба'>'Аяяяяяяяяяя'); // На першій літері переможець
console.log('ваня'>'вася');
console.log('Привіт'>'Прив'); //І тільки якщо всі букви рівні - перемагає той, хто довший


//Дуже особливий випадок: null та undefined - в нестрогому порівняння рівні
var undef; //оголосили, не присвоїли - андефайнд
var n = null;
console.log(undef == null); //Просто так вирішили. undefined і null рівні один одному і НІ ЩО БІЛЬШЕ!
console.log(n == null);
console.log(undef == undefined);


//А тепер жесть. Наведемо ці значення до number
console.log('null as number: '+(+null) );
console.log('undefined as number: '+(+undefined) );

//Наслідки цієї начебто незначної деталі:
console.log('null > 0: '+(null>0) );
console.log('null < 0: '+(null<0) );
console.log('null == 0: '+(null==0) );
console.log('null >= 0: '+(null>=0) ); //!!!! Що ?!))

//С undefined схожа історія
console.log('undefined > 0: ' + (undefined > 0));
console.log('undefined < 0: ' + (undefined < 0));
console.log('undefined == 0: ' + (undefined == 0));
console.log('undefined >= 0: ' + (undefined >= 0)); // Але ось тут false


//І ще одна мила особливість: NaN не дорівнює взагалі нічого, навіть собі самому
var a = "Hello" * 3; //Дасть у результаті типовий NaN
console.log('a=' + a);
console.log('a === NaN? ' + (a === NaN));
console.log('a == NaN? ' + (a == NaN));
console.log('a > NaN ' + (a > NaN));
console.log('a < NaN ' + (a < NaN));

// Але як нам дізнатися, а чи не вийшов у нас NaN в результаті якоїсь операції?!
var a = "Hello" * 3;
console.log('are "a" equal NaN? ' + isNaN(a));

/**
 У JavaScript булеві оператори використовуються для логічних операцій над булевими значеннями (true або false).
 Ось деякі з основних булевих операторів в JavaScript:
 Логічний оператор "І" (AND):
 && - повертає true, якщо обидва операнди є true, інакше повертає false.
 Логічний оператор "АБО" (OR):
 || - повертає true, якщо хоча б один з операндів є true, інакше повертає false.
 Логічний оператор "НІ" (NOT):
 ! - інвертує булеве значення. Наприклад, !true поверне false, а !false поверне true.
 Все перетворюється на boolean. При цьому 0, '', null, undefined, NaN => все перетворюється на false
 Решта - true!!
 */

// У оператора "і" ("and") теж короткий цикл - обчислення припиняються, як тільки знаходимо ложа
/*var a = 9;
var b = 15;
var res = (a>b) && true;
console.log(res);*/

//Але якщо ми все ж таки дійшли до кінця - повертається останнє обчислене значення
/*var x;
var res = true && (x=5) && 'А рядок наводиться до true';
console.log(res);*/

//Короткий цикл перевірки "або" - виходимо, як тільки знайшли хоч один true
/*var x;
var n=null;
var res = false | n || x || 'Просто рядок' || (x = 5) | true;*/
//console.log(res); // Цікаво, що опиниться у цій змінній?
//console.log(x); //А тут?


// !
/*console.log(!true);
console.log(!false);
console.log(!'');
console.log(!0);
console.log(!null);
console.log(!undefined);*/

//Короткий спосіб перетворення до boolean:
/*var a = 'Не пустий рядок';
console.log(!!a); // Що ми тут отримаємо ?*/







