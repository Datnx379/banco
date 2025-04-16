
const PI = 3.14159;

const person = {
    name: "John",
    age: 30
};

person.age = 31;

// Từ constkhóa được giới thiệu trong ES6 (2015)

// Các biến được định nghĩa với constkhông thể được khai báo lại

// Các biến được định nghĩa với constkhông thể được gán lại

// Các biến được định nghĩa constcó Phạm vi Khối

// Không được phép khai báo lại một biến hiện có varhoặc let biến const, trong cùng phạm vi:
var x = 2;     // Allowed
const x = 2;   // Not allowed

{
let x = 2;     // Allowed
const x = 2;   // Not allowed
}

{
const x = 2;   // Allowed
const x = 2;   // Not allowed
}

//Không được phép gán lại một constbiến hiện có trong cùng phạm vi:
const x = 2;     // Allowed
x = 2;           // Not allowed
var x = 2;       // Not allowed
let x = 2;       // Not allowed
const x = 2;     // Not allowed

{
  const x = 2;   // Allowed
  x = 2;         // Not allowed
  var x = 2;     // Not allowed
  let x = 2;     // Not allowed
  const x = 2;   // Not allowed
}


//Việc khai báo lại một biến bằng const, trong phạm vi khác hoặc trong khối khác được phép
const x = 2;       // Allowed

{
  const x = 3;   // Allowed
}

{
  const x = 4;   // Allowed
}