const inputs=document.querySelectorAll('form.campo input');

//listener

inputs.forEach(input=>
    {
        input.addEventListener('blur',validarinput)
    });
inputs.forEach(input=>
    {
        input.addEventListener('blur',validarinput)
    });

    function validarinput(e)
    {
        const estados=['valido','no-valido'];
        let clase;
        if(e.target.value.length===0)
        {
            clase=estado[1];

        }
        else
        {
            clase=estado[0];
        }


        //inyectar dinamicamente el error
        if(clase==='no-valido')
        {
            // contruir un mensaje de error
            const errodiv=document.createElement('div');
            errordiv.classList.add('alerta');
            // insertat el error
            console.log(e.target);
        }
        else
        {
            // limpiar el mensaje
        }
    }