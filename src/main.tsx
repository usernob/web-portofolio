import React from 'react'
import ReactDOM from 'react-dom/client'
import * as Section from './section'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
        <div className='container'>
		    <Section.Hero/>
        </div>
	</React.StrictMode>
)
