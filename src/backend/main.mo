import Text "mo:core/Text";

actor {
  public query func greet(name : Text) : async Text {
    "Hello, " # name # "!";
  };
};
