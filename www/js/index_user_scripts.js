(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
        /* button  #btnMedico */
    $(document).on("click", "#btnMedico", function(evt)
    {
         activate_subpage("#uib_medico"); 
    });
    
        /* button  #btnAnamnese */
    $(document).on("click", "#btnAnamnese", function(evt)
    {
         activate_subpage("#uib_page_anamnese"); 
    });
    
        /* button  #btnAlimento */
    $(document).on("click", "#btnAlimento", function(evt)
    {
         activate_subpage("#uib_page_alimento"); 
    });
    
        /* button  #btnRefeicao */
    $(document).on("click", "#btnRefeicao", function(evt)
    {
         activate_subpage("#uib_page_refeicao"); 
    });
    
        /* button  #btnLogin */
    $(document).on("click", "#btnLogin", function(evt)
    {
         activate_page("#mainpage"); 
    });
    
        /* button  #btnSair */
    $(document).on("click", "#btnSair", function(evt)
    {
         activate_page("#uib_page_login"); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
