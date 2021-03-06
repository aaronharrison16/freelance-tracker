import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { from, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { Proposal } from './proposal';
import { ProposalService } from './proposal.service'

@Component({
  selector: 'proposal-show',
  templateUrl: 'proposal-show.component.html',
  styleUrls: ['proposal-show.component.css'],
  providers: [ ProposalService ]
})
export class ProposalShowComponent implements OnInit {
  constructor(
    private http: Http,
    private proposalService: ProposalService,
    private route: ActivatedRoute
  ) {}

  @Input()
  proposal: Proposal;

  ngOnInit(): void {
    let proposalRequest = this.route.params
        .pipe(mergeMap((params: Params) =>
          this.proposalService.getProposal(+params['id'])));
    proposalRequest.subscribe(response => this.proposal = response.json());
  }
}