import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  documents: Document[] = [
    {
      title: 'My first doc',
      description: "asdfasdfasdf asdf",
      file_url: 'http://google.com',
      updated_at: '8/23/18',
      image_url: 'http://google.com'
    },
    {
      title: 'My second doc',
      description: "asdfasdfasdf asdf",
      file_url: 'http://google.com',
      updated_at: '8/23/18',
      image_url: 'http://google.com'
    },
    {
      title: 'My third doc',
      description: "asdfasdfasdf asdf",
      file_url: 'http://google.com',
      updated_at: '8/23/18',
      image_url: 'http://google.com'
    }
  ]
}