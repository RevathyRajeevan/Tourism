import { Component } from '@angular/core';
import { district } from '../../models/district.interface';
import { RouterLink } from '@angular/router';
import{ Router }from'@angular/router';
import { FilterPipe } from '../../pipe/filter.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-district-list',
  standalone:true,
  imports: [RouterLink,FilterPipe,FormsModule],
  templateUrl: './district-list.component.html',
  styleUrl: './district-list.component.scss'
})
export class DistrictListComponent {
  district: district[] = [];
  toFilter: string='';

 
  constructor(private router:Router) {
    
    this.fetchData();
  }
  async fetchData() {
    const url = 'https://fluffy-reinvented-night.glitch.me/districts';
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
  viewDistrictDetails(id:number){
    this.router.navigate(['/districts',id])
  }
}
