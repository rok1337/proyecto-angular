import { Component } from "@angular/core";


@Component({
  selector: 'app-root',
  //template: '<h1>My App</h1>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //styles: ['']
})
export class AppComponent {
  name = 'Luis';
  imgURL = 'https://angular.io/assets/images/logos/angular/angular.png';
  
  getName() {
    return this.name;
  }

  changeImage(e: KeyboardEvent) {
    this.imgURL = (e.target as HTMLInputElement).value
  }

  logImg(event: string){
    console.log(event);
  }

}