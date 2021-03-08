import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { StaticdataService } from '../staticdata.service';
import { Pipe, PipeTransform } from '@angular/core';



@Pipe({ name: 'SearchFilter' })
export class FilterPipe implements PipeTransform {
  /**
   * Transform
   *
   * @param {any[]} items
   * @param {string} searchText
   * @returns {any[]}
   */
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter((it: string) => {
      return it['name'].toLowerCase().includes(searchText);
    });
  }
}
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList: any;
  @Input() SearchTerm;
  constructor(private staticData: StaticdataService) {

  }

  ngOnInit(): void {
    this.userList = this.staticData.userList;
  }


}
