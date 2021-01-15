import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nopagefound',
  templateUrl: './nopagefound.component.html',
  styleUrls: ['./nopagefound.component.css'],
})
export class NopagefoundComponent implements OnInit {
  year: number = new Date().getFullYear();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  returnDashboard() {
    this.router.navigateByUrl('/dashboard');
  }
}
