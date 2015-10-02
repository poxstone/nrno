;
var util = {
  preventDefault: function(evento){
    if(event.preventDefault){ evento.preventDefault() }else{ evento.returnValue = false; }
  },
  addClass: function(obj,clase){
    if( !obj.className.match(clase) ){
      obj.className = obj.className + ' ' + clase;
    }
  },
  rmClass: function(obj,clase){
    //quita la clase
    obj.className = obj.className.replace(clase,'');
    //quita los dobles espacios
    obj.className = obj.className.replace('  ',' ');
  },
  tgClass: function(obj,clase){
    if(obj.className.match(clase)){
      util.rmClass(obj,clase);
    }else{
      util.addClass(obj,clase);
    }
  },
  use_jquery: function(){
    if ( !$ && jQuery ){
      $ = jQuery;
    }else{
      console.log('Query no existe');
    }
  }
};

var show_popUp = {
  view : function(este,evento){
    //evita click
    util.preventDefault(evento);

    var is_biblio_item = (este.parentNode.tagName.match(/li/i))? true : false;

    //Declaramos variables
    var vars = ( show_popUp.vars )? show_popUp.vars : show_popUp.ini();

    //valida si es un elemento de biblioteca o un botón de banner
    if(is_biblio_item){
      //pega citar
      vars.popUp_pie.innerHTML = este.getElementsByTagName('figcaption')[0].innerHTML;
    }

    //pega url en img o en iframe
    var href = este.getAttribute('href') || '';
    if( href.match(/\.((jpe?g)|(png)|(gif))$/i) ){
      vars.image_src.src = href;
      vars.image_src.style.display="block";
    }else{
      vars.iframe_src.src = href;
      vars.iframe_src.style.display="block";
    }

    //muestra popup
    util.addClass(vars.body,'show-popUp');
  },
  hide : function(este,evento){
    //evita click
    util.preventDefault(evento);

    //declaramos variable
    var vars = ( show_popUp.vars )? show_popUp.vars : show_popUp.ini();
    var vars = show_popUp.vars;

    //oculta popup
    util.addClass(vars.body,'hide-popUp');
    setTimeout(function(){
      //ocultamos popup
      util.rmClass(vars.body,'show-popUp');
      util.rmClass(vars.body,'hide-popUp');

      //ocultamos recurso img e iframe
      vars.image_src.style.display="none";
      vars.iframe_src.style.display="none";

      //limpiamos src de iframe e img
      vars.image_src.src = '';
      vars.image_src.style.display="none";
      vars.iframe_src.src = '';
      vars.iframe_src.style.display="none";

      //Limiamos pie de pagina
      vars.popUp_pie.innerHTML = "";
    },690);
  },
  ini: function(){
    show_popUp.vars = {};
    vars = show_popUp.vars;
    vars.body = document.body;
    vars.popUp = document.getElementById('nrno-popUp');
    vars.popUp_iframe = document.getElementById('popUp-iframe');
    vars.iframe_src = document.getElementById('iframe-src');
    vars.popUp_pie = document.getElementById('popUp-pie');
    vars.image_src = document.getElementById('image-src');
    vars.popUp_quit = document.getElementById('popup-quit');
    return show_popUp.vars;
  }
};

//*MENU BANNER*//
var show_ban = {
  view: function(este, evento){
    util.preventDefault(evento);

    var vars = ( show_ban.vars )? show_ban.vars : show_ban.ini();

    var url = (este.getAttribute('href')!='') ? este.getAttribute('href') : '';
    var section = document.getElementById( url.replace('#','') );

    for( i = 0; i < vars.ban_sections.length; i++ ){
      vars.ban_sections[i].style.display = "none";
    }
    section.style.display = 'block';

  },
  ini: function(){
    show_ban.vars = {};
    var vars = show_ban.vars;
    vars.ban_article = document.getElementById('ban-article');
    vars.ban_menu = document.getElementById('ban-menu');
    vars.ban_sections = vars.ban_article.getElementsByTagName('section');

    return show_ban.vars;

  }
};

var menu_active= {
  check: function(lnks){

  },
  ini: function(){
    show_ban.vars = {};
    var vars = show_ban.vars;
    vars.menu= document.getElementById('nrno-menu');
    if(vars.menu){
      vars.lnks = vars.menu.getElementsByTagName('a');

    }
  }
};

var goL = {
  left:function(obj,evento){
    var div = $("#chrono .envol");
    if(evento=="over"){
      var move = (div.scrollLeft() - 3000)+'px';
      var time = 15000;
    }else if(evento=="click"){
      var move = (div.scrollLeft() - 300)+'px';
      var time = 500;
    }else if(evento=="out"){
      var move = div.scrollLeft()+'px';
      var time = 0;
    }
    div.stop(true).animate({
      'scrollLeft':move}
      ,time,function() {
    });
  },
  right:function(objeto,evento){
    var div = $("#chrono .envol");
    if(evento=="over"){
      var move = (div.scrollLeft() + 3000)+'px';
      var time = 15000;
    }else if(evento=="click"){
      var move = (div.scrollLeft() + 300)+'px';
      var time = 500;
    }else if(evento=="out"){
      var move = div.scrollLeft()+'px';
      var time = 0;
    }
    div.stop(true).animate({
      'scrollLeft':move}
      ,time,function() {
    });
  },
  ini: function(){

  }
};

menu_active.ini();

if (document.body.addEventListener) {
    document.body.addEventListener("load", function(){
      util.use_jquery();
      show_popUp.ini();
    }, false);
}else {
    document.body.attachEvent("onload", function(){
      util.use_jquery();
      show_popUp.ini();
    });
}
