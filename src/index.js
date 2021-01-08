//Import Area
import React from 'react';
import ReactDOM from 'react-dom';

//Let's create a Class Component
class A extends React.Component{
    //1.Property
    //State is a property which store a object (state is built in object)
    state = { };

    //2.Constructor
    constructor(props){
        super(props);
        console.log('Hello from constructor');
        //The role of constructor is to initialize the properties
        this.state = { name:"Mahima",surname:'Arya'};
    }

    componentDidMount(){
        console.log('Hello from componentDidMount');
        this.setState({ name:'Priyanka',surname:'Khuar'});
    }
    componentDidUpdate(){
        console.log('Hello from componentDidUpdate');
    }
    //3.Method
    //Every Class Component must have a render method which always return HTML(JSX)
    render(){
        console.log('Hello from render method');
        return(
            <div>
                My name is {this.state.name} {this.state.surname}
            </div>
        );
    }
}


ReactDOM.render(<A />,document.getElementById('root'));