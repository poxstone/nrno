;
var util = {
  preventDefault: function(evento){
    if(evento.preventDefault){ evento.preventDefault() }else{ evento.returnValue = false; }
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
  agent : function(nav){
    var exp = new RegExp(nav,'i');
    var nav = navigator.userAgent;
    var retorno = false;

    if( nav.match(exp) ){
      retorno = true;
    }

    return retorno;

  },
  agent_version : function(){
    var nav_list = ['MSIE','Firefox','Chrome','Opera','Safari'];
    navegador = navigator.userAgent;
    
    for(i=0; i < nav_list.length; i++){
      
      var regexp = new RegExp(nav_list[i],'i');
      console.log( navegador, nav_list[i], ( nav_list[i].match('msie') )? navegador.match(/MSIE \d+/i) : navegador.match(regexp)  );
      var is_navigator = ( nav_list[i].match('MSIE') )? navegador.match(/MSIE \d+/i) : navegador.match(nav_list[i]) ;
      
      //si es el navegador ponga la clase
      if( is_navigator ){
        var clase = is_navigator[0].replace(' ','_').toLowerCase();
        var clase_actual = document.body.getAttribute('class');
        document.body.setAttribute( 'class', clase_actual+' '+clase );
        break;
        
      }
      
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
util.agent_version();

//*AUTO ACTIVE MENU PRINCIPAL*//
var menu_active= {
  check: function(){
    var vars = menu_active.vars;
    var url = location.href;
    url = ( url.match('#') )? url.substr( 0,url.lastIndexOf('#') ) : url;
    url = ( url.lastIndexOf('?') > -1 )? url.substr( 0,url.lastIndexOf('?') ) : url;

    //busca botón por botón
    for( i=0; i< vars.lnks.length; i++ ){
      if( url.match( vars.lnks[i].href ) ){
        util.addClass(vars.lnks[i],'active');
        break;
      }
    }
  },
  ini: function(){
    menu_active.vars = {};
    var vars = menu_active.vars;
    vars.menu= document.getElementById('nrno-menu');
    if(vars.menu){
      vars.lnks = vars.menu.getElementsByTagName('a');
      menu_active.check();
    }
  }
};
jQuery(function(){ menu_active.ini(); });

//*MOSTRAR POPUP*//
var show_popUp = {
  view : function(este,evento,estilo){

    var estylo = estilo || '';

    //valida para dejar pasar el vínculo a una nueva ventana
    if( !estylo.match(/Portada y catá?logo/i) ){

        //evita click
        util.preventDefault(evento);
        jQuery(este).focus();

        var is_biblio_item = (este.parentNode.tagName.match(/li/i))? true : false;

        //Declaramos variables
        var vars = ( show_popUp.vars )? show_popUp.vars : show_popUp.ini();

        //valida si es un elemento de biblioteca o un botón de banner
        if(is_biblio_item){
          //pega citar
          vars.popUp_pie.innerHTML = este.getElementsByTagName('figcaption')[0].innerHTML;
        }else{
          vars.popUp_pie.innerHTML = este.getElementsByTagName('q')[0].innerHTML;
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

        //añade evento escape al body
        if( !jQuery('body').is('.e_key_esc') ){
          jQuery('body').addClass('e_key_esc').bind('keyup',function(e){
            if(e.keyCode==27){
              if( jQuery(vars.popUp_quit).is(':visible') ){
                vars.popUp_quit.click();
              }
            }
          });
        }

    }else{//el click sige de largo


    }


  },
  hide_back: function(este,evento){
    //oculta cuando le pican en fondo
    var vars = ( show_popUp.vars )? show_popUp.vars : show_popUp.ini();

    //si es el elemento background lo oculta
    if( evento.taget && evento.taget == vars.popUp ){
      show_popUp.hide(este,evento);
    }else if( evento.srcElement == vars.popUp ){
      show_popUp.hide(este,evento);
    }

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

//*POPUP2*//


//*MENU BANNER*//
var show_ban = {
  focus_lib: function(){
    var vars = ( show_ban.vars )? show_ban.vars : show_ban.ini();
    //secciones para buscar vinculos con hash
    var $article =  jQuery(vars.ban_article);

    //valida si ya se aplicaron eventos de focus
    if( !$article.is('.e_focus_lib') ){

      //selecciona vinculos hacia libros
      var $links_libros = jQuery(vars.ban_sections).find('a[href^="#"]');

      //bucle para aplicar eventos
      $links_libros.each(function(ind,elem){
        var $lnk_libro = jQuery(elem);
        var id_obj = $lnk_libro.attr('href');
        var $libro_to_focus = jQuery(id_obj);
        var obj_top = ( $libro_to_focus.offset() )? $libro_to_focus.offset().top - 100 : (console.log('error en vinculo '+id_obj+' de banner hacia libros'));

        //aplica eventos con click
        $lnk_libro.bind('click',function(e){
          e.preventDefault();
          jQuery('html,body').stop(true).animate({
            'scrollTop' : obj_top
          }
          ,600
          ,function(){
              $libro_to_focus.focus();
          });
        });

      });

      //marca que ya se aplicaron eventos de focus
      $article.addClass('e_focus_lib');

    }

  },
  auto_charge: function(){
    var vars = ( show_ban.vars )? show_ban.vars : show_ban.ini();
    var change = false;

    //extraer variable
    var url = location.hash;

    //comprueba si hay un has para activar el botoón
    if(url.match(/#/)){
      for(i=0; i < vars.ban_links.length; i++){
        var href= vars.ban_links[i].href;
        var hash = new RegExp(url,'i');
        if( href.match(hash) ){
          vars.ban_links[i].click();
          change = true;
        }
      }
    }
    //si no hay marca uno por quie por defecto es el primero
    if( !change ){
      util.addClass(vars.ban_links[0],'active');
    }

  },
  view: function(este, evento){
    util.preventDefault(evento);
    //asigna variables
    var vars = ( show_ban.vars )? show_ban.vars : show_ban.ini();

    //extrae la url
    var url = (este.getAttribute('href')!='') ? este.getAttribute('href') : '';

    //Cambia estado de ventana
    if( history.replaceState ){
      history.replaceState({},"", url);
    }

    //selecciona sección a mostrar
    var section = document.getElementById( url.replace('#','') );

    //deshabilita los links
    for( i = 0; i < vars.ban_links.length; i++ ){

      //muestra el que sí
      util.rmClass(vars.ban_links[i],'active');
    }
    //coloca activo sobre el que sí
    util.addClass(este,'active');

    //selecciona eltiempo con base a el navegador
    var time = (util.agent('msie'))? 0: 500 ;

    //lo oculta a la izquierda
    util.addClass(vars.ban_article,'hide-left');

    //muestra y oculta
    setTimeout(function(){

      //oculta los elementos
      for( i = 0; i < vars.ban_sections.length; i++ ){
        vars.ban_sections[i].style.display = "none";
      }

      //vuelve a ponerlo
      util.rmClass(vars.ban_article,'hide-left');
      util.addClass(vars.ban_article,'show-left');

      //muestra el que sí
      section.style.display = 'block';

    },time);

  },
  ini: function(){
    show_ban.vars = {};
    var vars = show_ban.vars;
    vars.ban_article = document.getElementById('ban-article');
    vars.ban_menu = document.getElementById('ban-menu');
    if( vars.ban_menu ){
      vars.ban_links = vars.ban_menu.getElementsByTagName('a');
      vars.ban_sections = vars.ban_article.getElementsByTagName('section');

      show_ban.auto_charge();
      show_ban.focus_lib();//busca elmentos con hash para agregar animación de scroll
      return show_ban.vars;
    }

  }
};
jQuery(function(){show_ban.ini()});

//*CHRONLOGY*//
var goL = {
  left:function(obj,evento){
    var div = jQuery("#chrono .envol");
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
    var div = jQuery("#chrono .envol");
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

//*MINIMIZAR BANNER*//
var min_banner= {
  maxi_ie: function(){
    var vars= min_banner.vars;
    vars.height= jQuery(vars.banner).height();
    jQuery(vars.banner).height(0);
    jQuery(vars.banner).stop().animate({
      'height': vars.height
    },2000);
  },
  mini: function (){
    var vars= min_banner.vars;
    util.addClass(vars.banner,'mini');
  },
  maxi: function(){
    var vars= min_banner.vars;
    //util.rmClass(vars.banner,'mini');
    util.addClass(vars.banner,'maxi');
  },
  ini: function (){
    min_banner.vars= {};
    var vars= min_banner.vars;
    vars.banner = document.getElementById('nrno-banner');

    if(vars.banner){
      if( util.agent('msie') ){
        min_banner.maxi_ie();
      }else{
        min_banner.mini();
        setTimeout(function(){
          min_banner.maxi();
        },1250);
      }
    }

  }
}
jQuery(function(){min_banner.ini()});
