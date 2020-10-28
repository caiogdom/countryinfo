import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CountryInfoComponent } from './country-info/country-info.component';
import { Country } from 'src/app/shared/models/country.model';
import { CountryService } from 'src/app/shared/services/country.service';
import { HistoryService } from 'src/app/shared/services/history.service';
import { History } from 'src/app/shared/models/history.model';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  countryName: string;
  country: Country;

  displayedColumns: string[] = ['country', 'date'];
  dataSource: History[];

  busy: Subscription;

  constructor(public dialog: MatDialog,
    private countryService: CountryService,
    private historyService: HistoryService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  getByName() {
    this.busy = this.countryService.getByName(this.countryName).subscribe(
      res => {
        this.country = res;
        this.openDialog();
      }, err => {
        this.toastr.error(err.error.message, 'Error ' + err.error.statusCode);
      }
    );
  }

  getHistory() {
    this.busy = this.historyService.getHistory().subscribe(
      res => {
        this.dataSource = res.content;
      }, err => {
        this.toastr.error(err.error.message, 'Error ' + err.error.statusCode);
      }
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CountryInfoComponent, {
      data: this.country,
      width: '50%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
