alert ("You are a victim of a shipwreck and have been stranded on a deserted island with no human life around. You have no money and you are extremely tired and hungry. You see two routes in front of you. Choose the correct route to resuce yourself! GOOD LUCK!"); 
let woody_dark_path_or_zigzag_sandy_route = prompt ("SELECT EITHER *NUMBER* (1 or 2) for adventure: 1: WOODY DARK PATH OR 2: ZIG ZAG SANDY ROUTE?");


if(!( woody_dark_path_or_zigzag_sandy_route == 1 || woody_dark_path_or_zigzag_sandy_route == 2))
{ alert ( "DRILL ALERT: WRONG INPUT!!!! ALWAYS SELECT EITHER 1 or 2 as option. ALSO, NEVER LEAVE OPTION BOX EMPTY. NOW REFRESH WINDOW AND START THE GAME AGAIN....");
}
else {

if (woody_dark_path_or_zigzag_sandy_route==1)
{
  let dark_path_to_left_or_dark_path_to_right = prompt ("Moving on....SELECT EITHER *NUMBER* ONCE MORE 1: DARK PATH TO THE LEFT OR 2: DARK PATH TO RIGHT ( 1 or 2)");

  if(!( dark_path_to_left_or_dark_path_to_right == 1 || dark_path_to_left_or_dark_path_to_right == 2))
{ alert ( "DRILL ALERT: WRONG INPUT!!!! ALWAYS SELECT EITHER 1 or 2 as option. ALSO, NEVER LEAVE OPTION BOX EMPTY. NOW REFRESH WINDOW AND START THE GAME AGAIN....");
}
else
{
  if (dark_path_to_left_or_dark_path_to_right==1)
     {
           alert ("BAD LUCK :( You entered a bear cave with a bunch of ANGRY Grizzlies. You just got mauled over by them and killed. GAME OVER! ")
        }
  else  {
          alert ("Good choice buddy, move further....");

            let goingup_North_or_Going_East = prompt ("FINALLY, SELECT EITHER *NUMBER* (1 or 2) ONE LAST TIME: 1: UP NORTH OR 2: EAST ?");


            if(!( goingup_North_or_Going_East  == 1 || goingup_North_or_Going_East == 2))
            { alert ( "DRILL ALERT: WRONG INPUT!!!! ALWAYS SELECT EITHER 1 or 2 as option. ALSO, NEVER LEAVE OPTION BOX EMPTY. NOW REFRESH WINDOW AND START THE GAME AGAIN....");
            }
             else{
              if (goingup_North_or_Going_East==1)
               {
                 alert("SO SAD....You entered a hostile territory. A cannibalistic native tribe spots you and thinks of you as a threat to their land. They chase you down with spears and bludgen you to death. GAME OVER!");
                }    
              else {
                  alert("You walk for another hour, BUT FINALLY SEE A LIGHTED VILLAGE :)) HOORAY! The 'human' villagers come to your rescue! CONGRATS, YOU ARE THE TENACIOUS PATHFINIDING WINNING HERO!")
                  }
              }
   }
}
}
   else 
         {
       alert("Oh no...... :(( BAD CHOICE...You end up getting lost on the path and reach a steep cliff with a huge waterfall. You are TRAPPED and you fall and die. GAME OVER!")  
         }


        
        }
