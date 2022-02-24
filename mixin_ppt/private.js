// ; * Public, Private

// ; - class를 선언할 때 constructor 없이 그냥 변수를 선언하게 되면 public 선언이 돼서 
// ; 외부에서도 그 변수를 참조할 수 있음.

// ; - 같은 형태에서 변수 명 앞에 #을 붙이면 private가 됨.


// // 1. make class CoffeeMachine
class CoffeeMachine {
  waterAmount = 0; // 물통에 차 있는 물의 양

  constructor(power) {
    this.power = power;
    console.log( `전력량이 ${power}인 커피머신을 만듭니다.` );
  }
}

// 커피 머신 생성
let coffeeMachine = new CoffeeMachine(100);

// 물 추가
coffeeMachine.waterAmount = 200;





// // 2. waterAmount를 0 미만의 값으로는 설정하지 못하도록 protected 프로퍼티로 변경
class CoffeeMachine {
  _waterAmount = 0;

  set waterAmount(value) {
    if (value < 0) {
      value = 0;
    }
    this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount;
  }

  constructor(power) {
    this._power = power;
  }

}

let coffeeMachine = new CoffeeMachine(100);
coffeeMachine.waterAmount = -10; // _waterAmount will become 0, not -10

console.log(coffeeMachine.waterAmount)




// 3. Read-only “power”
// That’s exactly the case for a coffee machine: power never changes.
// => we only need to make getter, but not the setter

class CoffeeMachine {
  // ...

  constructor(power) {
    this._power = power;
  }

  get power() {
    return this._power;
  }

}

let coffeeMachine = new CoffeeMachine(100);
console.log(`Power is: ${coffeeMachine.power}W`); // Power is: 100W

coffeeMachine.power = 25; // no setter => not working
console.log(`Power is: ${coffeeMachine.power}W`); // Power is: 100W




// 3. #waterLimit(물 용량 한도), #fixWaterAmount (남아있는 물의 양을 확인)를 구현

class CoffeeMachine {
  #waterLimit = 200;

  #fixWaterAmount(value) {
    if (value < 0) return 0;
    if (value > this.#waterLimit) return this.#waterLimit;
  }

  setWaterAmount(value) {
    this.#waterLimit = this.#fixWaterAmount(value);
  }
}

let coffeeMachine = new CoffeeMachine();

// 클래스 외부에서 private에 접근할 수 없음
coffeeMachine.#fixWaterAmount();  // Error
coffeeMachine.#waterLimit = 1000; // Error



// 4. #waterAmount를 사용하기위해 waterAmount() 사용
// => private 프로퍼티 #waterAmount와 public 프로퍼티 waterAmount를 같은 이름으로 동시 사용 가능

class CoffeeMachine {

  #waterAmount = 0;

  get waterAmount() {
    return this.#waterAmount;
  }

  set waterAmount(value) {
    if (value < 0) value = 0;
    this.#waterAmount = value;
  }
}

let machine = new CoffeeMachine();

machine.waterAmount = 100;
console.log(machine.#waterAmount); // Error
console.log(machine.waterAmount)





// 5. Summary
// protected 필드와 달리, private 필드는 언어 자체에 의해 강제된다는 점이 장점.

// 그런데 CoffeeMachine을 상속받는 클래스에선 #waterAmount에 직접 접근할 수 없다. 
// #waterAmount에 접근하려면 waterAmount의 getter와 setter를 통해야 함.

// 언어 차원에서 protected 필드를 지원하지 않아도 더 자주 쓰이는 이유
// => CoffeeMachine을 상속받는 클래스에선 CoffeeMachine의 내부에 접근해야 하는 정당한 사유가 있을 수 있기 때문.
