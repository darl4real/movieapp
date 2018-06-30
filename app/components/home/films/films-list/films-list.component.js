import controller from './films-list.controller'
export const FilmsListComponent = {
    bindings:{
      filmsResult: '<'
    },
    controller,
    template:`
    <h1>Film List </h1>
    <div class="container-fluid">
        <div class="row">
            <films-item class="col-sm-4" 
            ng-repeat="film in $ctrl.filmsResult" data="film">
     
        </films-item>
    </div>
    
    `
}