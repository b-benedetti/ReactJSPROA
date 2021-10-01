import './App.css';

var salA = parseFloat(prompt("Digite o seu salário atual"));
var percR = parseFloat(prompt("Digite o percentual de reajuste"));

function sal(salA, percR){
   return (salA * percR / 100 + salA);
}
function App09(){
    return(
        <div className="App09">
            <p>O seu salário será de R${sal(salA, percR)} </p>
        </div>
    );
}
export default App09;