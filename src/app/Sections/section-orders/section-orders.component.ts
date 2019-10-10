import { Component, OnInit } from '@angular/core';
import { Order } from '../../Shared/order';

@Component( {
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: [ './section-orders.component.css' ]
} )
export class SectionOrdersComponent implements OnInit
{

  constructor() { }

  orders: Order[] = [
    {
      id: 1, customer:
        { id: 1, name: "Trestles Surf", email: 'trestlessurf@gmail.com', state: "CA" },
      total: 321, placed: new Date( 2019, 12, 1 ), fulfilled: new Date( 2019, 12, 3 ), status: "Completed"
    },

    {
      id: 2, customer:
        { id: 2, name: "Balloon Surf", email: 'trestlessurf@gmail.com', state: "CA" },
      total: 321, placed: new Date( 2019, 12, 1 ), fulfilled: new Date( 2019, 12, 3 ), status: "Completed"
    },
    {
      id: 3, customer:
        { id: 3, name: "Bodyboarder Surf", email: 'trestlessurf@gmail.com', state: "CA" },
      total: 321, placed: new Date( 2019, 12, 1 ), fulfilled: new Date( 2019, 12, 3 ), status: "Completed"
    },
    {
      id: 4, customer:
        { id: 4, name: "Kneeboarder Surf", email: 'trestlessurf@gmail.com', state: "CA" },
      total: 321, placed: new Date( 2019, 12, 1 ), fulfilled: new Date( 2019, 12, 3 ), status: "Completed"
    },
    {
      id: 5, customer:
        { id: 5, name: "Swimmer Surf", email: 'trestlessurf@gmail.com', state: "CA" },
      total: 321, placed: new Date( 2019, 12, 1 ), fulfilled: new Date( 2019, 12, 3 ), status: "Completed"
    }

  ];
  ngOnInit()
  {
  }

}
