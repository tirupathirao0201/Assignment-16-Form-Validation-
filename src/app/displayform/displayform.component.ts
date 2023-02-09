import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-displayform',
  templateUrl: './displayform.component.html',
  styleUrls: ['./displayform.component.css']
})
export class DisplayformComponent {
  data:any;
  AdditionalValue:any;
// Getting the Values from app component on routing and taking in a variable to display in html
  constructor(private router: Router, private route:ActivatedRoute){
    this.data = this.router.getCurrentNavigation()?.extras.state?.['submittedData'];
    this.AdditionalValue = this.router.getCurrentNavigation()?.extras.state?.['AdditionalValue'];
    console.log(this.router.getCurrentNavigation());
    console.log("dis"+this.data)
  }
  
}
