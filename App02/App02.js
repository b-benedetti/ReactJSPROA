import './App.css';

var a= parseInt(prompt("Digite um valor"));
var b= parseInt(prompt("Digite um valor"));

function sub() {
return(a-b);
}

function App02 () {
    return (
        <div className="App02">
            <p>A subtração dos dois valores é de: {sub()}</p>
        </div>
    )
}

export default App02;