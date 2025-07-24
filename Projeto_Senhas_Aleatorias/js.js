function gerarSenha() {
    var tamanho = document.getElementById("tamanho-senha").value;
    var caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    var senha = "";
    for (var i = 0; i < tamanho; i++) {
      senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    document.getElementById("senha-gerada").value = senha;
  }
  