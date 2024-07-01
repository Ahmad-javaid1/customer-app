import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  // standalone: true,
  // imports: [
  //   CommonModule,
  //   MatButtonModule,
  //   MatListModule,
  //   MatSnackBarModule
  // ]
})
export class ItemListComponent implements OnInit {
  items: any[] = [];

  constructor(
    private apiService: ApiService,
    private snackBar: MatSnackBar // For displaying snack bar messages
  ) {}

  ngOnInit() {
    this.fetchItems(); // Fetch items on component initialization
  }

  fetchItems() {
    this.apiService.getItems().subscribe(
      data => {
        this.items = data;
      },
      error => {
        console.error('Error fetching items:', error);
        this.snackBar.open('Failed to fetch items', 'Close', { duration: 3000 });
      }
    );
  }

  addItem(newItem: any) {
    this.apiService.createItem(newItem).subscribe(
      data => {
        this.items.push(data); // Add new item to local array
        console.log('Item added successfully:', data);
        this.snackBar.open('Item added successfully', 'Close', { duration: 3000 });
      },
      error => {
        console.error('Error adding item:', error);
        this.snackBar.open('Failed to add item', 'Close', { duration: 3000 });
      }
    );
  }

  updateItem(updatedItem: any) {
    const id = updatedItem.id; // Assuming item has an 'id' property
    this.apiService.updateItem(id, updatedItem).subscribe(
      data => {
        this.items = this.items.map(item => (item.id === id ? data : item)); // Update local array with updated item
        console.log('Item updated successfully:', data);
        this.snackBar.open('Item updated successfully', 'Close', { duration: 3000 });
      },
      error => {
        console.error('Error updating item:', error);
        this.snackBar.open('Failed to update item', 'Close', { duration: 3000 });
      }
    );
  }

  deleteItem(id: string) {
    this.apiService.deleteItem(id).subscribe(
      () => {
        this.items = this.items.filter(item => item.id !== id); // Remove deleted item from local array
        console.log('Item deleted successfully:', id);
        this.snackBar.open('Item deleted successfully', 'Close', { duration: 3000 });
      },
      error => {
        console.error('Error deleting item:', error);
        this.snackBar.open('Failed to delete item', 'Close', { duration: 3000 });
      }
    );
  }
}
