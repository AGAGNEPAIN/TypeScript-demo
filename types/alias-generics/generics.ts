function push<T, U>(items: T[], item: U): (T | U)[] {
  return [...items, item]
}

const test1 = push(['test'], 1); // return type = (string | number)[]
const test2 = push([], 2); // return type = number[]
const test3 = push(['test1'], test2); // return type (string | number[])[]

//--------------------------------------

function intrus<Type>(arg: Array<Type>): Type {
  return arg[0];
}

const test4 = intrus(['broccoli', 1, 3, 'frites', 'gratins']) //return type (string | number)[]

//------------- Generic in Alias -------------------------

interface Identity<DataType> {
  type: 'human' | 'android',
  data: DataType
}

const terminator: Identity<{ weight: number }> = {
  type: "android",
  data: {
    weight: 600
  }
}

//------------- Generic with constraint -------------------------

function consoleSize<Type extends Array<number | string>>(arg: Type): Type {
  console.log(arg.length);

  return arg;
}

consoleSize([3, "5"])
consoleSize(4)

//------------- Generic with conditions -------------------------

class Chat {
  cri() {
    return 'miaouuu'
  }
}

class Poisson {
  cri() {
    return false
  }
}

function generator(options: { nager: boolean } | { sauter: boolean }): Poisson | Chat {
  if ('nager' in options) {
    return new Poisson()
  } else {
    return new Chat()
  }
}

const fishStick = generator({nager: true})
const felix = generator({sauter: true})

// type AnimalFromOption<T> = T extends { nager: boolean } ? Poisson : Chat;
// type AnimalOptions ={ nager: boolean } | { sauter: boolean };

//------------- Generic with function infer and condition -------------------------

type AnimalCri<T> = T extends { cri: () => infer U } ? U : never

type chatCri = AnimalCri<Chat>
type fishCri = AnimalCri<Poisson>
