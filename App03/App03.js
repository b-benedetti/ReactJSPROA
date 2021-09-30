import './App.css';

var a= parseInt(prompt("Digite um valor"));
var b= parseInt(prompt("Digite um valor"));

function mult() {
return(a*b);
}

function App03 () {
    return (
        <div className="App03">
            <p>A multiplicação dos dois valores é de: {mult()}</p>
        </div>
    )
}

export default App03;