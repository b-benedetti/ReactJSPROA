import './App.css';

var eleitores = parseInt(prompt("Total de eleitores"));
var nulos = parseInt(prompt("Votos nulos"));
var brancos = parseInt(prompt("Votos brancos"));
var v = eleitores - (nulos + brancos);
function porcentagem_eleitores(a,c){
   return (a * 100 / c);
}
function App08(){
    return(
        <div className="App08">
            <p>A pct de votos nulos é: {porcentagem_eleitores(nulos,eleitores)} % </p>
            <p>A pct de votos validos é: {porcentagem_eleitores(v,eleitores)} % </p>
            <p>A pct de votos brancos é: {porcentagem_eleitores(brancos,eleitores)} % </p>
        </div>
    );
}
export default App08;