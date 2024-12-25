import React from 'react'
import useStore from '../zustand/zustand';
import { Link } from "react-router";
const shopStore=()=> {
    const { count} = useStore();
  return (
    <>shopStore
    <button on></button>
    </>
  )
}
export default shopStore