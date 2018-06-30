import { FilmsItemComponent } from "./films/films-item/films-item.component";
import { FilmsListComponent }
from "./films/films-list/films-list.component";
import FilmsService from './films/films.service';
import { SeriesItemComponent } from "./series/series-item/series-item.component";
import { SeriesListComponent }
from "./series/series-list/series-list.component";
import SeriesService from './series/series.service';
import angular from 'angular';
import { homerComponent } from "./homer/homer.component";

const home = angular
    .module('home', [])
    .service('FilmsService', FilmsService)
    .service('SeriesService', SeriesService)
    .component('filmsList', FilmsListComponent)
    .component('filmsItem', FilmsItemComponent)
    .component('homerComponent', homerComponent)
    .component('seriesList', SeriesListComponent)
    .component('seriesItem', SeriesItemComponent)


.config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('films', {
                url: '/films',
                component: 'filmsList'
            })
            .state('series', {
                url: '/series',
                component: 'seriesList'
            })

        .state('homer', {
            url: '/',
            component: 'homerComponent'
        })



        $urlRouterProvider.otherwise('/')
    })
    .name
export default home