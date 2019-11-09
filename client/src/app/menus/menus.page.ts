import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/operators';

export interface Menu {
  name?: string,
  beers?: any[],
  user: string
}

@Component({
  selector: 'app-menus',
  templateUrl: './menus.page.html',
  styleUrls: ['./menus.page.scss'],
})
export class MenusPage implements OnInit {

  menusObservable: Observable<Menu[]>;
  menus: Menu[];
  selectedMenu: Menu;
  username: string;

  constructor(private db: AngularFirestore,
    private authService: AuthService) { }

  async ngOnInit() {
    this.selectedMenu = {
      name: '',
      user: '',
      beers: [],
    }
    this.username = await this.authService.getUsername();
    this.menusObservable = this.db.collection<Menu>('user_menu', ref => ref.where('user', '==', this.username)).valueChanges();
    this.menusObservable.subscribe({
      next: (menus) => this.menus = menus,
      error: (err) => console.log(err)
    });
  }

  menuSelected(event) {
    this.selectedMenu = this.menus.find((menu) => menu.name === event.detail.value);
  }

}
