import React from "react";
import "../App.css"
import {VscTwitter} from 'react-icons/vsc'

const now = new Date();
const year = now.getFullYear();

export default function footer(props) {
    const {twitterLink} = props;
    return (
        <>
            <footer className="bg-slate-100 w-11/12 m-auto text-xl rounded-md shadow-md footer footer-center p-10 text-base-content mt-10 bottom-0 left-0 right-0">
                <nav className="grid grid-flow-col gap-4">
                    <a href="https://www.jlerocher.pro/about" className="link link-hover">About me</a>
                    <a href="mailto:jlerocher@gmail.com" className="link link-hover">Contact me</a>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a href={twitterLink}><VscTwitter /></a>
                    </div>
                </nav> 
                <aside>
                    <p>Copyright © {year} - All right reserved by Jean Eliézer Le Rocher</p>
                </aside>
            </footer>
        </>
    )
}