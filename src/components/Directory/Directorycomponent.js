import React from 'react';
import './Directory.styles.scss';
import MenuItem from '../menu-item/menu-itemcomponent';
class Directory extends React.Component{

    constructor (props){

        super(props);

        this.state ={
            sections : [
                {
                    title:'Veggies',
                    imageUrl: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/powerhouse_vegetables_slideshow/650x350_powerhouse_vegetables_slideshow.jpg',
                    id:1,
                    linkUrl:'veggies'
                },
                {
                    title:'fruits',
                    imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/assortment-of-colorful-ripe-tropical-fruits-top-royalty-free-image-995518546-1564092355.jpg',
                    id:2,
                    linkUrl:'fruits'
                },
                {
                    title:'dairy',
                    imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQENgm8iHViJY7igbBelx7Ps61fkhUpL--z_E024mWFUF18p_p5kVqW-Td_0gQjp9vrGuE&usqp=CAU',
                    id:3,
                    linkUrl:'dairy'
                },
                {
                    title:'fruits',
                    imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/assortment-of-colorful-ripe-tropical-fruits-top-royalty-free-image-995518546-1564092355.jpg',
                    id:4,
                    linkUrl:'fruits'
                },
                {
                    title:'fruits',
                    imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/assortment-of-colorful-ripe-tropical-fruits-top-royalty-free-image-995518546-1564092355.jpg',
                    id:5,
                    linkUrl:'fruits'
                },
                {
                    title:'products',
                    imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQENgm8iHViJY7igbBelx7Ps61fkhUpL--z_E024mWFUF18p_p5kVqW-Td_0gQjp9vrGuE&usqp=CAU',
                    id:6,
                    linkUrl:'random'
                }
            ],
            
        }
    }

    render(){

        return(
<div className="directory-menu">
{
this.state.sections.map(
({id,...otherSectionProps})=> ( 
    <MenuItem key={id}{...otherSectionProps}/>
)
)


}


</div>
        )
    }
} 

export default Directory;
//spreadoperator : ...otherSectionProps