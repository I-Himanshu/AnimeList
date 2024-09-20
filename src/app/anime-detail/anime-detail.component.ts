import { Component, Input } from '@angular/core';
import { Anime } from '../anime-list/anime.model';

@Component({
  selector: 'app-anime-detail',
  standalone: true,
  imports: [],
  templateUrl: './anime-detail.component.html',
  styleUrl: './anime-detail.component.css'
})
export class AnimeDetailComponent {
  @Input() anime!: Anime;
  // if not anime then dont show
  
}
