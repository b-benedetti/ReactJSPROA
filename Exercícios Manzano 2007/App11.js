import './App.css';

var carV = parseInt(prompt("Digite o total de carros vendidos"));
var salFix = parseInt(prompt("Digite o seu salário fixo"));
var com = parseFloat(prompt("Digite o valor da sua comissão"));
var totalV = parseFloat(prompt("Digite o total de suas vendas"));
var comC = com * carV;
var com2 = totalV / 100 * 5;

function salF (comC,com2,salFix) {
    return (comC+com2+salFix);
}
function App11 () {
    return (
        <div className="App11">
        <p> O salário final do vendedor é R$ {salF(comC,com2,salFix)}</p>
        </div>
       
    );
}
export default App11;