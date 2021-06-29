import React from 'react';
import './Directory.styles.scss';
import MenuItem from '../menu-item/menu-itemcomponent';
class Directory extends React.Component{

    constructor (props){

        super(props);

        this.state ={
            sections : []
              
            
        };
       
    }
    //should be out of constructor and render
        componentDidMount(){
            //gets triggered when the comp is loaded
       //call an API when 
       //making call with fetch API of javascript
       fetch(`https://fakestoreapi.com/products`)
       .then(res => res.json())
       .then(response => 
        this.setState({sections:response})
            )
.catch(error => console.log(error))
//asynchronus calling (promises)
       //address and payload , two parameteres

console.log(this.state.sections);
        
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