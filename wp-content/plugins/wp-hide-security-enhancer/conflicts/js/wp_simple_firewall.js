

    jQuery(document).on( 'click', '#WPH_conflict_handle_wp_simple_firewall_login .notice-dismiss', function() {
        
        var queryString = { "action": "wph_notice_ignore_wp_simple_firewall", "type" : 'login'};
        //send the data through ajax
        jQuery.ajax({
          type: 'POST',
          url: ajaxurl,
          data: queryString,
          cache: false,
          success: function(data){
   

          },
          error: function(html){

              }
        });
        

    })