import Map "mo:core/Map";
import Nat "mo:core/Nat";

module {
  type Case = {
    id : Nat;
    clientName : Text;
    caseNumber : Text;
    courtName : Text;
    nextHearingDate : Text;
    caseType : Text;
    notes : Text;
    created : Int;
  };

  type Actor = {
    cases : Map.Map<Nat, Case>;
    nextId : Nat;
  };

  public func run(old : {}) : Actor {
    {
      cases = Map.empty<Nat, Case>();
      nextId = 1;
    };
  };
};
