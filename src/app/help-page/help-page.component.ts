import { Component, OnInit } from '@angular/core';
import { HelpPageService } from './help-page.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-help-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './help-page.component.html',
  styleUrl: './help-page.component.css'
})
export class HelpPageComponent implements OnInit {

  constructor(private logs: HelpPageService) {

  }
  sharps: any[] = []
  ngOnInit(): void {
    this.logs.getAllSampleDataSets()
      .subscribe({
        next: res => {
          this.sharps = res
          console.log("AbS", this.sharps)
        },
        error: err => console.log(err)

      })

  }

}

