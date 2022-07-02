class gIthub {
  
  constructor()
  {
        this.client_id='c3d17acedcc9acdc37c6';
        this.client_secret='eb9257e051ae9525f8ab4145800eef63cb1d46af';
        1this.repos_count=6; 
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
