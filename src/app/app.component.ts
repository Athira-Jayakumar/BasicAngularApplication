import { Component, OnInit } from '@angular/core';
import { Authservice } from './auth/auth.service';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title='BasicAngularApplication';

  constructor(private authService: Authservice,private loggingService: LoggingService) {}


  ngOnInit(){
    this.authService.autoLogin();
    this.loggingService.printlog('Hello from AppComponent ngOnInit');
  }
}
