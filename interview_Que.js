let obj1=[
  {
      name:'ABC1',price:600
    },
     {
      name:'ABC2',price:1200
    }, {
      name:'ABC3',price:500
    }, {
      name:'ABC4',price:1500
    }, {
      name:'ABC5',price:1100
    }, {
      name:'ABC6',price:900
    }, {
      name:'ABC7',price:700
    },
];

const filteredObj = obj1.filter(obj => obj.price > 1000);
const names = filteredObj.map(obj => obj.name);
console.log(names);

const totalPrice = obj1.reduce((acc, obj) => acc + obj.price, 0);

console.log(totalPrice);

// let str="hello world";
// let str2=str.includes("w")

// for(let i=0;i<str.length;i++){
//     if(str[i]==="w"{
//         return str[i];
//     })
// }

// function getData(){};

// (function detVal(){})();

// (a,b)=>a+b;
// let data=function(){
    
// }

let arr=[1,2,3,1,5,2,3];
let data3=[...new Set(arr)];
let data4=arr.filter((item,index) => arr.indexOf(item) === index);
console.log(data4)
