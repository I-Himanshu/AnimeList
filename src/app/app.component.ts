import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimeListComponent } from "./anime-list/anime-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AnimeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AnimeList';
  count = 0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
}
