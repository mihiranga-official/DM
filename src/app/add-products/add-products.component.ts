import { Component, OnInit } from '@angular/core';
import { TableObjectService } from '../table-object.service';
import { CommonModule } from '@angular/common';
import { TableService } from '../table.service';
import { ProductService } from './add-products.service';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-products',
  standalone: true,
  imports: [CommonModule,RouterOutlet,ReactiveFormsModule],
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.css'
})
export class AddProductsComponent implements OnInit {
  constructor(private service: ProductService) {

  }

  datasets: any[] = [];
  selectValues: any[] = []
  hedaerVlaues: any[] = []
  ngOnInit(): void {
    this.hedaerVlaues = [
      { id: 1, name: "Janith" },
      { id: 2, name: "Hirun" },
      { id: 3, name: "Helitha" },
      { id: 4, name: "Thilina" },
      { id: 5, name: "Udesh" }
    ]
    this.selectValues = [
      { id: 1, name: "Janith" },
      { id: 2, name: "Hirun" },
      { id: 3, name: "Helitha" },
      { id: 4, name: "Thilina" },
      { id: 4, name: "Udesh" }
    ]





    this.service.getAllJobCard()
      .subscribe({
        next: res => {
          this.datasets = res
          console.log("com", this.datasets)
        },
        error: err => console.log(err)

      });
  }


}

//There four Types of bindings 
/* 1 intoploation
2 porperty binding
3 event binding 
4 two way bindiang */
