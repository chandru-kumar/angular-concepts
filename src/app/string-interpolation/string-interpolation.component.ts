import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  greet = 'Good morning';

  getMessage() {
    return "This message has been returned by a method in String Interpolation"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
