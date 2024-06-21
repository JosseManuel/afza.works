$(document).ready(function() {
    $('.submenu').hide(); 
    $('li').hover(
        function() {
            $(this).find('.submenu').show();
        }, 
        function() { 
            $(this).find('.submenu').hide();
        }
    );

    var alturaCabecera = $('#miCabecera').outerHeight();
    $('#contenedor-servicios').css({
        'top': alturaCabecera + 'px',
        'left': '50%',
        'transform': 'translateX(-50%)'
    });

    $('nav ul li:nth-child(3) a').click(function(e) {
        e.preventDefault();
        $('#contenedor-servicios').toggle();
    });

    $('#btnCerrarServicios').click(function() {
        $('#contenedor-servicios').hide();
    });

    $('.menu-btn').click(function() {
        $('.menu-principal').slideToggle(100);
        $('#contenedor-servicioss').hide();
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('.menu-principal').length &&!$('.menu-btn').is(event.target)) {
            $('.menu-principal').slideUp('slow');
        }
    });


    $('#menuPrincipal ul li a[href="servicios.html"]').click(function(e) {
        e.preventDefault();
        
        var contenidoServiciosMenu = $('#contenedor-servicioss');
        var $this = $(this);

        if(contenidoServiciosMenu.is(':visible')) {
            contenidoServiciosMenu.hide();
            $this.find('i').removeClass('fa-chevron-up').addClass('fa-chevron-down'); 
        } else {
            contenidoServiciosMenu.show();
            $this.find('i').removeClass('fa-chevron-down').addClass('fa-chevron-up'); 
        }
    });

    alturaCabecera = $('#miCabecera').outerHeight();
    $('.menu-principal').css({
        'top': alturaCabecera + 'px',
        'left': '0',
        'position': 'absolute'
    });
    
});




