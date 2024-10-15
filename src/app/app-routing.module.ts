import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { BookListComponent } from './pages/book-list/book-list.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path:'add-book',
    component:AddBookComponent
  },
  {
    path:'book-list',
    component:BookListComponent
  },
  {
    path:'editbook/:id',
    component:AddBookComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path: '',
    pathMatch:'full',
    component:BookListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
