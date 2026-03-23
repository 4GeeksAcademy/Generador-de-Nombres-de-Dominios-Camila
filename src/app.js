import "bootstrap";
import "./style.css";

const pronouns = ['the', 'our'];
const adjectives = ['great', 'big'];
const nouns = ['jogger', 'racoon'];
const tlds = [".com", ".net", ".us", ".io"];

/*
Actualización del proyecto generador de dominios.
Se organizaron mejor los arrays y se añadieron pequeños
ajustes para mejorar la claridad del código.
El script genera posibles nombres de dominio combinando
pronombres, adjetivos, sustantivos y extensiones,
mostrando todas las combinaciones en la consola.
*/
for (let i = 0; i < pronouns.length; i++) {
  for (let a = 0; a < adjectives.length; a++) {
    for (let n = 0; n < nouns.length; n++) {
      for (let t = 0; t < tlds.length; t++) {
        console.log(pronouns[i] + adjectives[a] + nouns[n] + tlds[t]);
      }
    }
  }
}