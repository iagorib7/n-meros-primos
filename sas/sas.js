function verificarPrimo() {
    var numero = parseInt(document.getElementById('numero').value);

    if (isNaN(numero) || numero < 0 || numero > 100) {
        document.getElementById('resultado').innerText = 'Por favor, insira um número válido entre 0 e 100.';
        return;
    }

    function ehPrimo(n) {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 === 0 || n % 3 === 0) return false;
        for (let i = 5; i * i <= n; i += 6) {
            if (n % i === 0 || n % (i + 2) === 0) return false;
        }
        return true;
    }

    var resultado;
    if (ehPrimo(numero)) {
        resultado = `${numero} é um número primo.`;
    } else {
        resultado = `${numero} não é um número primo.`;
    }

    document.getElementById('resultado').innerText = resultado;
}