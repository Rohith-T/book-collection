import { Injectable } from '@angular/core';
import { book } from '../shared/models/book-model';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  private key = 'bookcollection'
  constructor() { }


  public getBookFromStorage():book[] {
    const storeBooks =  localStorage.getItem(this.key)
    return storeBooks? JSON.parse(storeBooks): []
  }
 
  public addBook(newbook:book) {
    const currentBooks = this.getBookFromStorage()
    const timeStamp = new Date().getTime();
    newbook.id = timeStamp;
    const updatedBooks = [...currentBooks, newbook]
    this.saveBooks(updatedBooks)
    //localStorage.setItem(this.key, JSON.stringify(updatedBooks))
  }

  public editBook(id:number) {
     const books = this.getBookFromStorage()
     const selectedBook = books.find(item => item.id == id)
     return selectedBook;
  }

  public update(updatedBook:book){
    const currentBooks = this.getBookFromStorage();
    let updatedBooks:Array<book> = []
     updatedBooks = currentBooks.map(book => {
      if (book.id === updatedBook.id) {
         book.title = updatedBook.title,
         book.Author = updatedBook.Author,
         book.price = updatedBook.price
      }
      return book
    });
     this.saveBooks(updatedBooks)
  }

  public saveBooks(books: book[]) {
    localStorage.setItem(this.key, JSON.stringify(books))
  }
}
