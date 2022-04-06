import React from 'react'
import Dashboard from "./components/Dashboard"
import ModuleData from "./components/ModuleData"
const ModulePage =  ({match}) => {
    const index = match.params.numCourse
    console.log('match', match)
    console.log('index',index)
    console.log('mod data single', ModuleData[index-1].embedLink)
    const embed =  ModuleData[index-1].embedLink
    console.log('embedLink',(embed))
    console.log('decoded embedLink',decodeURI(embed))
    return(
        <div> 
            <Dashboard/>
            <h1>{ModuleData[index-1].title}</h1>
        {index ==1 &&    
            <div className = "moduleSlides">
                <iframe loading="lazy"  
                src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEzPsNmGG8&#x2F;view?embed" 
                allowfullscreen="allowfullscreen" 
                allow="fullscreen"
                className='moduleSlidesContent' 
                >
                </iframe>
            </div>}
            {index ==2 &&    
            <div className = "moduleSlides">
                <iframe loading="lazy"  
                src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAE1rDk5bUY&#x2F;view?embed" 
                allowfullscreen="allowfullscreen" 
                allow="fullscreen"
                className='moduleSlidesContent' 
                >
                </iframe>
            </div>}
            {index ==3 &&    
            <div className = "moduleSlides">
                <iframe loading="lazy"  
                src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAE2_aaXAI0&#x2F;view?embed" 
                allowfullscreen="allowfullscreen" 
                allow="fullscreen"
                className='moduleSlidesContent' 
                >
                </iframe>
            </div>}
                
        {index ==4 &&    
                <div className = "moduleSlides">
                    <iframe loading="lazy"  
                    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAE3pUNspy4&#x2F;view?embed" 
                    allowfullscreen="allowfullscreen" 
                    allow="fullscreen"
                    className='moduleSlidesContent' 
                    >
                    </iframe>
                </div>}
        {index ==5 &&    
        <div className = "moduleSlides">
            <iframe loading="lazy"  
            src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAE49aYgHEI&#x2F;view?embed" 
            allowfullscreen="allowfullscreen" 
            allow="fullscreen"
            className='moduleSlidesContent' 
            >
            </iframe>
        </div>}

                

</div>
    )
}
export default ModulePage