import { Component } from '@angular/core';
import { AccountService } from '../app/services/account.service';
import { User } from '../app/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'finalApp';
  user: User;

  constructor(private accountService: AccountService) {
    this.accountService.user.subscribe(x => this.user = x);
}

logout() {
    this.accountService.logout();
}
}
