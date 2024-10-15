import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BookServiceService } from 'src/app/services/book-service.service';
import { book } from 'src/app/shared/models/book-model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  searchText: string = '';
  displayedColumns: string[] = ['Title', 'Author', 'Price', 'symbol'];

  public bookList:book[] = []
  constructor(private bookService:BookServiceService) { }

  ngOnInit(): void {
    this.getBookList()
  }

  private getBookList() {
    this.bookList = this.bookService.getBookFromStorage()
  }

  delete(id:number) {
   let index = this.bookList.findIndex(item => item.id == id);
   this.bookList.splice(index,1);
   console.log(this.bookList);
   
   this.bookService.saveBooks(this.bookList)
   
  }

}
