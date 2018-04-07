/**
 * @author Wasim Khan
 * @since  23-Nov-2017
 * @version 1.0.0
 */
(function ( $ ) {
    $.fn.search = function( options ) {
        $(this).on('keyup',function(){
            var tag, flag, searchValue = $(this).val().toUpperCase(), parent = $('#'+options.parentId),
                child = parent.find('> '+options.childrenTag),noResult=0,parentHeight = parent.outerHeight()-20,pStyle="";
            for (var i = 0; i < child.length; i++) {
                flag = 0;
                for(var j=0;j<options.class.length;j++){
                    tag = child[i].innerText.trim();
                    if(tag.toUpperCase().indexOf(searchValue) > -1) flag++;
                }
                if(flag > 0) {
                    $(child[i]).show();
                    noResult++;
                }
                else
                    $(child[i]).hide();
            }

            pStyle = "position:relative;text-align:center;";

            if(noResult ===0  && child.length){
                if(parent.next("p").length === 0)
                    parent.after("<p style='"+pStyle+"'>No result found.</p>");
            }else{
                parent.next("p").remove();
            }


        });
    }
}( jQuery ));