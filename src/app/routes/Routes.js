import React from 'react';

// Components 
import Main from '../components/Main/Main';
import About from '../components/Main/About';
import Members from '../components/Main/Members';
import Triagle from '../components/Main/Triangle';

import { Route } from 'react-router-dom';

export default function Routes() {

    return (
        <>
            <Route exact path='/'>
                <Main>
                    <About />
                    <Members />
                    <Triagle left={ true } mt={ 1350 } />
                </Main>
            </Route>
        </>
    );
}