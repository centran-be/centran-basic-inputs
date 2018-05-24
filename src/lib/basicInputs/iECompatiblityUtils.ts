import "jquery";

export  class IECompatiblityUtils {

  public loadSelectForIE(){
    $(function(){
      $('.option').each(function(){
        $(this).append(" ")
      });
    })
  }

}
