// ===================================
// Task 10: Small OOP Project
// ===================================

class BankAccount {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  // Deposit Method
  deposit(amount) {
    this.balance += amount;
    console.log("Deposited:", amount);
    console.log("Current Balance:", this.balance);
  }

  // Withdraw Method
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log("Withdrawn:", amount);
      console.log("Current Balance:", this.balance);
    } else {
      console.log("Insufficient Balance");
    }
  }
}

// Account
let account = new BankAccount("Rahim", 5000);

// Deposit
account.deposit(1000);

// Withdraw
account.withdraw(500);

// Output
console.log("Account Holder:", account.name);
console.log("Final Balance:", account.balance);


// ===================================
// Bonus: Static Method
// ===================================

class Calculator {
  static add(a, b) {
    return a + b;
  }
}

console.log("Bonus:", Calculator.add(10, 20));
