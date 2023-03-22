import ButtonPanel from '@/components/button-panel';
import Layout from '@/components/layout';
import Page3Panel from '@/components/page3-panel';
import Page3Panel2 from '@/components/page3-panel2';
import Page3Panel3 from '@/components/page3-panel3';
import Page3PicPanel from '@/components/page3-pic-panel';
import { Airplane, Car, Hotel } from '@icon-park/react';
import React, { useState } from 'react'

const includedList=[
    {
      title:"Airport",
      Icon:Airplane
    },{
      title:"Accomodation",
      Icon:Hotel  
    },{
      title:"Travel",
      Icon:Car
    }
  ];

const optionsList = [
    {
      title:"Airport",
      Icon:Airplane
    },{
      title:"Accomodation",
      Icon:Hotel     
    },{
      title:"Travel",
      Icon:Car 
    }
  ]

const Accomodation =({accomodation})=>{
  return(
    <ul className="flex flex-col">
      {accomodation.map((a,i)=>
        <li className="my-2" key={i}>
          <Page3Panel2 {...a}/>
        </li>
        
      )}
    </ul>
  );
}

const Activities = ({activities,imageWidth,imageHeight})=>{
  return(
    <ul className="grid sm:grid-cols-2 md:grid-cols-1 max-sm:grid-cols-2 max-xs:grid-cols-1 gap-2">
      {activities.map((a,i)=>
        <li className="my-2" key={i}>
          <Page3Panel2 {...a} imageWidth={imageWidth} imageHeight={imageHeight}/>
        </li>
        
      )}
    </ul>
  );
}

const Travel = ({transport})=>{
    return(
      <ul className="grid md:grid-cols-3 sm:grid-cols-2 gap-2">
      {transport.map((t,i)=>
        <li className="my-2" key={i}>
          <Page3Panel3 {...t}/>
        </li>
        
      )}
    </ul>
    )
}

export default function Iternery ({panel1,travelSteps,accomodation,activities,transport}) {
  const [options, setOptions] = useState(0);
  return (
    <Layout>
        <div className="mt-20">
            <Page3PicPanel {...panel1}/>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 bg-repeat" style={{backgroundImage:"url('/assets/images/back3.png')"}}>
            <ol className="flex flex-col overflow-scroll mt-5">
                {travelSteps.map((tstep,i)=>
                    <li className="mt-5" key={i}>
                        <Page3Panel {...tstep} includedList={includedList}/>
                    </li>
                )}
            </ol>
            <div className="flex flex-col w-full items-center">
                <div className="sm:w-[85%] w-[98%] mt-5">
                    <ButtonPanel optionList={['Accommodation', 'Activities', 'Transport']} options={options} setOptions={setOptions}/>
                </div>
                <div className="w-[100%] mt-2">
                    {(()=>{
                      switch(options){
                        case 0:
                          return <Accomodation accomodation={accomodation}/>
                        case 1:
                          return <Activities activities={activities} image imageWidth="120" imageHeight="90"/>;
                        case 2:
                          return <Travel transport={transport}/>;
                        default:null;
                      }
                    })()}
                </div>
                
            </div>
        </div>
    </Layout>
  )
}


export async function getServerSideProps(context){
    const {location} = context.params
    const res = await fetch(process.env.URL+"/api/v1/iternery/"+location);
    if(!res.ok)return{
        redirect: {
            destination: routes.page404,
            permanent: false,
          },
    };

    const data = await res.json()

    return {
        props:data
    }
}