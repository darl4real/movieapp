export default class SeriesService {
    constructor($http){
        this.$http = $http;
    }

    getSeries(){
        return this.$http.get('https://api.themoviedb.org/3/tv/popular?api_key=81aca90227197885e3861bf1d2e1acd1&language=es-ES')
            .then(response=>response.data)
    }

    
    
}