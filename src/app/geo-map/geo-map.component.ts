import {Component, OnInit} from '@angular/core';
import {IMapOptions, MarkerTypeId} from 'angular-maps';

@Component({
  selector: 'app-geo-map',
  templateUrl: './geo-map.component.html',
  styleUrls: ['./geo-map.component.scss']
})
export class GeoMapComponent implements OnInit {

  private markerTypeId = MarkerTypeId;

  private options: IMapOptions = {
    disableBirdseye: false,
    disableStreetside: false,
    navigationBarMode: 1
  };

  constructor() {
  }

  ngOnInit() {
  }


  private _click() {
    console.log('hello world...');
  }
}
