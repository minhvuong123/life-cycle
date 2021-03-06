import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private number: number = 123;
  name: string = "king";

  get counter(){
    return this.number;
  }
  set counter(value){
    this.number = value;
  }

  increment(){
    this.counter++;
  }

  decrement(){
    this.counter--;
  }

  updateValue() {
    this.name = "update king";
  }
}
