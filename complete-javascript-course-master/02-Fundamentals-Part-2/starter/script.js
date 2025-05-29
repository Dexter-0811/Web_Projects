// const calcAverage = (score1, score2, score3) => {
//     return (score1 + score2 + score3) / 3
// };

// const scoreDolphins = [85, 54, 41];
// const scoreKoalas = [23, 34, 27];

// const avgDolphins = calcAverage(scoreDolphins[0], scoreDolphins[1], scoreDolphins[2]);
// const avgKoalas = calcAverage(scoreKoalas[0], scoreKoalas[1],scoreKoalas[2]);

// function checkWinner() {
//     const   compareScores = (avg1, avg2) =>
//         avgDolphins > (avgKoalas * 2) ? `Dolphins win ${avgDolphins} vs. ${avgKoalas}`:
//         avgKoalas > (avgDolphins * 2) ? `Koalas win ${avgKoalas} vs. ${avgDolphins}`:
//         "No team wins.";
//     console.log(`Dolphins: ${avgDolphins}`)
//     console.log(`Koalas: ${avgKoalas}`)
//     console.log(compareScores(avgDolphins,avgKoalas));
//     }

// checkWinner()


// function calcTip(bill) {
//     const tip = bill >= 50 && bill <= 300 ? (bill * 0.15) : bill  * 0.20;
//     return tip;
// }
// let bills = [];
// let tips = [];
// let totals = []
// console.log(bills, tips, totals)

// bills.push(125)
// tips.push(calcTip(bills[0]))
// totals.push(bills[0] + tips[0])

// console.log(bills, tips, totals)


// bills.push(555)
// tips.push(calcTip(bills[1]))
// totals.push(bills[1] + tips[1])

// console.log(bills, tips, totals)

// bills.push(44)
// tips.push(calcTip(bills[2]))
// totals.push(bills[2] + tips[2])

// console.log(bills, tips, totals)


// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
//   };
// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';

// console.log(jonas);
// console.log(`Jonas has ${jonas.friends.length} and his best friend is call ${jonas.friends[0]}.`)


const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,
    bmiCalc: function() {
        let BMI = this.mass / (this.height ** 2)
        this.bmi = BMI
        return BMI
    }

};

const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,
    bmiCalc: function() {
        let BMI = this.mass / (this.height ** 2)
        this.bmi = BMI
        return BMI
    }

};

console.log(mark.bmiCalc());
console.log(john.bmiCalc());
console.log(mark);
console.log(john)