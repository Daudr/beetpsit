import { Component, OnInit, AfterViewInit } from '@angular/core';

import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewInit {
  public results: any[];

  public arrayDate: Date[] = [];
  public arrayArnie: number[] = [];
  public arraySensore: number[] = [];

  public minDate: Date;
  public maxDate: Date;

  public minArnia: number;
  public maxArnia: number;

  public minSensore: number;
  public maxSensore: number;

  public singolaData: Date;

  public datada: Date;
  public dataa: Date;

  public arnia: number;

  public sensore: number;

  constructor(
    private db: DatabaseService
  ) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.db
			.query()
			.then((results: any[]) => {
				this.results = results.map((results) => {
					return results;
				});

        for (let i = 0; i < this.results.length; i++) {
            this.arrayDate.push(this.results[i].data);
            this.arrayArnie.push(this.results[i].id_box);
            this.arraySensore.push(this.results[i].id_sens);
        }

        this.minDate = Math.min.apply(null, this.arrayDate);
        this.maxDate = Math.max.apply(null, this.arrayDate);

        this.minArnia = Math.min.apply(null, this.arrayArnie);
        this.maxArnia = Math.max.apply(null, this.arrayArnie);

        this.minSensore = Math.min.apply(null, this.arraySensore);
        this.maxSensore = Math.max.apply(null, this.arraySensore);
			});
  }

  query () {
    this.results = null;
    this.db
			.query()
			.then((results: any[]) => {
				this.results = results.map((results) => {
					return results;
				});
			});
  }

}
