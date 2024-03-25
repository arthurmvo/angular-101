import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css',
})
export class FirstComponentComponent {
  name: string = 'Arthur';
  age: number = 24;
  cars: string[] = ['Nivus', 'Chevrolet', 'Toyota', 'BMW'];
}
