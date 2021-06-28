import React from "react";
import './collection-item.styles.scss';

const Collectionitem =({id,name,price,imageUrl}) =>{

    <div className="collection-item"
onClick={() => history.push(`${match.url}${linkUrl}`) }

>
    <div className="image"
style ={
    {
        backgroundImage: `url(${imageUrl})`
    }
}
/>

  <div className='collection-footer'>
<span className="name">{name}</span>
<span className="price">{price}</span>
  </div>

</div>
}
export default Collectionitem;