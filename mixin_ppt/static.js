// static으로 생성한 클래스의 프로퍼티와 메서드는 객체 생성 없이 사용할 수 없고
// 클래스 이름을 통해서 접근 가능 

// 인스턴스 프로퍼티(Instance property)와 정적 프로퍼티(Static property, Class propery)

//  인스턴스 프로퍼티는 두 가지 방법으로 정의할 수 있다. 
//  - 생성자(constructor)를 사용한 방법
//  - 생성자를 빼고도 정의할 수 있습니다. 
 


// 1. Instance property
class Student1{
    constructor() {
       this.Name = "박명수"
    }
}

class Teacher1{
    Name = "유재석"
}
   
const st1 = new Student1();
const tr1 = new Teacher1();

console.log(st1.Name);  // 박명수 
console.log(tr1.Name);  // 유재석

// 인스턴스 프로퍼티는 클래스를 통해서 접근할 수는 없다 
console.log(Student1.Name); // undefined
console.log(Teacher1.Name); // undefined




// 2. Static property
class Student{
    static Name = "박명수"
  }

console.log(Student.Name);  //클래스를 통해서 접근: 출력 결과 => 박명수

const st2 = new Student();
console.log(st2.Name);      //객체를 통해서 접근: 출력 결과 => undefined
  



















// class Math {
//     static PI = 3.14;

//     static getCircleArea(radius) {
//         return Math.PI * radius * radius;
//     }
// }

// Math.PI = 3.141592;
// Math.getRectangleArea = function (width, height) {
//     return width * height;
// }

// console.log(Math.PI);
// console.log(Math.getCircleArea(5));
// console.log(Math.getRectangleArea(4, 5));

// // Date의 Static 메서드 예시
// console.log(Date.now());

