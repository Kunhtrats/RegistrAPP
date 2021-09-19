import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lobby-settings',
  templateUrl: './lobby-settings.page.html',
  styleUrls: ['./lobby-settings.page.scss'],
})
export class LobbySettingsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  home()
  {
    this.router.navigate(['/home']);
}
}
