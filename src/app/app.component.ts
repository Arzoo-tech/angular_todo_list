import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoList';
  list: any[] = [];
  addTask(item: string) {
    console.log(item);
    this.list.push({id:this.list.length,name:item});
  }
  removeTask(id:number){
    console.log(id)
    this.list=this.list.filter(item=>item.id!==id)
  }

}
