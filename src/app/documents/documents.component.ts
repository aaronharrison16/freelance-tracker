import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.css']
})
export class DocumentsComponent {
  pageTitle: string = 'Documents Dashboard'
  documents: Document[] = [
    {
      title: 'My first doc',
      description: "asdfasdfasdf asdf",
      file_url: 'http://google.com',
      updated_at: '8/23/18',
      image_url: 'https://spzone-simpleprogrammer.netdna-ssl.com/wp-content/uploads/2017/07/Freelancer-What-You-Want-768x432.png'
    },
    {
      title: 'My second doc',
      description: "asdfasdfasdf asdf",
      file_url: 'http://google.com',
      updated_at: '8/23/18',
      image_url: 'https://spzone-simpleprogrammer.netdna-ssl.com/wp-content/uploads/2017/07/Freelancer-What-You-Want-768x432.png'
    },
    {
      title: 'My third doc',
      description: "asdfasdfasdf asdf",
      file_url: 'http://google.com',
      updated_at: '8/23/18',
      image_url: 'https://spzone-simpleprogrammer.netdna-ssl.com/wp-content/uploads/2017/07/Freelancer-What-You-Want-768x432.png'
    }
  ]
}