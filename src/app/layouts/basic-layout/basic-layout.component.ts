import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-basic-layout',
  templateUrl: './basic-layout.component.html'
})
export class BasicLayoutComponent {
  @Input() padding: Boolean = true

}
