
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  games = [
    {
      id: '1',
      title: 'The Legend of Zelda: Breath of the Wild',
      genre: 'Action-adventure',
      platform: 'Nintendo Switch',
      releaseDate: '2017-03-03',
      description: 'An open-world game where players take on the role of Link to explore and save Hyrule.',
      imageUrl: 'assets/images/zelda.jpg',
    },
    {
      id: '2',
      title: 'Elden Ring',
      genre: 'Action RPG',
      platform: 'PlayStation, Xbox, PC',
      releaseDate: '2022-02-25',
      description: 'A dark fantasy action RPG with an expansive open world and challenging combat.',
      imageUrl: 'assets/images/elden_ring.jpg',
    },
    {
      id: '3',
      title: 'Minecraft',
      genre: 'Sandbox, Survival',
      platform: 'Multi-platform',
      releaseDate: '2011-11-18',
      description: 'A sandbox game where players can build and explore infinite worlds with creativity and survival elements.',
      imageUrl: 'assets/images/minecraft.jpg',
    },
  ];
  constructor() {}
}
