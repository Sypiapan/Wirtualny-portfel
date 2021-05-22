import React from 'react';
import './App.css';


import Header from "./Components/Header/Header";
import Wallet from "./Components/Wallet/Wallet";
import Assets from "./Components/Assets/Assets";
import Alarms from "./Components/Alarms/Alarms";
import PageHeader from "./Components/PageHeader/PageHeader";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";


function App() {
    return (
        <>

            <Header/>

            {/*<Wallet/>*/}
            <Assets/>
            <Alarms/>



        </>


    );
}

export default App;
