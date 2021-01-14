const secretBox = document.getElementById('result-box');

export function countsAsYes(word) {
    return word.charAt(0).toUpperCase() === 'Y';
}

export function counterToPercentage(counterValue) {
    const correctPercentage = (counterValue / 3) * 100;
    return correctPercentage.toFixed(0);
}

export function displayResultString(firstName, lastName, roundedPercent, correctCounter) {
    const results = [
        `Come on ${firstName} ${lastName}, you gotta learn more about Great Pyrenese, you got ${roundedPercent}% right! `,
        `You can do better than that ${firstName} ${lastName}, you only got ${roundedPercent}% right!`,
        `That was pretty good ${firstName} ${lastName}, but I think you can do better than ${roundedPercent}% correct!`,
        `Excellent work ${firstName} ${lastName}, you got ${roundedPercent}% right! You are an expert! `
    ];
    secretBox.textContent = results[correctCounter];
}

function styleResultString(color, fontWeight, fontSize) {
    secretBox.style.color = color;
    secretBox.style.fontWeight = fontWeight;
    secretBox.style.fontSize = fontSize;
}

export function styleSelector(correctCounter) {
    switch (correctCounter){
        case 0:
            styleResultString('black', '500', '1rem');
            break;
        case 1:
            styleResultString('#003F91', '600', '1rem');
            break;
        case 2:
            styleResultString('orange', '600', '1rem');
            break;
        case 3:
            styleResultString('#5DA9E9', '600', '1.8rem');
            break;
    }
}
