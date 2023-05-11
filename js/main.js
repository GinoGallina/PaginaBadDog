d=document,
  w=window;

function camposRequired(form){
  const $inputs=form.querySelectorAll('.inp-req');
  console.log($inputs);
  $inputs.forEach(input=>{
    if(input.value===""){
      console.log('az');
      return false;
    }
  })
  console.log('azss');
  return true;
  }


// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      console.log(camposRequired(form))
      if (!(form.checkValidity() & camposRequired(form) )) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')
    }, false)
  })
})()

