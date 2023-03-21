import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit{
  router: any;
     
  constructor() { }
  todayDate = new Date();
  ngOnInit(): void {
    
  }
  login(){
    this.router.navigate(['franchies']);
  }
}
