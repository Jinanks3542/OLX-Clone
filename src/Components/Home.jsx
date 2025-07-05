import React, { useEffect, useState } from 'react'
import Navbar from './Navbar/Navbar'
import Login from './Modal/Login'
import Sell from './Modal/Sell'
import Card from './Card/Card'
import { itemsContext } from './Context/Item'
import { fetchFromFirestore } from './Firebase/Firebase'



function Home() {

    const [openModal,setModal] = useState(false)
    const [openModalSell, setModalSell] = useState(false)
    
    
    const toggleModal = ()=> {setModal(!openModal)}
    const toggleModalSell = ()=>{setModalSell(!openModalSell)}

    const itemsCtx = itemsContext()

    useEffect(()=>{
      const getItems = async ()=>{
      const datas = await fetchFromFirestore()
      console.log('itemsCtx................:', itemsCtx);

      itemsCtx ?.setItems(datas);

      }

      getItems()

    },[])

    useEffect(()=>{
      console.log('Updated items:',itemsCtx.items);
      
    },[itemsCtx.items])


  return (
    <div>
        <Navbar  toggleModal={toggleModal} toggleModalSell={toggleModalSell}/>
        <Login toggleModal= {toggleModal} status ={openModal} />
        <Sell setItems={(itemsCtx).setItems} toggleModalSell={toggleModalSell} status={openModalSell}/>

        <Card items={(itemsCtx).items || []} />
    </div>
  )
}

export default Home
  