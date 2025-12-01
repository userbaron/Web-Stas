const input = "   Привет, меня зовут Иван! Мне 25 лет. Я люблю JavaScript.   ";

let inp = input;
inp = input.trim().toLowerCase();

console.log(inp.length);
console.log(inp[0]);
console.log(inp[inp.length - 1]);
let cnt = 0;
for(let i = 0; i < inp.length; i++){
    if (inp[i] == "а"){
        cnt++;
    }
}
console.log(cnt);
let inp2 = inp.split(' ');
let ma = 0;
for(let i = 0; i < inp2.length; i++){
    if (inp2[i].length > ma){
        ma = i;
    }
}
console.log(inp2[ma]);
console.log(`Слов в тексте: ${inp2.length}. Самое длинное слово: ${inp2[ma]}.`)
