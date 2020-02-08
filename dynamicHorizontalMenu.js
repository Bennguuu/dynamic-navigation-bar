function dynamicMenu(menuItems){
    var auxilary="<div><ul class='menu'>";
    for(var counter=0;counter<menuItems.length;counter++){
        auxilary+="<li><a href=\"\">"+menuItems[counter]+"</a></li>";
    }
    auxilary+="</ul></div>";
    return auxilary;
}
var menuLinks=["Home","About","Products","Contact","More"];
document.write(dynamicMenu(menuLinks));