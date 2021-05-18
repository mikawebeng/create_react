const val4 = {
  name: "mika",
  age: 29
};

//プロパテだと上書き可能
val4.name = "yuzu";
//プロパティを追加
val4.address = "hiroshima";

console.log(val4);

//配列でも上書き可能
const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);

const name2 = "mika";
const age2 = 28;

const message = `私の名前は${name2}です。年齢は${age2}です`;
console.log(message);

const fuc = (str) => {
  return str;
};

console.log(fuc("fyc2です"));

const func2 = (num1, num2) => {
  return num1 + num2;
};
console.log(func2(10, 20));

const myProfile = {
  name3: "mika",
  age3: 29
};
//const message3 = `名前は${myProfile.name3}です。年齢は${myProfile.age3}です。`;
//console.log(message3);

const { name3, age3 } = myProfile;
const message4 = `名前は${name3}です。年齢は${age3}です。`;
console.log(message4);

const myProfile2 = ["みか", 29];

//const message5 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
//console.log(message5);

const [name4, age4] = myProfile2;
const message5 = `名前は${name4}です。年齢は${age4}です。`;
console.log(message5);

const sayHello = (name5 = "ゲスト") => {
  console.log(`こんにちは！${name5}さん`);
};
sayHello();

const arr1 = [1, 2];
//console.log(arr1);
//console.log(...arr1);

const sumEunc = (num3, num4) => {
  console.log(num3 + num4);
};
//sumEunc(arr1[0], arr1[1]);
sumEunc(...arr1);

const arr2 = [1, 2, 3, 4, 5];
const [num5, num6, ...arr3] = arr2;
console.log(arr3);

const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
console.log(arr6);
const arr7 = [...arr4, ...arr5];
console.log(arr7);
