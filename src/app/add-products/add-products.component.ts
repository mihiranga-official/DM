import { Component, OnInit } from '@angular/core';
import { TableObjectService } from '../table-object.service';
import { CommonModule } from '@angular/common';
import { TableService } from '../table.service';

@Component({
  selector: 'app-add-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.css'
})
export class AddProductsComponent implements OnInit {
  constructor(private service: TableService) {

  }
  
  Datas:any[] = [];
  ngOnInit(): void {
    this.service.getAllDataSet()
              .subscribe({
                next:res=>{
                  this.Datas=res
                  console.log("com",this.Datas)
                },
                error:err=>console.log(err)
                
              } ); 
   }


}
