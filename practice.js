function solve(str){
   //..

   if (!str.includes(" ")) {
    let arr = str.split("").reverse();
    str = arr.join("");
    return str;
   } {
    let arr = str.split(" ");
    let lengthArr = [];
    for(let i = 0; i < arr.length; i++) {
      lengthArr.push(arr[i].length)
    }
    console.log(lengthArr);
    str = arr.join("");
    arr = str.split("").reverse();
    str = arr.join("");
    console.log(str);
    arr.length = 0;
    let incrementor = 0;
    let part = '';
    for (let i = 0; i < lengthArr.length; i++) {
      part = str.substring(incrementor, lengthArr[i]);
      arr.push(part);
      incrementor += lengthArr[i] - 1;
    }
    return arr;
   }
  
}

console.log(solve("Where are you"));
