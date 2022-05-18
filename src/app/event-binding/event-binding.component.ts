import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  status = false;
  typedInput = '';
  constructor() {
    setTimeout( () => {
      this.status = true;
    },3000) 
    
   }

  onClickingButton() {
     this.status = !this.status;
   }

  onTyping(event: Event) {
      this.typedInput = (<HTMLInputElement>event.target).value;
  }

  ngOnInit(): void {
  }

}
