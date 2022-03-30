const keyword = document.getElementById("keyword");

const keyWordsArray = ['App Developer', 'Competitive Programmer', 'Game Developer'];
var keyWordsIndex = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function randomString(len, charSet) {
    var randomString = '';
    for (var i = 0; i < len; i++) {
        var randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz, randomPoz + 1);
    }
    return randomString;
}

async function changeKeyword() {
    let keyWordSize = keyWordsArray[keyWordsIndex].length;
    for (let i = 0; i <= keyWordSize; i++) {
        let tempKeyword = keyWordsArray[keyWordsIndex].substring(i, 0) + randomString(keyWordSize - i, 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()_+-=[]{}|;:\'",.<>/?`~');
        keyword.innerHTML = tempKeyword;
        await sleep(125);
    }
    keyWordsIndex = (keyWordsIndex + 1) % keyWordsArray.length;
    await sleep(1000);
    changeKeyword();
}
changeKeyword();
