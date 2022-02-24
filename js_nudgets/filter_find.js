const people = [
    { name: 'bob', age: 20, position: 'developer' },
    { name: 'peter', age: 25, position: 'designer' },
    { name: 'susy', age: 30, position: 'the boss' },
    { name: 'anna', age: 35, position: 'intern' },
  ];

  const fruits = ['mango', 'apple', 'kiwi'];
  const youngPeople = people.filter((person)=>{
      if(person.age<=25){
          return person;
      }
  });

  const developers = people.filter((person)=>person.position === 'developer');
  const fruit = fruits.find((fruit)=>fruit === 'kiwi');
  const randomPer = people.find((e)=>e.age<35);
  console.log(randomPer);
  console.log(fruit);
  console.log(developers);
  console.log(youngPeople);