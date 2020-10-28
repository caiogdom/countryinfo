import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Country } from 'src/app/shared/models/country.model';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.css']
})
export class CountryInfoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CountryInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public country: Country) { }

  ngOnInit(): void {
  }

}
