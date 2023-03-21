import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent{
   ratingcontrol=5;
  totalrating= 0;
   ngOnInt(): void {
     const totalrating=0
    const Finalrating='any';

    let ratingcontrol=new FormControl(5);
    
  }
}

function GetRating(this: any) {
  this.ratingcontrol++;
        this.totalrating += this.ratingcontrol.value||0;
        //console.log(this.totalrating/this.ratingcount).to fixed(2)
}

