var menuu=document.getElementById("menu");
function changecolor()
{
    var butt_name = document.getElementsByClassName("collapsed");
    console.log(butt_name );
    if(butt_name.length === 0)
    {
        menuu.style.height="auto";
        menuu.style.backgroundColor="transparent";
        menuu.style.borderColor="transparent";
        document.getElementsByClassName("top-bar")[0].style.transform="unset";
        document.getElementsByClassName("middle-bar")[0].style.opacity="1";
        document.getElementsByClassName("bottom-bar")[0].style.transform="unset";
        for(var i=0 ;i<document.getElementsByClassName("item-navv").length ;i++)
        {
            document.getElementsByClassName("item-navv")[i].innerHTML=document.getElementsByClassName("item-navv")[i].innerHTML.toLowerCase();
            var string_1 =document.getElementsByClassName("item-navv")[i].innerHTML;
          document.getElementsByClassName("item-navv")[i].innerHTML= string_1.charAt(0).toUpperCase() + string_1.slice(1);
        }
        document.getElementsByClassName("collapse")[0].style.paddingTop ="unset";

    }
    else{
        menuu.style.height="96vh";
       
        menuu.style.backgroundColor= "hsl(0, 0%, 0%)";
        menuu.style.borderColor= "hsl(0, 0%, 0%)";
        document.getElementsByClassName("top-bar")[0].style.transform="rotate(-45deg) translate(-1px, 7px)";
        document.getElementsByClassName("middle-bar")[0].style.opacity="0";
        document.getElementsByClassName("bottom-bar")[0].style.transform="rotate(45deg) translate(-1px, -8px)";  
      for(var i=0 ;i<document.getElementsByClassName("item-navv").length ;i++)
      {
        document.getElementsByClassName("item-navv")[i].innerHTML=document.getElementsByClassName("item-navv")[i].innerHTML.toUpperCase();
      }
      document.getElementsByClassName("collapse")[0].style.paddingTop ="10em";
        }

    }
