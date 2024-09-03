import { Component, OnInit } from '@angular/core';
import { TableObjectService } from '../table-object.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.css'
})
export class AddProductsComponent implements OnInit {
  constructor(private service: TableObjectService) {

  }
  
  samples:any[] = [];
  ngOnInit(): void {
    this.service.getAllStudent()
              .subscribe({
                next:res=>{
                  this.samples=res
                  console.log("com",this.samples)
                },
                error:err=>console.log(err)
                
              } ); 
   }


}
