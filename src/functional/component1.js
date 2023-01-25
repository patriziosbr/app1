import React, { useEffect } from "react";
import { Tabs, Tab } from 'react-tabs-scrollable'
import 'react-tabs-scrollable/dist/rts.css'
import '../css/style.css'

//APPUNTI 
// media query su dimensione < 1000px le arrow spariscono e la tab non è mosue/touch



const SimpleTabs = () => {

    useEffect(() => {
        let targetDivs = document.querySelectorAll(".rts___nav___btn___container")
        for (let i = 0; i < targetDivs.length; i++) {
          targetDivs[i].classList.remove('display___md___none');
        }
    }, [])

    // define state with initial value to let the tabs start with that value
    const [activeTab, setActiveTab] = React.useState(0)
  
    // define a onClick function to bind the value on tab click
    const onTabClick = (e, index) => {
    //   console.log(e)
      setActiveTab(index)
    }
    const [arrOfElem, setArrOfElem] = React.useState(["tab1", "tab2", "tab3", "tab4", "tab5"]);

    const addItemArr = () => {
        console.log(arrOfElem.length);
        let conter = arrOfElem.length + 1
        setArrOfElem([...arrOfElem, `tab${conter}`]);
    }

    const removeItemArr = (param) => {
        setArrOfElem(arrOfElem.filter(item => item !== param));
    }

return (
    <>
        <Tabs activeTab={activeTab} onTabClick={onTabClick}>
            {arrOfElem.map((item,index ) => (
                <Tab key={index}>{item} <span href="#" onClick={()=> removeItemArr(item)}>x</span></Tab>
            ))}
        </Tabs>


        <section>
        {arrOfElem.map((item, index) => (
            <h3 key={item} tab={`${item}`}>
                { activeTab === index ? `${item}` : null }
            </h3>
        ))}
        </section>

        <button onClick={()=> addItemArr()}>Add</button>
    </>
    
  )
}


export default SimpleTabs 