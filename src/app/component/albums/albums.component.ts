import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Response } from './response.interface';
import { Album } from './album.interface';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  q: string;
  response: Response;
  albums: [Album];

  constructor (private dataService: DataService) {}

  ngOnInit() {}

  onSubmit() {
    this.dataService.searchAlbums(this.q).subscribe((response: Response) => {
      this.response = response;
      this.albums = response.items;
    });
  }

}
