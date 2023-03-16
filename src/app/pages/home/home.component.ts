import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  team: any[] = [
    {
      name: 'Daniel Hernadez',
      avatar: 'https://avatars.githubusercontent.com/u/58312422?v=4',
      rol: '-',
      url: "https://github.com/DanielHF2403"
    },
    {
      name: 'Luis Castillo',
      avatar: 'https://avatars.githubusercontent.com/u/123513983?v=4',
      rol: 'Frontend Developer',
      url: "https://github.com/werever-092"
    },
    {
      name: 'Gerardo Valencia',
      avatar: 'https://avatars.githubusercontent.com/u/72474427?v=4',
      rol: '-',
      url: "https://github.com/GerardoValencia"
    },
    {
      name: 'Hector Gonzalez',
      avatar: 'https://avatars.githubusercontent.com/u/124411546?v=4',
      rol: '-',
      url: "https://github.com/HJGH441"
    },
    {
      name: 'Aurelio Marín',
      avatar: 'https://avatars.githubusercontent.com/u/72474524?v=4',
      rol: 'Backend Developer',
      url: "https://github.com/vKurama7u7v"
    },
  ];
}
