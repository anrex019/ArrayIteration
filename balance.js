const transactionList = [500, -5, 200, -2.50, -100, -80, -160, -11.7, 1000];

let balance = 0
for (let i = 0; i< transactionList.length; i++) {
    balance += transactionList[i]
}