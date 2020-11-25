document.getElementById("palindrome-input").addEventListener("input", palindrome);

function palindrome() {
  let regex = /[^a-z0-9]/gi
  let str = document.getElementById("palindrome-input").value;

  if (str.length === 1){
    document.getElementById("palindrome-label").innerText = "\"" + str + "\" is a palindrome.";
    document.getElementById("main").style.backgroundColor = "#09ad00";
    return;
  }

  if (str.length === 0){
    document.getElementById("palindrome-label").innerText = "Check your palindrome (Non-alphanumeric characters will be ignored)";
    document.getElementById("main").style.backgroundColor = "#e1ad01";
    return;
  }

  str = str.replaceAll(regex, "").toLowerCase();

  for (let x = 0; x < parseInt(str.length/2); x++) {
    if (str[x] !== str[str.length - 1 - x]) {
      document.getElementById("palindrome-label").innerText = "\"" + document.getElementById("palindrome-input").value + "\" is not a palindrome.";
      document.getElementById("main").style.backgroundColor = "#ba0000";
      return;
    }
  }

  document.getElementById("palindrome-label").innerText = "\"" + document.getElementById("palindrome-input").value + "\" is a palindrome.";
  document.getElementById("main").style.backgroundColor = "#09ad00";
};
