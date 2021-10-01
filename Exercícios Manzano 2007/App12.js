import './App.css';

var grausF = parseFloat(prompt("Digite um valor em graus Fahrenheit"));

function graus (grausF) {
    return ((grausF - 32) * 5 / 9);
}

function App12 () {
    return (
        <div className="App12">
            <p>A temperatura em graus Celsius é {graus(grausF).toFixed(2)}</p>
        </div>
    );
}

export default App12;