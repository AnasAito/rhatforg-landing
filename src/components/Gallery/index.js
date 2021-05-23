import React from "react";
import View from "./view";
let assets = require("./data/final_assets.json");
let entries = require("./data/final_entries.json");
console.log(assets["1CIAQi7LNlD8XZ1siOBMXq"]);
export default function index() {
  return <View entries={entries} assets={assets} />;
}
