import {Component} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    
    
    title: string;
    titleText: any;
    
    constructor() {
        this.title = 'no';
        this.titleText = "title beginning";
    }
    
    calc(x, y) {
        return x+y;
    }
    
    onClick() {
        this.title = "changed title";
    }
    
    onClickButtonTwo(lbl, val) {
        document.getElementById(lbl).innerHTML = val;
    }
    
    
    getTitle(): string {
        return this.title;
    }
    
    getMe(): string {
        return 's';
    }
    
    getMde(): string {
        return 's';
    }
    
    getMee(): string {
        return 's';
    }
    
    getMek(): string {
        return 'd';
    }
    
}
