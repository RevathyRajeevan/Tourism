import { Component } from '@angular/core';
import { keraladata } from '../../models/keraladata.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  data: keraladata[] = [];
  keralaDetails: any;
 
  constructor() {
    this.fetchData();
    this.fetchKeralaDetails();
  }
  async fetchData() {
    const url = 'https://fluffy-reinvented-night.glitch.me/keraladata';
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      this.data = data;
     } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async fetchKeralaDetails() {
    const url = 'https://fluffy-reinvented-night.glitch.me/keralamore';
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const keralaDetails = await response.json();
      console.log(keralaDetails)
      this.keralaDetails = keralaDetails;
     } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}
