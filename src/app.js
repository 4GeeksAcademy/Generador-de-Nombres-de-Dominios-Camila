import "bootstrap";
import "./style.css";



let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let tlds = [".com", ".net", ".us", ".io"]

for(let i = 0; i < pronoun.length; i++){
  for(let a = 0; a < adj.length; a++){
    for(let n = 0; n < noun.length; n++){
      for(let t = 0; t < tlds.length; t++){
        console.log(pronoun[i] + adj[a] + noun[n] + tlds[t]);
      }
    }
  }
}