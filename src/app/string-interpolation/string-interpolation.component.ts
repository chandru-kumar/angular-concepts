import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  greet = 'Good morning';
  id = 100001;

  getMessage() {
    return "Message : This message has been returned by a method, which is called in String Interpolation"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
