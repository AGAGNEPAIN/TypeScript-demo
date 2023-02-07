type Situation = 'in a relationship'| 'married' | 'single' | 'it\'s complicated'

type Person = {
  firstname: string,
  lastname: string,
  age: number,
  situation?: Situation
}

export default  Person;