import HeaderTopBar from './headers/HeaderTopBar';
import HeaderMainBar from './headers/HeaderMainBar';
import HeaderNavBar from './headers/HeaderNavBar';

const HeaderComponent =({updateSearch, categories, account})=>{
 
    return (
        <header className="header-style-1">
            {/*============================================== TOP MENU ============================================== */}
             <HeaderTopBar account = {account}></HeaderTopBar>
            {/*============================================== TOP MENU : END ============================================== */}
            <HeaderMainBar updateSearch = {updateSearch} categories={categories}></HeaderMainBar>
            {/*============================================== NAVBAR ============================================== */}
            <HeaderNavBar categories={categories}></HeaderNavBar>
            {/*============================================== NAVBAR : END ============================================== */}
        </header>
    )
}

export default HeaderComponent;