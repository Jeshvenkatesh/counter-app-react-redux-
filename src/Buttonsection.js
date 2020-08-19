import React, { Component } from 'react';
import {connect} from "react-redux";
import Cardbutton from "./Cardbutton";

class ButtonSection extends Component {
   
    render(){
        return(
            <div>
                <Cardbutton btnClick={this.props.onIncreLike} label = "Count: +1" bgColor="#957DAD"/>
                <Cardbutton btnClick={this.props.onDecreLike} label = "Count: -1" bgColor="#957DAD"/>
                <Cardbutton btnClick={this.props.onIncreByFifty} label = "Count: +50" bgColor="#957DAD"/>
                <Cardbutton btnClick={this.props.onDecreByFifty} label = "Count: -50" bgColor="#957DAD"/>
            </div>
        )
    }
};

const mapDispatchToProps = (dispatch) =>{
    return{
         onIncreLike : () => dispatch({type:"INCRE_BY_ONE"}),
         onDecreLike : ()=> dispatch({type : "DECRE_BY_ONE"}),
         onIncreByFifty : ()=> dispatch({type : "INCRE_BY_FIFTY"}),
         onDecreByFifty : ()=> dispatch({type : "DECRE_BY_FIFTY"})
    }
}
export default connect(null,mapDispatchToProps)(ButtonSection);