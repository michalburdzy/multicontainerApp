class CalculationsService {
  calculateFibonacciByIndex(index){
    if (index < 2) return 1;
    return this.calculateFibonacciByIndex(index - 1) + this.calculateFibonacciByIndex(index - 2);
  }
}

module.exports = CalculationsService;
