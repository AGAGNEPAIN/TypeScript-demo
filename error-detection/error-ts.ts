const submit = (data: {name: string, age?: number}) => {
  console.log(data.name);
  console.log(data.age);
}

submit();
submit({name: 'Antoine'});
submit({age: 'Antoine'});
submit({age: 32});
