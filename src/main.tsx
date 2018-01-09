/// <reference path="../index.d.ts" />

import * as React from 'react';
import { render } from 'react-dom'
import {HashRouter,Route,Link,Switch} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'


import { TestPage } from './page/testPage/testPage'
// 配置路由
render((
    <Provider>
        <HashRouter>
            <div>
                <Route exact path="/" component={TestPage} />
                <Route path='/testPage' component={TestPage} />
            </div>
        </HashRouter>
    </Provider>
), document.getElementById('app'));