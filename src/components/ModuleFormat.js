import React from 'react'
import '../index.css'
import {withRouter} from 'react-router-dom'
function ModuleFormat(props){
    return(
        // style="position: relative; width: 100%; height: 0; padding-top: 56.2500%;
        //     padding-bottom: 48px; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
        //     border-radius: 8px; will-change: transform;"

        // style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
        // iframe style
        <div>
            <h1>Tester</h1>
            {/* <div className = "moduleSlides">
                <iframe loading="lazy" 
                    src='https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAE1rDk5bUY&#x2F;view?embed'
                    allowfullscreen="allowfullscreen" 
                    allow="fullscreen"
                    className = "moduleSlidesContent"
                    >
                </iframe>
                
            </div> */}
            {/* <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAE1rDk5bUY&#x2F;view?utm_content=DAE1rDk5bUY&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">
                Lesson 2
            </a>  */}
        </div>
    )
}

export default withRouter(ModuleFormat);