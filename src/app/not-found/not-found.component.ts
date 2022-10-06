import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: '<div class="d-flex align-items-center justify-content-center vh-100">\n' +
    '            <div class="text-center">\n' +
    '                <h1 class="display-1 fw-bold">404</h1>\n' +
    '                <p class="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>\n' +
    '                <p class="lead">\n' +
    '                    The page you’re looking for doesn’t exist.\n' +
    '                  </p>\n' +
    '                <a routerLink="" class="btn btn-primary">Go Home</a>\n' +
    '            </div>\n' +
    '        </div>'
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
