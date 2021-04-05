"use strict";
// 14. Циклы

let num = 50;        // While значит, что пока условие выполняется, мы будем совершать определённые действия.
while (num <= 55) {
    console.log(num);
    num++;
}


do {                  // Сначала заставить цикл что-нибудь сделать, а затем проверить условие, а если необходимо - и выйти из цикла
    console.log(num);
    num++;
}
while(num <= 55);


for (let i = 1; i < 8; i++) {   // For - cамый частоиспользующийся цикл. Популярный, ибо его можно очень подробно настроить.
    if(i === 6) {
        break;  // прервать цикл (закончить выполнение)
    }
    console.log(i);
}

for (let i = 1; i < 8; i++) {
    if(i === 6) {
        continue;  // пропустить один пункт и продолжить дальше (в данном случае - цифру 6)
    }
    console.log(i);
}