import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UserInterface } from 'src/app/Models/User';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-nav-shell',
  templateUrl: './nav-shell.component.html',
  styleUrls: ['./nav-shell.component.css']
})
export class NavShellComponent {

  title = 'Maniac TV'
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,private authentication: AuthenticationService) {}
  user: UserInterface;

  ngOnInit() {
    this.user = this.authentication.getCurrentUser();
    console.log(this.user);
  }
}
