class FizzBuzz {
    constructor(fizz, buzz) {
      this.fizz = fizz;
      this.buzz = buzz;
    }
  
    isFizz(num) {
        return num == 0? true : num % this.fizz == 0;

    }
  
    isBuzz(num) {
            return num == 0? true : num % this.buzz == 0;

    }
  
    isFizzBuzz(num) {
        return this.isFizz(num) && this.isBuzz(num);
    }
  
    getOutput(num) {
        return null;
    }
  }
  