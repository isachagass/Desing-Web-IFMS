const morse = [
  ["A", ".-"],
  ["B", "-..."],
  ["C", "-.-."],
  ["D", "-.."],
  ["E", "."],
  ["F", "..-."],
  ["G", "--."],
  ["H", "...."],
  ["I", ".."],
  ["J", ".---"],
  ["K", "-.-"],
  ["L", ".-.."],
  ["M", "--"],
  ["N", "-."],
  ["O", "---"],
  ["P", ".--."],
  ["Q", "--.-"],
  ["R", ".-."],
  ["S", "..."],
  ["T", "-"],
  ["U", "..-"],
  ["V", "...-"],
  ["W", ".--"],
  ["X", "-..-"],
  ["Y", "-.--"],
  ["Z", "--.."],
  ["0", "-----"],
  ["1", ".----"],
  ["2", "..---"],
  ["3", "...--"],
  ["4", "....-"],
  ["5", "....."],
  ["6", "-...."],
  ["7", "--..."],
  ["8", "---.."],
  ["9", "----."],
  [".", ".-.-.-"],
  [",", "--..--"],
  ["?", "..--.."],
  ["!", "-.-.--"],
  ["'", ".----."],
  ["/", "-..-."],
  ["(", "-.--."],
  [")", "-.--.-"],
  ["&", ".-..."],
  [":", "---..."],
  [";", "-.-.-."],
  ["=", "-...-"],
  ["+", ".-.-."],
  ["-", "-....-"],
  ["_", "..--.-"],
  ['"', ".-..-."],
  ["$", "...-..-"],
  ["@", ".--.-."],
  [" ", "/"]
];

const text_portuguese = document.querySelector("#texto")
const morse_box = document.querySelector("#traducao")
const bt_traduzir = document.querySelector("#bt-tradutor")

function traduzir(){
    texto = text_portuguese.value
    texto = texto.toUpperCase();
    caracteres = texto.split("")
    traducao = []

    caracteres.forEach(element => {
        console.log(element)
        for (let element_morse = 0; element_morse < morse.length; element_morse++){
            
            if(element == morse[element_morse][0]){
                traducao.push(morse[element_morse][1]);
                break;
            }
        }
    });
    morse_box.value = traducao.join(" ")
    console.log(traducao.join(" "))
}

bt_traduzir.addEventListener('click', traduzir)
text_portuguese.addEventListener('input', traduzir)