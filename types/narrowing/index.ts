function printId(id: string | number) {
  if (typeof id === 'number') {
    console.log((id * 3).toString())
  } else {
    console.log(id.toUpperCase()) // type string
  }
}


function findType<T extends string | boolean>(a: T, b: string | number | boolean): T | void {
  if (a === b) {
    console.log(a) // type string | boolean
  }

  if (a == true) {
    return a;
  } else {
    console.log(a) // type string | false
  }
}

function handler(a: MouseEvent | HTMLInputElement) {
  if ("value" in a) {
    console.log(a) // type HTMLInputElement
  }
}
