import React from "react";
import './menu-item.styles.scss';
import { withRouter } from "react-router-dom";
import { completion } from "yargs";
const MenuItem =({title, imageUrl, history,linkUrl,match,location}) =>{
console.log(history);
console.log(match);
console.log(location);

    return(

<div className="menu-item"
onClick={() => history.push(`${match.url}${linkUrl}`) }

>
    <div className="background-image"
style ={
    {
        backgroundImage: `url(${imageUrl})`
    }
}
/>

  <div className='title'>
<h1> {title.toUpperCase()}</h1>

  </div>

</div>

    )
}
export default withRouter (MenuItem);
//wrap your comp inside hoc;
/* onClick={() => history.push(`${match.url}${linkUrl}`) }
this will ensure tht everytime we click on any menubar, it will oprn a new 
url with the path name as the item name (match.url is the cuurent location or path and 
    linkUrl we have passed from directory completion,for dynamic routing) */