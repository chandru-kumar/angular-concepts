import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  status = false;
  constructor() {
    setTimeout( () => {
      this.status = true;
    },3000) 
    
   }

  ngOnInit(): void {
  }

}
