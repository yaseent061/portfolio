import React, { useEffect, useState } from 'react'

const AnimeFonts = ({text ,type,changeTime}) => {

    const [print,setPrint] =useState("")

    useEffect(() => { 
      text.split('').forEach((_,ind,arr)=>{
        setTimeout(()=>{
          setPrint(arr.slice(0, ind+1).join(''))
          if(ind === arr.length-1) setTimeout(()=>changeTime(),300)
        },100+(ind*80))
      })
     },[])

    const splitAlph=(intro)=>{
       return intro.split(' ').map((alph)=>{
            return <div>{alph.split('').map(v=>{
              if(v.toLowerCase() === 'y' && type == 'main')
              return (<span className='name'>{v}</span>)

              return (<span className={`${type === 'main' ? 'intro' : 'info'}`}>{v}</span>)
          })}</div>
        }).flat()
    }
  return (
    <>
    <div className='pl-80 pt-10 p-40'>{splitAlph(print)}</div>
    </>
  )
}

export default AnimeFonts