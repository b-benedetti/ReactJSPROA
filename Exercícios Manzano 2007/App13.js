import './App.css';

var N1 = parseInt(prompt("Digite a primeira nota"));
var N2 = parseInt(prompt("Digite a segunda nota"));
var N3 = parseInt(prompt("Digite a terceira nota"));

function notaF (N1, N2, N3) {
    return ((N1 * 2 + N2 * 3 + N3 * 5) / 10)
}

function App13 () {
    return (
        <div className="App13">
            <p>A média ponderada do aluno é {notaF(N1, N2, N3)}</p>
        </div>
    );
}

export default App13;