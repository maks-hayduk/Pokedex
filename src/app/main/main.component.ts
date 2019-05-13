import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  data: any;
  private startIndex = 0;
  constructor(private dataService: DataService) { 
    this.dataService.getAllPokemons(12, this.startIndex).subscribe(incomeData =>{
      this.data = incomeData.results;
      for(let item in this.data){
        this.dataService.getOnePokemon(this.data[item].url.slice(18)).subscribe(data => {
          this.data[item]['about'] = data;
        })
      }
      console.log(this.data);
    }) 
    
    
  }

  ngOnInit() {
  }

  public loadMore(): void {
    this.startIndex += 12;
    this.dataService.getAllPokemons(12,this.startIndex).subscribe(incomeData =>{
      this.data = this.data.concat(incomeData.results);
      for(let i = this.startIndex; i < 12 + this.startIndex; i ++){
        this.dataService.getOnePokemon(this.data[i].url.slice(18)).subscribe(data => {
          this.data[i]['about'] = data;
        })
      }
    }) 
  }

}
