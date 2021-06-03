import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import GitHubApi from "../helpers/GitHubApi";

import Header from "../components/Header";
import UserPageContent from "../components/UserPageContent";
import Footer from "../components/Footer";

export default function Repositories() {

    const { username } = useParams();

    const [ userData, setUserData ] = useState(GitHubApi.getFullUserStructure());
    const [ apiOk, setApiOk ] = useState(false);

    useEffect(function() {
        if(!apiOk) {
            GitHubApi.fetchFullUser(username).then(userData => {
                setUserData(userData);
            });
            setApiOk(true);
        }
    }, [username, apiOk, setApiOk, setUserData]);

    return <>
        <Header/>
        <UserPageContent userData={userData}/>
        <Footer/>
    </>
}
