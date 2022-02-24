function addNumber(a, b, c, ...other) {
    console.log(other);
    return a + b + c;
}

const ans = addNumber(2, 3, 4, 6, 7);
console.log(ans);

var names = ['Jash', 'Samyak', 'Dhruvil'];

function getNames(name1, name2, name3) {
    console.log(name1, name2, name3);
}

// getNames(names[0], names[1], names[2]);
getNames(...names);
// getNames(names);

var students = {
    name: 'Jash',
    age: 20,
    hobbies: ['Football', 'Cricket'],
};

const {...rest } = students;

console.log(rest);

var newStudent = {
    ...students,
    age: 21,
};

console.log(newStudent);