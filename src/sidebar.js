import React from 'react';
import { connect } from 'react-redux';

const Sidebar = (props)=>{
    return(
        <div>
            <h1>TotalCount : <br></br><span>{props.totCount}</span></h1>
        </div>
    );
};

const getValuesFromGlobalstore = (globalStore) =>{
     
    return{
         totCount : globalStore.totalCount
    }
};
export default connect(getValuesFromGlobalstore)(Sidebar);