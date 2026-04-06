import Map "mo:core/Map";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Iter "mo:core/Iter";
import Nat "mo:core/Nat";
import Runtime "mo:core/Runtime";
import Migration "migration";

(with migration = Migration.run)
actor {
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

  let cases = Map.empty<Nat, Case>();
  var nextId = 1;

  func getCaseInternal(id : Nat) : Case {
    switch (cases.get(id)) {
      case (null) { Runtime.trap("Case with id " # id.toText() # " does not exist") };
      case (?c) { c };
    };
  };

  public shared ({ caller }) func addCase(caseData : Case) : async Nat {
    let id = nextId;
    let newCase : Case = {
      caseData with
      id;
      created = Time.now();
    };
    cases.add(id, newCase);
    nextId += 1;
    id;
  };

  public shared ({ caller }) func updateCase(id : Nat, caseData : Case) : async () {
    ignore getCaseInternal(id);
    let updatedCase : Case = {
      caseData with
      id;
    };
    cases.add(id, updatedCase);
  };

  public shared ({ caller }) func deleteCase(id : Nat) : async () {
    ignore getCaseInternal(id);
    cases.remove(id);
  };

  public query ({ caller }) func getCase(id : Nat) : async Case {
    getCaseInternal(id);
  };

  public query ({ caller }) func getAllCases() : async [Case] {
    cases.values().toArray();
  };
};

