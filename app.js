const gitti= new gIthub;
const ui=new UI;


const searchii=document.getElementById('searchi');
searchii.addEventListener('keyup', (e) =>
{
  const typetext=e.target.value;
  if(typetext!='')
  {
      gitti.getuser(typetext)
      .then(d=> {
        if(d.responseP.message==="Not Found")
        {
            ui.showerror("User Not Found","alert alert-danger");
        }
        else
        {
          ui.showprofile(d.responseP);
          ui.shoerepos(d.responserepos);
          //console.log(d.responserepos);
        }
      })
  }
  else
  {
    ui.showerror("Type Something",'alert alert-success');

  }

})