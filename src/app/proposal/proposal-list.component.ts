import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Proposal } from './proposal'
import { ProposalService } from './proposal.service';
import { timer } from 'rxjs';
import { timeInterval, pluck, take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html',
  styleUrls: ['proposal-list.component.css'],
  providers: [ ProposalService ]
})

export class ProposalListComponent implements OnInit {
  proposals: Proposal[]
  errorMessage: string;
  mode = "Observable";

  constructor(
    private proposalService: ProposalService,
    private router: Router
  ) {}
  ngOnInit() {
      var sourcef = timer(200, 100)
    .pipe(
      timeInterval(),
      pluck('interval'),
      take(3)
 )
      sourcef.subscribe(() => this.getProposals());
  }
  getProposals() {
    this.proposalService.getProposals()
      .subscribe(
          proposals => this.proposals = proposals,
          error => this.errorMessage = <any>error
        );
    }

  goToShow(proposal: Proposal): void {
    let link = ['/proposal', proposal.id];
    this.router.navigate(link);
  }
}