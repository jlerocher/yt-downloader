import React from 'react'
import '../App.css'
import {VscGithub, VscTwitter} from 'react-icons/vsc';

export default function Header(props) {

  const {title, githubLink, twitterLink} = props
  return (
    <header className="w-11/12 m-auto rounded-md shadow-md navbar bg-slate-100 mt-2 mb-10 font-bold">
      <h1 className="normal-case text-xl ">{title}</h1>
      
      <nav className="mr-2 ml-auto">
        <a href={twitterLink} className='ml-2 mr-2 flex items-center'>Follow me on<VscTwitter className='ml-2'/></a>
        <p> | </p>
        <a href={githubLink} className='ml-2 mr-2 flex items-center'>Github Project <VscGithub className='ml-2'/></a>
      </nav>
    </header>
  )
}

