import { Component } from '@angular/core';
import { district } from '../../models/district.interface';
import { ActivatedRoute } from '@angular/router';
import { HoverDirective } from '../../directive/hover.directive';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-districts',
  standalone: true,
  imports: [HoverDirective,FormsModule],
  templateUrl: './districts.component.html',
  styleUrl: './districts.component.scss'
})
export class DistrictsComponent {
  district: district[]  | any = [];
  districtID:number=0

 
  constructor(private route: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.districtID = +params['id'];
      this.fetchData(this.districtID);
    });
  }

  async fetchData(id:number) {
    const url = `https://fluffy-reinvented-night.glitch.me/districts/${id}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      console.log(data)
      this.district = data;
     } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}
