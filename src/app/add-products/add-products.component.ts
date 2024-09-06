import { Component, OnInit } from '@angular/core';
import { TableObjectService } from '../table-object.service';
import { CommonModule } from '@angular/common';
import { TableService } from '../table.service';
import { ProductService } from './add-products.service';

@Component({
  selector: 'app-add-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.css'
})
export class AddProductsComponent implements OnInit {
  constructor(private service: ProductService) {

  }

  //datasets: any[] = [];
  selectValues: any[] = []
  ngOnInit(): void {
this.selectValues=[
  {id:1,name:"Janith"},
  {id:2,name:"Hirun"},
  {id:3,name:"Helitha"},
  {id:4,name:"Thilina"},
  {id:4,name:"Udesh"}
]



    // this.service.getAllJobCard()
    //   .subscribe({
    //     next: res => {
    //       this.datasets = res
    //       console.log("com", this.datasets)
    //     },
    //     error: err => console.log(err)

    //   });
  }


}
