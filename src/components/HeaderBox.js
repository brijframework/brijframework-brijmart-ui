import React,{useState} from 'react';

import HeaderAccountContainer from "./HeaderAccountContainer";
import HeaderMainContainer from "./HeaderMainContainer";
import HeaderCategoriesContainer from "./HeaderCategoriesContainer";

function HeaderBox({categories, seachName, name}) {
    return (
       
         <header className="header-style-1">
            {/* ============================================== TOP MENU ============================================== */}
               <HeaderAccountContainer name={name}></HeaderAccountContainer>
            {/* ============================================== TOP MENU : END ============================================== */}
            {/* ============================================== TOP main header ============================================== */}
               <HeaderMainContainer categories={categories} seach = {seachName}> </HeaderMainContainer>
            {/* ============================================== TOP main header ============================================== */}
            {/* ============================================== NAVBAR START============================================== */}
               <HeaderCategoriesContainer categories={categories}></HeaderCategoriesContainer>
            {/* ============================================== NAVBAR : END ============================================== */}
          </header>
        
      );
}

export default HeaderBox;