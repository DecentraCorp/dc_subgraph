import { BigInt } from "@graphprotocol/graph-ts";
import {
  DecentraCore,
  NewProposal,
  NewVote,
  ProposalApproved
} from "../generated/DecentraCore/DecentraCore";
import { Account, Proposal, Vote } from "../generated/schema";

export function handleNewProposal(event: NewProposal): void {
  let account = Account.load(event.params.creator.toHex());
  if (account == null) {
    account = new Account(event.params.creator.toHex());
  }

  let prop = new Proposal(event.params.proposalId.toHex());

  prop.creator = account.id;
  prop.target = event.params.target;
  prop.timeCreated = event.block.timestamp;
  prop.executed = false;
  prop.proposalPassed = false;
  prop.proposalHash = event.params.propHash;
  prop.callData = event.params.call_data;

  prop.save();
  account.save();
}

export function handleNewVote(event: NewVote): void {
  let account = Account.load(event.params.voter.toHex());
  if (account == null) {
    account = new Account(event.params.voter.toHex());
  }
  let prop = Proposal.load(event.params.proposalId.toHex());
  let vote = new Vote(
    event.params.voter.toHex() + " " + event.params.proposalId.toHex()
  );

  vote.voter = account.id;
  vote.inFavor = event.params.vote;
  vote.proposal = prop.id;

  vote.save();
  prop.save();
  account.save();
}

export function handleProposalApproved(event: ProposalApproved): void {
  let prop = Proposal.load(event.params.proposalId.toHex());
  prop.executed = true;

  if (event.params.success) {
    prop.proposalPassed = true;
  } else {
    prop.proposalPassed = false;
  }

  prop.save();
}
