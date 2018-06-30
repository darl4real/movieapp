import controller from './films-item.controller';

export const FilmsItemComponent = {
    bindings:{
      data:'<'
    },
    controller,
    template:
    `<div class="card center" style="width: 18rem;">
                <img class="card-img-top"
                 src="https://image.tmdb.org/t/p/w400/{{$ctrl.data.poster_path}}">
                </img>
                <div class="card-body">
                <h5 class="card-title"> {{$ctrl.data.title}}</h5>
                <p class="card-text">{{$ctrl.data.overview}}</p>
                </div>
            </div>`
}