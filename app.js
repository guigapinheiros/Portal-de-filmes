const mostraFilmes = (data) => {
    let dadosFilmes = JSON.parse(data.target.response)

    localStorage.setItem('db_filmes', data.target.response)

    let dadosHTML = '';
    for (let i = 0; i < 4; i++) {
        let filme = dadosFilmes.results[i];
        dadosHTML += `
            <div class="Col-12 Col-sm-12 col-md-6 col-lg-3">
            <div class="card" widht="100%" height="100%">  
                <img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" class="card-img-top" class="media-object img-responsive img-thumbnail" alt="Doutor-Estranho"> 
                <div class="card-doutor">
                    <p class="card-text"><a><b>${filme.title}</b></a></p>
                </div>
                <div class="d-grid gap-2 d-md-block">
                <a href="detalhes.html?id=${filme.id}" class="btn btn-primary" type="button">Detalhes</a>
                </div>
            </div>
        </div>            
            `
    }
    document.getElementById('divListaFilmes').innerHTML = dadosHTML
}

const mostraErro = (data) => {
    alert('Deu erro na requisição');
}

const init = () => {
    let xhr = new XMLHttpRequest();
    let url = "https://api.themoviedb.org/3/movie/popular?api_key=9846ca69eee6bce8cd368b80ec566ef6&language=pt-BR"

    xhr.onload = mostraFilmes;
    xhr.onerror = mostraErro;
    xhr.open('GET', url, true);
    xhr.send();
}

document.body.onload = init;



