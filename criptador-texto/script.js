function criptografarTexto() {
    const texto = document.getElementById("textoCriptografar").value;
    const chave = 3; // Defina a chave de criptografia (no caso, cifra de César)
    let textoCriptografado = "";

    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];
        if (char.match(/[a-z]/i)) {
            let code = texto.charCodeAt(i);
            if ((code >= 65) && (code <= 90))
                char = String.fromCharCode(((code - 65 + chave) % 26) + 65);
            else if ((code >= 97) && (code <= 122))
                char = String.fromCharCode(((code - 97 + chave) % 26) + 97);
        }
        textoCriptografado += char;
    }

    document.getElementById("mensagemValidacao").innerText = "Texto criptografado: " + textoCriptografado;
}

function descriptografarTexto() {
    const texto = document.getElementById("textoDescriptografar").value;
    const chave = 3; // Defina a chave de descriptografia (no caso, cifra de César)
    let textoDescriptografado = "";

    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];
        if (char.match(/[a-z]/i)) {
            let code = texto.charCodeAt(i);
            if ((code >= 65) && (code <= 90))
                char = String.fromCharCode(((code - 65 - chave + 26) % 26) + 65);
            else if ((code >= 97) && (code <= 122))
                char = String.fromCharCode(((code - 97 - chave + 26) % 26) + 97);
        }
        textoDescriptografado += char;
    }

    document.getElementById("mensagemValidacao").innerText = "Texto descriptografado: " + textoDescriptografado;
}

function copiarTexto() {
    const textoCopiar = document.getElementById("mensagemValidacao").innerText.split(": ")[1];
    navigator.clipboard.writeText(textoCopiar)
        .then(() => alert("Texto copiado com sucesso!"))
        .catch(err => console.error('Erro ao copiar: ', err));
}
