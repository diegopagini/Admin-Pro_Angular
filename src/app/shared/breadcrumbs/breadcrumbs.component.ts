import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css'],
})
export class BreadcrumbsComponent implements OnDestroy {
  public titulo: string;
  public tituloSubs: Subscription;

  constructor(private router: Router, private route: ActivatedRoute) {
    console.log(this.route.snapshot.children[0].data);

    this.tituloSubs = this.getDataRuta().subscribe((data) => {
      this.titulo = data.titulo;
      document.title = `AdminPro - ${data.titutlo}`;
    });
  }
  ngOnDestroy() {
    this.tituloSubs.unsubscribe();
  }

  getDataRuta() {
    return this.router.events.pipe(
      filter((event) => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    );
  }
}
