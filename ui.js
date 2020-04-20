class UI {
    constructor()
    {
        this.field=document.querySelector('.profile-data');
    }
   
   showprofile(user)
   {
       this.field.innerHTML=`
         <div class="container">
            <div class="row mt-3">
               <div class="col-md-3">
                  <img src=${user.avatar_url} class="img-fluid">
                  <a href="${user.html_url}" class=" btn btn-info mt-3">View Profile</a>
               </div>
               <div class="col-md-9">
                   <span class="badge badge-secondary  p-4 mr-5 px-auto">Followers  ${user.followers}</span>
                   <span class="badge badge-primary p-4 mr-5 px-auto">Following  ${user.following}</span>
                   <span class="badge badge-success p-4 mr-5 px-auto">Gists  ${user.public_gists}</span>
                   <span class="badge badge-info p-4  px-auto">Repos  ${user.public_repos}</span>
         
            
                <table class="table table-hover table-danger mt-5">
                 <thead>
                   <th scope="col">Location</th>
                   <th scope="col">Name</th>
                   <th scope="col">Created On</th>
                   <th scope="col">id</th>
                  </thead>
                  <tbody>
                     <tr class="table-success">
                       <th scope="row">${user.location}</th>
                       <td>${user.name}</td>
                       <td>${user.created_at}</td>
                       <td>${user.id}</td>
                      </tr>
                  </tbody>
                </table>
               </div>
        </div>
        </div>
        <br><br>
        <h1 class="text-secondary text-center mt-5" id="repos"> Latest Repos</h1>
       
       
       `;

   }

   shoerepos(data)
   {
     let output='';
     data.forEach((repo)=> {
       output+=`
           <div class="card card-body bg-success mb-2">
             <div class="row">
                <div class="col-md-6">
                   <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                </div>
                <div class="col-md-6">
                   <span class="badge badge-info">Stars:${repo.stargazers_count}</span>
                   <span class="badge badge-info">Watchers :${repo.watchers_count}</span>
                   <span class="badge badge-info">Forks :${repo.forks_count}</span>
                </div>
             </div>
           </div>
            
       
       
       `;
     })
     document.getElementById('repos').innerHTML=output;

   }

   showerror(message,clasi)
   {
     this.clearerror();
     const div1=document.createElement('div');
     div1.className=clasi;
     div1.appendChild(document.createTextNode(message));
     const one =document.querySelector('.Searchy');
     const two=document.querySelector('.container');
     
     two.insertBefore(div1,one);
     setTimeout(() => {
       this.clearerror();
     }, 2000);


   }

   clearerror()
   {

     const aler=document.querySelector('.alert');
     if(aler)
     {
       aler.remove();
     }
    }
    clearprofile()
    {
      this.field.innerHTML='';
    }
}
