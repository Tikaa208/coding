function checkPassword() {
  const password = document.getElementById('passwordInput').value;
  if (password === 'orang spesial') {
      window.location.href = 'lyrics.html';
  } else {
      alert('Incorrect password. Please try again.');
  }
}

const lyrics = `Kau begitu sempurna,      
dimata ku kau begitu indah      
Kau membuat diri ku     
akan s'lalu memuja mu       
Disetiap langkah ku        
ku 'kan  s'lalu memikirkan diri mu                    
Tak bisa ku bayangkan
hidup ku tanpa cinta mu
Janganlah kau tinggalkan diri ku
Tak 'kan mampu menghadapi semua
Hanya bersama mu ku akan bisa
Kau adalah darah ku
Kau adalah jantung ku
Kau adalah hidup ku, lengkapi diri ku
Oh sayangku kau begitu
Sempurnaaa
sempurnaaaaa`;

const lyricsTimings = [10, 13, 16, 17, 23, 26, 27, 28, 35, 37, 40, 43, 47, 50, 53, 59, 63];

let currentLine = 0;
let currentChar = 0;
const lyricsElement = document.getElementById('lyrics-container');
const audioElement = document.getElementById('audio');
const romanticMessage = document.getElementById('romantic-message');

function typeLyrics() {
  if (currentLine < lyrics.split('\n').length) {
      const currentLineText = lyrics.split('\n')[currentLine];
      
      if (currentChar < currentLineText.length) {
          lyricsElement.lastElementChild.textContent += currentLineText.charAt(currentChar);
          currentChar++;
          setTimeout(typeLyrics, 50); // Adjust typing speed here
      } else {
          currentLine++;
          currentChar = 0;
          if (currentLine < lyrics.split('\n').length) {
              lyricsElement.innerHTML += '<p></p>';
              setTimeout(typeLyrics, lyricsTimings[currentLine] * 1000 - lyricsTimings[currentLine - 1] * 1000);
          } else {
              romanticMessage.classList.remove('hidden');
          }
      }
  }
}

window.onload = function() {
  if (document.getElementById('lyrics')) {
      lyricsElement.innerHTML = '<p></p>';
      audioElement.play();
      setTimeout(typeLyrics, lyricsTimings[0] * 1000);
  }
};
// Add this to your script.js file

const textContainer = document.getElementById('text-container');
const typedTextElement = document.getElementById('typed-text');
const textToType = 'Stay strong, stay happy in your daily life even though you have many problems, stay strong, you are great, you are strong, don\'t hurt yourself, you are valuable, I love you.';

let charIndex = 0;

function typeText() {
  if (charIndex < textToType.length) {
    typedTextElement.textContent += textToType[charIndex];
    charIndex++;
    setTimeout(typeText, 100); // 50ms delay between each character
  }
}

typeText();