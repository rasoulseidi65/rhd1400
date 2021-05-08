import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {ViewportScroller} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  displayMobileMenu = false;
  items: MenuItem[];
  constructor(private viewportScroller: ViewportScroller,private route: Router) {
    this.items = [
      {
        label: 'صفحه اصلی',
        icon: 'pi pi-pw pi-home',
        command: event => this.route.navigate(['/'])
      },

      {
        label: 'خدمات',
        icon: 'pi pi-fw pi-list',
        items: [
          {
            label: 'طراحی وب سایت',
          },
          {
            label: 'طراحی اپلیکیشن موبایل'
          },
          {
            label: 'طراحی نرم افزارهای مالی'
          },

        ]
      },
      {
        label: 'استخدامی',
        icon: 'pi pi-fw pi-question-circle',
        command: event => this.route.navigate(['/faq'])
      },

      {
        label: 'درباره ما',
        icon: 'pi pi-fw pi-info-circle',
        command: event => this.route.navigate(['/about'])
      },
      {
        label: 'تماس با ما',
        icon: 'pi pi-fw pi-phone',
        command: event => this.route.navigate(['/contact'])
      }
    ];
  }

  ngOnInit(): void {
    // $(function() {
    //   $(document).scroll(function() {
    //     let nav = $('#menu-navbar');
    //     nav.toggleClass('scrolled', $(this).scrollTop() > nav.height());
    //   });
    // });
  }
  showMobileMenu(): void {
    this.displayMobileMenu = true;
  }
}
