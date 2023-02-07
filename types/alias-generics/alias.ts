type Second = number;
type Minute = number;
type Hour = number;

// Alias from other Alias
type Time = `${Hour}:${Minute}:${Second}`;

let time: Time = '12:12:50';


//---------- Interface vs Type ------------------

//---------- Interface ------------------
type Situation = 'in a relationship' | 'married' | 'single' | 'it\'s complicated';

interface Person {
  firstname: string,
  lastname: string,
  age: number,
  situation?: Situation // ? - Optional parameter
}

interface Person {
  children: boolean
}

interface Employee extends Person {
  job: string,
  salary?: number
}

const Jojo: Employee = {
  firstname: 'Jojo',
  lastname: 'le clown',
  age: 30,
  children: false,
  job: 'clown',
  salary: 0
}

//---------- Type ------------------
type Vehicle = {
  maxSpeed: number,
  maxRange: number,
}

type Car = Vehicle & (
  {
    wheels: 4,
    type: 'classic'
  } |
  {
    wheels: 8,
    type: 'limo'
  })

//---------- Conditions ------------------
const chevrolet: Car = {
  maxSpeed: 180,
  maxRange: 260,
  wheels: 4,
  type: 'classic'
}

const hummerLimo: Car = {
  maxSpeed: 180,
  maxRange: 260,
  type: 'limo',
  wheels: 8,
}


