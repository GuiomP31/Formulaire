/********************* Pour Valider choix dans la liste déroulante ********************************************************************* */
document.getElementById('valeurs').addEventListener('change', function () {
  //document.write("Vous avez choisis :  ", this.value);
  // alert('le niveau requis pour la formation est de : ', valeurs);
  console.log('le niveau requis pour la formation est de : ', this.value);
});
/********************* Pour Valider choix dans la liste déroulante ********************************************************************* */



/********************* Pour Valider choix avec les boutons Radios ********************************************************************* */
function ValiderBouton() {
  var radiob1 = document.getElementById('ensalle');
  var radiob2 = document.getElementById('endistanciel');
  if (radiob1.checked == true) {
    console.log('Vous avez choisis le type d\'organsation de votre formation :', radiob1.value);
  } else if (radiob2.checked == true) {
    console.log('Vous avez choisis le type d\'organsation de votre formation :', radiob2.value);
  } else {
    document.getElementById('message').innerHTML = ('Impossibilité de valider !! Vous devez choisir le type d\'organsation de votre formation en premier.');
    alert('Impossibilité de valider !! Vous devez choisir le type d\'organsation de votre formation en premier.');
  }
}
/********************* Pour Valider choix avec les boutons Radios ********************************************************************* */



/********************* Pour Créer et Télécharger un fichier ****************************************************************************/
(function createFile() {
  var textFile = null,
    makeTextFile = function (text) {
      var data = new Blob([text], {
        type: 'text/plain'
      });
      // Blob : binary large object
      //Si on remplace un fichier généré précédemment, nous devons
      //révoquer manuellement l'URL de l'objet pour éviter les fuites de mémoire.
      if (textFile !== null) {
        window.URL.revokeObjectURL(textFile);
      }
      textFile = window.URL.createObjectURL(data);
      return textFile;
    };
  var create = document.getElementById('creer');
  var textbox = document.getElementById('textbox');
  create.addEventListener('click', function () {
    var link = document.getElementById('telecharger');
    link.href = makeTextFile(textbox.value);
    link.style.display = 'block';
  }, false);
})();
/********************* Pour Créer et Télécharger un fichier ****************************************************************************/

