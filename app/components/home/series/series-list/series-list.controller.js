class SeriesListController{
    constructor (SeriesService){
        this.SeriesService = SeriesService;
        this.getSeries();
    }

    getSeries(){
        console.log("Entra en Series");
        this.SeriesService.getSeries()
            .then(resultado=> {
                this.seriesResult = resultado.results;
                console.log(JSON.stringify(this.seriesResult));
            });
    }
}

export default SeriesListController;
