import { Component } from '@angular/core';
import { Search } from '../search/search';
import { UserList } from '../user-list/user-list';
import usersData from '../../assets/users.json';

@Component({
  selector: 'app-user',
  imports: [Search,UserList],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User {
  users = usersData
  filteredUsers = [...this.users]
  onSearch(email: string){
    this.filteredUsers = this.users.filter(user=> user.email.toLowerCase() === email.toLowerCase()) 
  }

  onReset() {
    this.filteredUsers = [...this.users];
  }
}
