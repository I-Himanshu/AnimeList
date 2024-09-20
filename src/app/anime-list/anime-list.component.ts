import { Component, Input } from '@angular/core';
import { AnimeList } from './anime';
import { AnimeDetailComponent } from "../anime-detail/anime-detail.component";
import { Anime } from './anime.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-anime-list',
  standalone: true,
  imports: [CommonModule,AnimeDetailComponent],
  templateUrl: './anime-list.component.html',
  styleUrl: './anime-list.component.css'
})
export class AnimeListComponent {
  @Input() count = 3;
  get animeList(): Anime[] {
    return AnimeList.slice(0, this.count);
  }
}
