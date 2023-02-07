function printId(id: string | number) {
  if (typeof id === 'number') {
    console.log((id * 3).toString())
  } else {
    console.log(id.toUpperCase()) // type string
  }
}


function findType(a: string | boolean, b: string | number | boolean): true | void {
  if (a === b) {
    console.log(a) // type string | boolean
  }

  if (a == true) {
    return a;
  } else {
    console.log(a) // type string | false
  }
}

function handler(evt: MouseEvent | HTMLInputElement) {
  if ("value" in evt) {
    console.log(evt) // type HTMLInputElement
  } else {
    console.log(evt) // type MouseEvent
  }
}
