console.log("Câu 1:");

function timMax(a, b) {
	return a > b ? a : b;
}
console.log(timMax(10, 5));
console.log(timMax(100, 100));
/////////
console.log("Câu 2:");

function kiemTra(arg) {
	if (typeof arg !== "number") {
		return "Vui lòng nhập số";
	}
	if (arg % 3 === 0) return "Fizz";
	if (arg % 5 === 0) return "Buzz";
	if (arg % 3 === 0 && arg % 5 === 0) return "FizzBuzz";
	else return arg;
}

const check1 = kiemTra("One");
console.log(check1);

///////
console.log("Câu 3:");
function vanToc(v) {
	if (v <= 70) {
		return "Vận tốc an toàn";
	}
	if (v > 70 && v < 120) {
		var tienPhat = 0;
		while (v >= 75) {
			v -= 5;
			tienPhat += 30000;
		}
		return `Bạn đã bị phạt: ${tienPhat} đ`;
	} else return "Bạn đã bị tước giấy phép lái xe";
}

console.log(vanToc(40));
console.log(vanToc(70));
console.log(vanToc(75));
console.log(vanToc(99));
console.log(vanToc(120));
////////
console.log("Câu 4:");
function chuoi(curObj) {
	for (let key in curObj) {
		if (typeof curObj[key] === "string") {
			console.log(key, ":", curObj[key]);
		}
	}
}

const person = {
	name: "Le Van A",
	age: 40,
	height: 175,
	country: "Viet Nam",
	designation: "UI Developer",
};

chuoi(person);
console.log("----------");
