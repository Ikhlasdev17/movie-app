import React from "react";
export default class Header extends React.Component{
    state = {
        search: "",
    }


    render() {
        return(
           <header className="header">
               <a href="#" className="logo">MOVIE</a>

               <nav>
                   <ul>
                       <li><a href="#">MOVIES</a></li>
                       <li><a href="#">Series</a></li>
                       <li><a href="#">Contact</a></li>
                   </ul>


               </nav>
           </header>
        )
    }
}