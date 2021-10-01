import './App.css';

var custoFab = parseFloat(prompt("Digite o custo de fábrica"));
var porcDist;
var impostos;

function custoFinal (custoFab) {
    return (custoFab + (28/100*custoFab) + (45/100*custoFab));
}

function App10 () {
    return(
        <div className="App10">
            <p>O custo final do carro será de R$ {custoFinal(custoFab)}</p>
        </div>
    );
}
export default App10;