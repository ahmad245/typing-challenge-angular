import { Component } from '@angular/core';
import {lorem} from 'faker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sentence = lorem.sentence();
  text:string='';
  

  constructor(){
  }
  onInput(event){
    console.log(event);
    this.text=event;
    
  }
}
