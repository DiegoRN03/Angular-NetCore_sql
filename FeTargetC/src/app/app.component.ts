import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TargetCredComponent } from "./components/target-cred/target-cred.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TargetCredComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'FeTargetC';
}
