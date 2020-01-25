import { 
  Component, 
  OnInit, 
  Input, 
  OnChanges, 
  SimpleChange, 
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
 } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements  OnInit, 
                                        OnChanges, 
                                        DoCheck, 
                                        AfterContentInit, 
                                        AfterContentChecked, 
                                        AfterViewInit ,
                                        AfterViewChecked
{
  private myNumber: number;
  constructor() { }

  @Input() myName: string;
  @Input()
  set myNewNumber(value: number){
    this.myNumber = value;
  } 
  get myNewNumber(){
    return this.myNumber; 
  }

  ngOnChanges(changes: SimpleChanges) {
    const newNumberChange: SimpleChange = changes.myNewNumber;
    // console.log('Previous Value - (ng on changes): ', newNumberChange.previousValue);
    // console.log('Current Value - (ng on changes): ', newNumberChange.currentValue);
    // this.myNumber = newNumberChange.currentValue;
  }

  ngOnInit() {
    console.log('ngOnInit Value: ', this.myNewNumber);
  }

  ngDoCheck() {
    console.log("doCheck");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }
  
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked after ngAfterContentInit");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit after ngAfterContentChecked");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked after ngAfterViewInit");
  }

}
