//Bai 1
let str= "Quý, Nam, Lan, Hùng, Nam";
let students = str.split(", ");
console.log("Mảng students",students);
students.reverse(); 
console.log("Mảng khi đảo ngược",students);
if (students.includes("Lan")){
  console.log("Tên Lan tồn tại trong mảng");
} else {
    console.log("tên Lan không tồn tại trong mảng");
}

// Bai 2
let prices= [100, 200, 300, 400];
for (let value of prices){
  console.log(value);
}
for (let index in prices){
  console.log(index);
}
