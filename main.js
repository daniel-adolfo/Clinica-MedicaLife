$(document).ready(function(){
    // Configurações para o slider de imagens
    $('.slider-images').slick({
        items: 1, // Número de itens a serem exibidos
        autoplay: true, // Ativar autoplay
        autoplaySpeed: 10000, // Tempo entre transições em milissegundos (3 segundos neste exemplo)
        autoplayHoverPause: true, // Pausar autoplay ao passar o mouse sobre o carrossel
        loop: true, // Repetir o carrossel
        arrows:false,
    });

    

    // Configurações para o slider de texto
    $('.slider-text').slick({
        items: 1, // Número de itens a serem exibidos
        autoplay: true, // Ativar autoplay
        autoplaySpeed: 8000, // Tempo entre transições em milissegundos (3 segundos neste exemplo)
        loop: true, // Repetir o carrossel
        arrows:false,
    });
});