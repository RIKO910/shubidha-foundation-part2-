const btn =document.getElementById('btn');

btn.addEventListener('click', ()=>{
    console.log('ok')
    const form = document.getElementById('form');
    if(form.style.display == 'none'){
        form.style.display = 'block';
    }
    else
    {
        form.style.display = 'none';
    }
})