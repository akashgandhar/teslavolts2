import dynamic from 'next/dynamic';
import React from 'react'


const MyComponentNoSSR = dynamic(() => import('./components/Home/page'), {

    ssr: false
  
  });

export default function Page() {
  return (
    <MyComponentNoSSR />    
  )
}
