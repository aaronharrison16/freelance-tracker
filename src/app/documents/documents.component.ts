import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Document } from './document';
import { DocumentService } from './document.service';
import { timer } from 'rxjs';
import { timeInterval, pluck, take} from 'rxjs/operators';
@Component({
    selector: 'documents',
    templateUrl: 'documents.component.html',
    styleUrls: ['documents.component.css'],
    providers: [ DocumentService ]
})
export class DocumentsComponent implements OnInit {
    pageTitle: string = "Document Dashboard"
    documents: Document[];
    errorMessage: string;
    mode = "Observable";
    constructor(
        private documentService: DocumentService,
    ) {}
    ngOnInit() {
        var sourcef = timer(200, 100)
      .pipe(
        timeInterval(),
        pluck('interval'),
        take(3)
  )
        sourcef.subscribe(() => this.getDocuments());
    }
    getDocuments() {
        this.documentService.getDocuments()
                .subscribe(
                    documents => this.documents = documents,
                    error => this.errorMessage = <any>error
                );
    }
}