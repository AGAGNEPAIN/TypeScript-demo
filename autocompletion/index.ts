import Person from "./type";
import axios, {AxiosResponse} from "axios";

const displayPersonInfo = (person: Person): string | void => {
  if (person.situation === 'single') {
    return `${person.firstname} ${person.lastname}`;
  }
}

displayPersonInfo({firstname: 'John', lastname: 'Doe', age: 40, situation: 'single'})



// -----------------------------------------------------


type ApiResponse = {
  "icon_url": string,
  "id": string,
  "url": string,
  "value": string
}

axios.get('https://api.chucknorris.io/jokes/random').then((response: AxiosResponse<ApiResponse>) => {
  console.log(response.data.value)
})

