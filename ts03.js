var objVar = { age: 33, height: 172.3 }; // 객체의 각 요소값에 숫자만 넣으려면
// 클래스
var myClass = /** @class */ (function () {
    function myClass(매개변수) {
        this.멤버변수 = 매개변수;
    }
    return myClass;
}());
// constructor : 생성자(클래스를 객체화하는 순간 발동되는 함수)
// let 객체1 = new myClass(3.14);  >  자료형 불일치
var 객체1 = new myClass("str");
var 객체2 = new myClass("str2");
