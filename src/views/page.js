import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Kalamata Olives Tours</title>
        <meta property="og:title" content="Page - Kalamata Olives Tours" />
      </Helmet>
      <div className="page-container1">
        <div className="page-container2">
          <Script
            html={`<script>if(!window.picflow){window.picflow=!0;var s=document.createElement("script");s.src="https://picflow.com/embed/main.js";s.type='module';s.defer=true;document.head.appendChild(s);}</script><picflow-gallery id="gal_ZMFg1JGzYcaRbgDa" lightbox="#000000E6" no-padding="true" no-background="true"></picflow-gallery>...`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Page
