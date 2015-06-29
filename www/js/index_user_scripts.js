(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    $(document).on("click", "#lsMedico", function(evt)
    {
        activate_subpage("#uib_medico"); 
    });
     
    $(document).on("click", "#lsAnamnese", function(evt)
    {
        activate_subpage("#uib_page_anamnese"); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
