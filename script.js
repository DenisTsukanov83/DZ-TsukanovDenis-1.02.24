//task-1
document.querySelector('.task-1-btn').addEventListener('click', () => {
    const string1 = document.querySelector('.task-1-text').textContent;
    const a = prompt('Введите букву для поиска');
    alert(string1.match(new RegExp(`\\b${a}\\w{1,}\\b`, 'gi')));
});

//task-2
document.querySelector('.task-2-btn').addEventListener('click', () => {
    const string2 = prompt('Введите строку');
    if(string2.match(/^(0?[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(\d\d)$/)) {
        alert('Эта строка дата в формате "дд-мм-гг"');
    } else {
        alert('Эта строка НЕ в формате "дд-мм-гг"');
    }
});

//task-3
document.querySelector('.task-3-btn').addEventListener('click', () => {
    const string3 = prompt('Введите строку');
    alert(string3.match(/(?<=\s|^)[а-я]+(?=\s|$)/gi));
});

//task-4
document.querySelector('.task-4-btn').addEventListener('click', () => {
    const string4 = prompt('Введите строку');
    if(string4.match(/\D/)) {
        alert('Эта строка содержит НЕ только цифры');
    } else {
        alert('Эта строка содержит только цифры');
        
    }
});

//task-5
document.querySelector('.task-5-btn').addEventListener('click', () => {
    const string = prompt('Введите слово'),
        string2 = string.replaceAll(' ', '')
    let regexp = /[a-zа-я]/iy, start, end, success = true;

    for(let i = 0; i < string2.length; i++) {
        regexp.lastIndex = i;
        start = regexp.exec(string2);
        regexp.lastIndex = string2.length - 1 - i;
        end = regexp.exec(string2)
        if(start[0].toLocaleUpperCase() != end[0].toLocaleUpperCase()) success = false;
    }
    success ? alert('Это полендром') : alert('Это НЕ полендром');
});

//task-6
document.querySelector('.task-6-btn').addEventListener('click', () => {
    const string = document.querySelector('.task-6-text').textContent;
    const a = prompt('Введите букву для поиска');
    alert(string.match(new RegExp(`\\b\\w{1,}${a}\\b`, 'gi')));
});

//task-7
document.querySelector('.task-7-btn').addEventListener('click', () => {
    const string = prompt('Введите строку');
    string.match(/[a-zа-я]/g) ? alert('Здесь есть нижний регистр') : alert('Здесь только верхний регистр');
});