function preventDefault(evento){
  if(event.preventDefault){ evento.preventDefault() }else{ evento.returnValue = false; }
}

var show_popUp = {
  addClass : function(obj,clase){
    if( !obj.className.match(clase) ){
      obj.className = obj.className + ' ' + clase;
    }
  },
  rmClass : function(obj,clase){
    //quita la clase
    obj.className = obj.className.replace(clase,'');
    //quita los dobles espacios
    obj.className = obj.className.replace('  ',' ');
    vars.image_src.style.display="none"
    vars.iframe_src.style.display="none"
  },
  view : function(este,evento){
    var vars = ( show_popUp.vars )? show_popUp.vars : show_popUp.ini();
    //evita click
    preventDefault(evento);
    var href = este.href || '';
    if( href.match(/\.((jpe?g)|(png)|(gif))$/i) ){
      vars.image_src.src = href;
      vars.image_src.style.display="block"
    }else{
      vars.iframe_src.src = href;
      vars.iframe_src.style.display="block"
    }
    //muestra popup
    show_popUp.addClass(vars.body,'show-popUp');
  },
  hide : function(este,evento){
    var vars = ( show_popUp.vars )? show_popUp.vars : show_popUp.ini();
    var vars = show_popUp.vars;
    //evita click
    preventDefault(evento);
    //copia contenido
    //oculta popup
    show_popUp.addClass(vars.body,'hide-popUp');
    setTimeout(function(){
      show_popUp.rmClass(vars.body,'show-popUp');
      show_popUp.rmClass(vars.body,'hide-popUp');
    },690);
  },
  ini: function(){
    show_popUp.vars = {};
    vars = show_popUp.vars;
    vars.body = document.body;
    vars.popUp = document.getElementById('nrno-popUp');
    vars.popUp_iframe = document.getElementById('popUp-iframe');
    vars.iframe_src = document.getElementById('iframe-src');
    vars.image_src = document.getElementById('image-src');
    vars.popUp_quit = document.getElementById('popup-quit');
    return show_popUp.vars;
  }
};
document.addEventListener('load',function(){ show_popUp.ini() });
