import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import angular from 'angular';

const common = angular
    .module('App.common', [])
    .component('cHeader', HeaderComponent)
    .component('cFooter', FooterComponent)
    .name;

export default common;