get.onclick = function GetBalance() {
  getbalance = Number(document.getElementById("getbalance").value);
  if(getbalance > 0) {
    balance = getbalance;
    document.getElementById("balance").style.color = '#ffffff'
    document.getElementById("balance").innerHTML = balance;
  } 
}
put.onclick = function Put() {
  balance = Number(document.getElementById('balance').textContent);
  rate = Number(document.getElementById("rate").value);
  num = Number(document.getElementById("num").value);
  document.getElementById('balance').style.color = '#ffffff';
  document.getElementById('rate').style.color = '#ffffff';
  document.getElementById('num').style.color = '#ffffff';
  if(balance === 0 || balance < rate) {
    document.getElementById("balance").style.color = 'red'; 
  }else if(rate === 0 || rate < 0) {
    document.getElementById('rate').style.color = 'red';
  }else if(num < 0 || num > 32) {
    document.getElementById('num').style.color = 'red'; 
  }else {
    balance -= rate;
    document.getElementById('balance').innerHTML = balance;
    random = Math.floor(Math.random() * (32 - 0 + 1)) + 0;
    document.getElementById('rand').innerHTML = random;
    if(num === random) {
      if(random === 0 || random === 32) {
        balance += (rate * 100);
      document.getElementById('balance').innerHTML = balance;
      }else {
        balance += (rate * 31);
        document.getElementById('balance').innerHTML = balance;
      } 
    }
  }
}