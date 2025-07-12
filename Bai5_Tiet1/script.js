var x = 5;
var y = 3;
console.log("Câu 1:");
console.log("x + y = ", x + y); //8

console.log("x - y = ", x - y); // 2

console.log("x * y = ", x * y); // 15

console.log("x / y = ", x / y); // 1,67

console.log("x % y = ", x % y); // 2

console.log("++x = ", ++x); // 6
console.log("x++ = ", x++); // 6
console.log("x = ", x); // 7

console.log("--x = ", --x); //6
console.log("x-- = ", x--); //6
console.log("x = ", x); //5

console.log("x ** y  = ", x ** y); // 125

console.log("Câu 2:");
console.log(2 == 2); //  T
console.log(2 == "2"); // T

console.log(3 != 2); // T
console.log("hello" != "Hello"); // T

console.log(2 === 2); //  T
console.log(2 === "2"); // F

console.log(2 !== 2); //  F
console.log(2 !== "2"); // T

console.log("Câu 3:");
console.log(true && true); // true
console.log(true && false); // false

console.log(true || false); // true

console.log(!true); // false

console.log("Câu 4: Nối chuỗi");
console.log("Hello " + "World"); // Hello World

var a = "JavaScript";
a += " Hẹ hẹ";

console.log(a); // JavaScript Hẹ hẹ

console.log("Câu 5: Đổi vị trí");
var value1 = "one";
var value2 = "two";

console.log("Giá trị ban đầu của value1 là ", value1);
console.log("Giá trị ban đầu của value2 là ", value2);

var value3 = value1;
value1 = value2;
value2 = value3;

console.log("Giá trị sau khi đổi của value1 là ", value1);
console.log("Giá trị sau khi đổi của value2 là ", value2);

console.log("Câu 6:");

function dienTichHinhVuong(r) {
	var s = 2 * r ** 2;
	return s;
}

var test1 = dienTichHinhVuong(5);
console.log(test1);

var test2 = dienTichHinhVuong(6);
console.log(test2);

var test3 = dienTichHinhVuong(7);
console.log(test3);

console.log("Câu 7:");
function palindrome(string) {
	const doiXung = string.split("").reverse().join("");
	console.log(doiXung);
	return string === doiXung;
}

console.log(palindrome("rotavator"));
console.log(palindrome("solos"));

console.log("Câu 8:");
console.log(typeof "Le Van A"); // string
console.log(typeof 5000); // Number
console.log(typeof 5000.99); // Number
console.log(typeof [10, 15, 17]); // object
console.log(typeof { name: "Le Van A", age: 18, country: "Viet Nam" }); // Object
console.log(typeof true); // boolean
console.log(typeof false); // boolean
console.log(typeof undefined); // Underfined
console.log(typeof null); // Object

console.log("Câu 9:");
var img =
	"https://cdn.daca.vn/media/blog/lap-trinh/js%20tips%20-%20m%E1%BB%99t%20s%E1%BB%91%20c%C3%A1ch%20vi%E1%BA%BFt%20js%20ng%E1%BA%AFn%20g%E1%BB%8Dn%20h%C6%A1n.png";
var title = "JS TIPS - Một số cách viết JS ngắn gọn hơn";
var desc =
	"Hôm nay Daca.vn gửi tới các bạn một số những tips để giúp bạn code JS một cách hiệu quả...";
var url = "https://daca.vn/js-tips-mot-so-cach-viet-js-ngan-gon-hon";

var string = `
  <div class="article">
    <a href="${url}">
    <div class="inner-image">
      <img src="${img}" />
    </div>
    <div class="inner-content">
      <h2 class="inner-title">${title}</h2>
      <p class="inner-desc">${desc}</p>
    </div>
    </a>
  </div>
`;

console.log(string);

console.log("Câu 13:");
console.log(Math.round(99.2)); //  làm tròn lên hoặc xuống

console.log(Math.round(99.5));

console.log(Math.ceil(99.2)); // làm tròn lên

console.log(Math.floor(99.9)); // làm tròn xuống

console.log(Math.min(10, 20, 100, -100, 90)); // lấy số nhỏ nhất

console.log(Math.max(10, 20, 100, -100, 90)); // lấy số lớn nhất

console.log(Math.pow(2, 4)); // lũy thừa

console.log(Math.random()); // Tạo số thập phân ngẫu nhiên từ 0 đến 1

console.log(Math.trunc(99.5)); // xóa số thập phân

console.log("Câu 14:");
var theName = "  28Tech  ";

console.log(theName); // "  28Tech  "
console.log(theName[1]); // " "
console.log(theName[5]); // "e"

console.log(theName.charAt(1)); // " "
console.log(theName.charAt(5)); // "e"

console.log(theName.length); // 10

console.log(theName.trim()); // "28Tech"

console.log(theName.toUpperCase()); // "  28TECH  "
console.log(theName.toLowerCase()); // "  28tech  "

console.log(theName.trim().charAt(5).toUpperCase()); // "H"

console.log("Câu 15:");
const myFriends = ["Le Van A", "Nguyen Thi B", "Do Van C", "Dao Thi D"];

myFriends.unshift("Vu Van E", "Nguyen Van F");
console.log(myFriends);
/*
[
  "Vu Van E",
  "Nguyen Van F",
  "Le Van A",
  "Nguyen Thi B",
  "Do Van C",
  "Dao Thi D"
]
*/

const myFriends1 = ["Le Van A", "Nguyen Thi B", "Do Van C", "Dao Thi D"];

myFriends.push("Vu Van E", "Nguyen Van F");
console.log(myFriends1);
/*
[
  "Le Van A",
  "Nguyen Thi B",
  "Do Van C",
  "Dao Thi D",
  "Vu Van E",
  "Nguyen Van F"
]
*/

const myFriends3 = ["Le Van A", "Nguyen Thi B", "Do Van C", "Dao Thi D"];

myFriends.shift();
console.log(myFriends3);
/*
[
  "Nguyen Thi B",
  "Do Van C",
  "Dao Thi D"
]
*/

const myFriends4 = ["Le Van A", "Nguyen Thi B", "Do Van C", "Dao Thi D"];

myFriends.pop();
console.log(myFriends4);
/*
[
  "Le Van A",
  "Nguyen Thi B",
  "Do Van C"
]
*/

console.log("Câu 19:");
var chuoi =
	"JavaScript là một ngôn ngữ lập trình phổ biến. Đây là ngôn ngữ đứng đầu trong bảng xếp hạng 2023.";
var tuTimKiem = "ngôn ngữ";

var viTriDauTien = chuoi.indexOf(tuTimKiem);
var viTriCuoiCung = chuoi.lastIndexOf(tuTimKiem);

console.log(`Vị trí đầu tiên của từ khóa "${tuTimKiem}" là: ${viTriDauTien}`);
console.log(`Vị trí cuối cùng của từ khóa "${tuTimKiem}" là: ${viTriCuoiCung}`);

console.log("Câu 20:");

function chuyenDoi(phut) {
	return phut * 60;
}

console.log(chuyenDoi("5"));

console.log("Câu 21:");

function triArea(canh, chieuCao) {
	return (canh * chieuCao) / 2;
}

console.log(triArea(3, 2));

console.log("Câu 22:");

function nextEdge(side1, side2) {
	return side1 + side2 - 1;
}

console.log(nextEdge(8, 10));

console.log("Câu 23:");
function goc(n) {
	return (n - 2) * 180;
}

console.log(goc(4));

console.log("Câu 24");

function diemBongDa(thang, hoa, thua) {
	return thang * 3 + hoa * 1;
}

console.log(diemBongDa(3, 4, 2));

console.log("Câu 25:");
function frames(phut, fps) {
	return phut * fps * 60;
}

console.log(frames(10, 25));

console.log("Câu 26:");
function area(chieuDai, chieuRong) {
	if (chieuDai < 0 || chieuRong < 0) return -1;
	else return chieuDai * chieuRong;
}

console.log(area(0, -1));
console.log(area(3, 4));

console.log("Câu 27:");

function matRubik(n) {
	return n * n * 6;
}

console.log(matRubik(2));

console.log("Câu 28:");
function fiftyThirtyTwenty(soTien) {
	var needs = soTien * 0.5;
	var hobby = soTien * 0.3;
	var saving = soTien * 0.2;

	return { Needs: needs, Hobby: hobby, Saving: saving };
}

console.log(fiftyThirtyTwenty(10000));

// Câu 30:
function compoundInterest(p, t, r, n) {
	var a = p * Math.pow(1 + r / n, n * t);
	return parseFloat(a.toFixed(2));
}

console.log(compoundInterest(3500, 15, 0.1, 4));

// Câu 31

function chan(ga, bo, lon) {
	return ga * 2 + bo * 4 + lon * 4;
}

console.log(chan(2, 3, 5));

// Câu 32
function ngay(tuoi) {
	return tuoi * 365;
}

console.log(ngay(65));

// Câu 33
function tongNguoi(population, n) {
  return population + n * 12 * 30;
}

console.log(tongNguoi(256,2));

// Câu 34
function Xep(n){
  return n * n;
}

console.log(Xep(2));
// Câu 35:
function stutter(word){
  var haiKyTuDau = word.substring(0,2);
  var chuoi = `${haiKyTuDau}...${haiKyTuDau}...${word}`;
  return chuoi;
}


console.log(stutter("Bạn có khỏe không?")); 
console.log(stutter("Tôi khỏe."));
console.log(stutter("Đây là đâu?"));
