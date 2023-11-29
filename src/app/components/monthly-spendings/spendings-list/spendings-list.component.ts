import { Component } from '@angular/core';
import { Spending } from '../../model/spendings';

@Component({
  selector: 'app-spendings-list',
  templateUrl: './spendings-list.component.html',
  styleUrls: ['./spendings-list.component.css']
})
export class SpendingsListComponent {

  spendings: Spending[] = [{
    product: 'Sabão em pó',
    category: 'Limpeza',
    value: 8.99
  },
  {
    product: 'Nissin Miojo',
    category: 'Podridão',
    value: 9.99
  }];

  readonly displayedColumns = ['product', 'category', 'value']

}
