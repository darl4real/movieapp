export default class FilmsService {
    constructor($http){
        this.$http = $http;
    }

    getFilms(){
        return this.$http.get('https://api.themoviedb.org/3/movie/popular?api_key=81aca90227197885e3861bf1d2e1acd1&language=es-ES')
            .then(response=>response.data)
    }

    
    
}