import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Response } from './response.interface';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  q: string;
  albums: Response;

  constructor (private dataService: DataService) {}

  ngOnInit() {}

  onSubmit() {
    this.dataService.searchAlbums(this.q).subscribe((response: Response) => {
      this.albums = response;
    });
  }

}
