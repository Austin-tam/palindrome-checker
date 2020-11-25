document.getElementById("palindrome-input").addEventListener("input", palindrome);

function palindrome() {
  let regex = /[^a-z0-9]/gi
  let str = document.getElementById("palindrome-input").value;

  if (str.length === 1){
    document.getElementById("palindrome-label").innerText = "\"" + str + "\" is a palindrome.";
    return;
  }

  if (str.length === 0){
    document.getElementById("palindrome-label").innerText = "Check your palindrome (Non-alphanumeric characters will be ignored)"
    return;
  }

  str = str.replaceAll(regex, "").toLowerCase();

  for (let x = 0; x < parseInt(str.length/2); x++) {
    if (str[x] !== str[str.length - 1 - x]) {
      document.getElementById("palindrome-label").innerText = "\"" + document.getElementById("palindrome-input").value + "\" is not a palindrome.";
      return;
    }
  }

  document.getElementById("palindrome-label").innerText = "\"" + document.getElementById("palindrome-input").value + "\" is a palindrome.";
};
