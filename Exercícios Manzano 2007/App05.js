import './App.css';

var num = parseInt(prompt("Digite um número: "));

function sucessor() {
    var sec = num + 1;
  return (sec);
}

function antecessor() {
    var ant = num - 1;
return (ant);
}

function App05() {  
  return ( 
     <div className = "App05" >
       <p>O antecessor de {num} é : {antecessor()}</p>
       <p>O sucessor de {num} é : {sucessor()}</p>
     </div>
  );
}
  export default App05;