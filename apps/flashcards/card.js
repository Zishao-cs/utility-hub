// 存储单词和定义的数组 (Data Array)
const wordList = [
    { q: "What is HTML?", a: "HyperText Markup Language - The skeleton of the web." },
    { q: "What is CSS?", a: "Cascading Style Sheets - The styling and layout of the web." },
    { q: "What is JavaScript?", a: "A programming language that makes websites interactive." },
    { q: "What is a Variable?", a: "A container for storing data values." }
];

let currentIndex = 0;
const card = document.getElementById('cardElement');
const frontText = document.getElementById('frontText');
const backText = document.getElementById('backText');

// 翻转卡片
function flipCard() {
    card.classList.toggle('is-flipped');
}

// 切换到下一张
function nextCard() {
    // 如果卡片是翻开的状态，先翻回来
    card.classList.remove('is-flipped');
    
    // 延迟一会等翻转动画结束再换文字
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % wordList.length;
        frontText.innerText = wordList[currentIndex].q;
        backText.innerText = wordList[currentIndex].a;
    }, 300);
}