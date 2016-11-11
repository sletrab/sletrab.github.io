$(document).ready(function(){
    setupElements()
});

$(window).on('resize', function(){
    setupElements();
})

var setupElements = function () {
    var $container = $('.gallery');
    var containerWidth = $container.width();
    var elementWidth = $('.gallery figure').outerWidth();   
    var margin = 20;     
    var colCount = Math.floor(containerWidth / ( elementWidth + margin ));

    var elements = [];

    for (var i = 0; i < colCount; i++) {
        elements.push(margin);
    }

    positionBlocks();

    function positionBlocks() {
        $('.gallery figure').each(function(i, item){
            var min = Array.min(elements);
            var index = $.inArray(min, elements);
            var leftPos = margin + (index * (elementWidth + margin));
            $(this).css({
                'left':leftPos+'px',
                'top':min+'px'
            });
            elements[index] = min + $(this).height() + margin;
        });
    }
}

Array.min = function(array) {
    return Math.min.apply(Math, array);
};