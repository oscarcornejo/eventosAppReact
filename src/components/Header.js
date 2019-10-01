import React, {Fragment} from 'react';

const Header = ({titulo}) => {
    return (
        <Fragment>
            <header className="uk-margin" uk-margin="true">
                <h1 className="uk-text-center">{titulo}</h1>
            </header>  
        </Fragment> 
    );
}

export default Header;