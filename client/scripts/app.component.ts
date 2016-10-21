import {Component, OnInit, OnDestroy} from 'angular2/core';

import {Router, RouteConfig, ROUTER_DIRECTIVES, OnActivate, OnDeactivate} from 'angular2/router';
import {bootstrap} from 'angular2/platform/browser';


@Component({
    selector: 'app',
    templateUrl: '/assets/views/templates/app.html',
    directives: [ROUTER_DIRECTIVES]

})
@RouteConfig([


])
export class AppComponent implements OnInit, OnDestroy {


    ngOnInit() {
        console.log('helloworld');


    }

    ngOnDestroy() {
    }

}
