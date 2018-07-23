import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  q: string;
  albums: any;

  constructor (private dataService: DataService) {}

  ngOnInit() {}

  onSubmit() {
    this.dataService.searchAlbums(this.q).subscribe((albums) => {
      this.albums = albums;
    });
  }

}
