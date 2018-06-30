class FilmsListController{
    constructor (FilmsService){
        this.FilmsService = FilmsService;
        this.getFilms();
    }

    getFilms(){
        console.log("Entra en Peliculas");
        this.FilmsService.getFilms()
            .then(resultado=> {
                this.filmsResult = resultado.results;
                console.log(JSON.stringify(this.filmsResult));
            });
    }
}

export default FilmsListController;
