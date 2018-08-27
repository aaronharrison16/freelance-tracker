import { Component } from '@angular/core';
import { Proposal } from './proposal'

@Component({
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html',
  styleUrls: ['proposal-list.component.css']
})

export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(12, 'Company', 'https://aaronjharrison.com', 'Ruby on Rails', 72, 40, 12, 'aaron.harrison.j@gmail.com')
  proposalTwo: Proposal = new Proposal(14, 'Company 2', 'https://aaronjharrison.com', 'Ruby on Rails', 69, 48, 20, 'aaron.harrison.j@gmail.com')
  proposalThree: Proposal = new Proposal(77, 'Company 3', 'https://aaronjharrison.com', 'Ruby on Rails', 45, 87, 38, 'aaron.harrison.j@gmail.com')

  proposals: Proposal[] = [
    this.proposalOne, 
    this.proposalTwo, 
    this.proposalThree
   ]
}