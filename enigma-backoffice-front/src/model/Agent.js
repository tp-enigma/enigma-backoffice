class Agent {
  constructor(nom, prenom, telephone, mail) {
    this.nom = nom;
    this.prenom = prenom;
    this.telephone = telephone;
    this.mail = mail;
  }

  getNom() {
    return this.nom
  }

  getPrenom() {
    return this.prenom
  }

  getTelephone() {
    return this.telephone
  }

  getMail() {
    return this.mail
  }
}
  
export default Agent;