import { Component, OnInit } from '@angular/core';

import SwiperCore, { Navigation, Pagination, SwiperOptions } from 'swiper';

SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  config: SwiperOptions = {
    
   
    pagination: {
      el: '.elem-swiper-pagination',
      clickable: true,
      type: 'bullets',
      bulletActiveClass: 'swiper-pagination-bullet-active'
    },
    scrollbar: { draggable: true },
  };
  images:string[]=[];
  
  constructor() { }

  ngOnInit(): void {
    this.images = [
      'assets/images/banner-1.jpg',
      'assets/images/banner-2.jpg',
      'assets/images/banner-3.jpg'
    ]
  }


}
