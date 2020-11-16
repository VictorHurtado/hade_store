const btnCategorias= document.getElementById('btn-categorias'),
    btnCerrarMenu= document.getElementById('btn-menu-cerrar'),
    grid=document.getElementById('grid'),
    contenedorEnlacesNav = document.querySelector('#menu .contenedor-enlaces-nav'),
    contenedorSubcategorias=document.querySelector('#grid .contenedor-subcategorias'),
    dispositivoMovil=()=> window.innerWidth<=800;



btnCategorias.addEventListener('mouseover',()=>{
    if(!dispositivoMovil()){
        grid.classList.add('activo');
    }    
});

grid.addEventListener('mouseleave',()=>{
    if(!dispositivoMovil()){
         grid.classList.remove('activo');
    }
});
//accediendo al objetivo para saber que categoria esta pasando el cursor
document.querySelectorAll('#menu .categorias a').forEach((value)=>{
    value.addEventListener('mouseenter',(categoria)=>{
        if(!dispositivoMovil()){
            document.querySelectorAll('#menu .subcategoria').forEach((subcategoria)=>{
                // console.log(subcategoria.dataset.categoria);
                subcategoria.classList.remove('activo');
                if(subcategoria.dataset.categoria == categoria.target.dataset.categoria){
                    subcategoria.classList.add('activo');
                }
            });
        }
        
    })
  
});

document.querySelector('#btn-menu-barras').addEventListener('click',(click)=>{
    click.preventDefault();
    if(contenedorEnlacesNav.classList.contains('activo')){
        contenedorEnlacesNav.classList.remove('activo');
        document.querySelector('body').style.overflow='visible';
    
    }else{
        contenedorEnlacesNav.classList.add('activo');
        document.querySelector('body').style.overflow='hidden';
    }
    
});
// bototn para desplegar boton de categorias
btnCategorias.addEventListener('click',(e)=>{
    e.preventDefault();
    grid.classList.add('activo');
    btnCerrarMenu.classList.add('activo');
});
//boton regresar en categorias
document.querySelector('#grid .categorias .btn-regresar').addEventListener('click',(e)=>{
    e.preventDefault();
    grid.classList.remove('activo');
    btnCerrarMenu.classList.remove('activo');

});
document.querySelectorAll('#menu .categorias a').forEach((value)=>{
    value.addEventListener('click',(categoria)=>{
        if(dispositivoMovil()){
            contenedorSubcategorias.classList.add('activo');
            document.querySelectorAll('#menu .subcategoria ').forEach((subcategoria)=>{
                subcategoria.classList.remove('activo');
                if(subcategoria.dataset.categoria==categoria.target.dataset.categoria){
                    subcategoria.classList.add('activo');
                }
            })
        }   
        
    })
  
});
document.querySelectorAll('#grid .contenedor-subcategorias .btn-regresar').forEach((boton)=>{
    boton.addEventListener('click',(e)=>{
        e.preventDefault();
        contenedorSubcategorias.classList.remove('activo');

    });
});
btnCerrarMenu.addEventListener('click',(e)=>{
    e.preventDefault();
    document.querySelectorAll('#menu .activo').forEach((elemento)=>{
        elemento.classList.remove('activo');
    });
    document.querySelector('body').style.overflow='visible';

});
