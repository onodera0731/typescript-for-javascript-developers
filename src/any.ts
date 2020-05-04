import axios from 'axios';

export {};

let url: string =
  'http://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios
  .get(url)
  .then(function (response) {
    interface Articles {
      id: number;
      title: string;
      description: string;
    }
    let data: Articles[];
    data = response.data;
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {});
