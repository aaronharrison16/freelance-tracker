import { Component } from '@angular/core';
import { Observable } from 'rxjs'
import { Proposal} from './proposal';
import { ProposalService } from './proposal.service';

@Component({
  selector: 'proposal-new',
  templateUrl: 'proposal-new.component.html',
  styleUrls: ['proposal-new.component.css']
})
export class ProposalNewComponent {
  proposal = new Proposal
  submitted: boolean = false;

  constructor(
    private proposalService : ProposalService
  ) {}

  createProposal(proposal) {
    this.submitted = true;
    this.proposalService.createProposat(proposal)
        .subscribe(
          data => { return true },
          error => {
            console.log("Error saving proposal");
            return Observable.throw(error);
          }
        );
  }
}