import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookServiceService } from 'src/app/services/book-service.service';
import { book } from 'src/app/shared/models/book-model';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
})
export class AddBookComponent implements OnInit {
  public bookForm!: FormGroup;
  public editForm: boolean = false;
  public bookId: number | undefined;
  public book: book | null = null;
  public submitButton: string = '';

  constructor(
    private fb: FormBuilder,
    private bookService: BookServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initalizeNewForm();
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.bookId = +params['id'];
        this.editForm = true;
        this.editBook();
      }
    });
  }

  public initalizeNewForm() {
    this.submitButton = 'Create';
    this.bookForm = new FormGroup({
      title: new FormControl(''),
      Author: new FormControl(''),
      price: new FormControl(''),
      tags: new FormArray([new FormControl('')]),
    });
  }

  addTag() {
    const add = this.bookForm.get('tags') as FormArray;
    add.push(new FormControl(''));
  }

  public editBook() {
    this.submitButton = 'Update';
    if (this.bookId) {
      const book = this.bookService.editBook(this.bookId);
      if (book) {
        this.bookForm.patchValue({
          title: book?.title,
          Author: book?.Author,
          price: book?.price,
        });
      }
    }
  }
  public onSubmit() {
    if (this.editForm) {
      const updatedBook = this.bookForm.value;
      this.bookService.update(updatedBook);
    } else {
      const newBook: book = this.bookForm.value;
      this.bookService.addBook(newBook);
    }

    this.bookForm.reset();
  }
}
