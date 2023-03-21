import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  

  constructor(private router:Router) { }

  ngOnInit(): void {
      
  }
  order1(){
    this.router.navigate(['booking'])
  }
   
  order2(){
    this.router.navigate(['booking'])
  }
   
  order3(){
    this.router.navigate(['booking'])
  }
  order4(){
    this.router.navigate(['booking'])
  }

  order5(){
    this.router.navigate(['booking'])
  }
  
  order6(){
    this.router.navigate(['booking'])
  }

  order7(){
    this.router.navigate(['booking'])
  }

  order8(){
    this.router.navigate(['booking'])
  }

  order9(){
    this.router.navigate(['booking'])
  }
}
