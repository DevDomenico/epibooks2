import logo from './logo.svg';
import './App.css';

let lista = [];

async function fetchLocalJson() {

  const response = await fetch("https://striveschool-api.herokuapp.com/api/books/1/comments", {
    method: 'GET',
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNkNjMwZTYzZjE1ODAwMTQxMTg0ODUiLCJpYXQiOjE3MDAyOTcyOTEsImV4cCI6MTcwMTUwNjg5MX0.UT7xVZnDV7Rclk1geOvmwGN-j_uPlXsb8Vj9EFQ67kg'
    }
  })
  const data = await response.json();
  lista = data;
  console.log(lista);

}
fetchLocalJson();
const posta = async (books) => {
  const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/:elementId", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNkNjMwZTYzZjE1ODAwMTQxMTg0ODUiLCJpYXQiOjE3MDAyOTcyOTEsImV4cCI6MTcwMTUwNjg5MX0.UT7xVZnDV7Rclk1geOvmwGN-j_uPlXsb8Vj9EFQ67kg"
    },
    body: JSON.stringify({
      
      comment: books.comment,
      rate: books.rate, 
      elementId: books.elementId,

    })
  })

  if (response.ok) {
    console.log("funzione")

  } else {
    console.error("errore non funziona")
  }
}

function App() {
  return (
    <div>

    </div>
  );
}

export default App;
