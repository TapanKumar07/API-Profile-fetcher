class gIthub {
  
  constructor()
  {
    this.client_id='4a97ed420be071b335b9';
    this.client_secret='c43b475022e6dd0f4a0c126b58dab789fb3bd867';
    this.repos_count=6;
    
  }
  
  async getuser(user)
  {
    const reponseprofile= await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const responseRepo=await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const responseP= await reponseprofile.json();
    const responserepos= await responseRepo.json();

    return {
      responseP,
      responserepos
    }
  }

}