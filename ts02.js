function 내함수(num) {
    // 숫자 > 6
    // 문자열 > 에러
    // 모호한 상황일때는 if문으로 나눠서 자료형을 확인하고 계산한다
    if (typeof num === 'number') {
        return num * 2;
    }
    else if (typeof num === 'string') {
        var temp = Number(num); // 문자열 > 숫자
        return temp * 2;
    }
    else {
        return 0; // else if를 썻으면 else 까지 써줘야할 수도 있음
    }
}
내함수(3);
내함수('3');
