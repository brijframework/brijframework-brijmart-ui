import React,{useState} from 'react';

import BodyBreadcrumb from "./BodyBreadcrumb";
import BodyContent from "./BodyContent";


function BodyBox() {
    return (
       <>
        <BodyBreadcrumb></BodyBreadcrumb>
        <BodyContent></BodyContent>
        </>
      );
}

export default BodyBox;