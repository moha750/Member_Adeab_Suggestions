var create_workspace=document.querySelector(".create-workspace");
var create_workspace_none=document.querySelector(".create-workspace-none");
var next_click=document.querySelectorAll(".next-click");
var back_click=document.querySelectorAll(".back-click");
var finish_click=document.querySelector(".finish-click");
var main_form=document.querySelectorAll(".main");
var list=document.querySelectorAll(".progress-bar li")
let formnumber=0;

create_workspace_none.addEventListener('click',function(){

   formnumber++;
   updateform();
   progress_forward();
});


create_workspace.addEventListener('click',function(){
    if(!validateform()){
        return false;
    }
   formnumber++;
   updateform();
   progress_forward();
});

next_click.forEach(function(next_page){
    next_page.addEventListener('click',function(){
         if(!validateform()){
        return false;
        }
         formnumber++;
         updateform();
         progress_forward();
    });
});


back_click.forEach(function(back_page){
    back_page.addEventListener('click',function(){
         formnumber--;
         updateform();   
    });
});

finish_click.addEventListener('click',function(){
  if(!validateform()){
        return false;
        }
         formnumber++;
         updateform();
         var remove_progress=document.querySelector(".progress-bar");
         remove_progress.classList.add('d-none'); 
});
function progress_forward(){
    list[formnumber].classList.add('active');
}



function updateform(){
    main_form.forEach(function(main_number){ 
       main_number.classList.remove('active'); 
    });
    main_form[formnumber].classList.add('active');
  
   
} 



 
function validateform(){
    validate=true;
    var validate_form=document.querySelectorAll(".main.active #input");
    validate_form.forEach(function(val){
        val.classList.remove('warning');
        if(val.hasAttribute('require')){
            if(val.value.length==0){
                validate=false;
                val.classList.add('warning');
            }
        }
    });
    return validate;
}



// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

