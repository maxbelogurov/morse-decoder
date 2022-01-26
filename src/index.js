const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    //разделяем строку на массив, каждое слово отдельно
    let exprArr = expr.split(['**********']);
    // записываем каждое слово как объект массива
    let i = 0;
    let wordsArr = [];
    for (let key in exprArr) {
    while (i < exprArr[key].length / 10) {
        wordsArr.push(exprArr[key].substring([(0 + i) * 10 ], (i + 1) * 10));
        i++;
    }
    i = 0;
    if (key < exprArr.length - 1) {
        wordsArr.push('');
    }
    }
    i = 0;
    // кодируем 10 и 11 в '.' и '-'
    let str = '';
    let dotsArr = [];
    for (let key in wordsArr) {
    if (wordsArr[key]) {  
        while (i < wordsArr[key].length / 2) {
        if (wordsArr[key].substring(i * 2, (i + 1) * 2) === '10') {
            str += '.';
            i++;
        } else if (wordsArr[key].substring(i * 2, (i + 1) * 2) === '11') {
            str += '-';
            i++;
        } else {
            i++;
        }
        }
        dotsArr[key] = str;
        str = '';
        i = 0;
    } else {
        dotsArr[key] = '';
    }
    }
    //декодируем морзе в слова
    let decoderStr = '';
    while (i < dotsArr.length) {
    for (let key in MORSE_TABLE) {
        if (dotsArr[i] === key) {
        decoderStr += MORSE_TABLE[key];
        } else if (dotsArr[i] === '') {
        decoderStr += ' ';
        break;
        } 
    }
    i++;
    }
    return decoderStr;
}

module.exports = {
    decode
}