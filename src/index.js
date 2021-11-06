import React from 'react'
import ReactDOM from 'react-dom';
import Apps from './Routes/Apps';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './Redux/Reducers';
const initialState={
    "user":{},
    "cart":[],
    "myItems":[{
        "id":0,
        "name":"Pin de Umbrella",
        "description":"Pin de la malvada corporación Umbrella",
        "price":8000,
        "stack":30,
        "images":{
            "cover":"PinUmbrella.jpg",
            "image1":"PinUmbrella.jpg",
            "image2":"PinUmbrella.jpg",
            "image3":"PinUmbrella.jpg"
        },
        "universe":"Resident Evil"
    },
    {
        "id":1,
        "name":"Collar SHIELD",
        "description":"Collar de una de las organizacione más importantes del mundo SHIELD",
        "price":8000,
        "stack":30,
        "images":{
            "cover":"PinUmbrella.jpg",
            "image1":"PinUmbrella.jpg",
            "image2":"PinUmbrella.jpg",
            "image3":"PinUmbrella.jpg"
        },
        "universe":"MARVEL"
    },
    {
        "id":2,
        "name":"Collar Azteca",
        "description":"Uno de los medallones del tesoro maldito.",
        "price":8000,
        "stack":30,
        "images":{
            "cover":"PinUmbrella.jpg",
            "image1":"PinUmbrella.jpg",
            "image2":"PinUmbrella.jpg",
            "image3":"PinUmbrella.jpg"
        },
        "universe":"PIRATAS DEL CARIBE"
    }]
}

const store=createStore(
    reducer,
    initialState,
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
ReactDOM.render(
    <Provider store={store}>
        <Apps/>
    </Provider>,document.getElementById('root'));

