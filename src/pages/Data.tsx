import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { dataFetch } from '../redux/DataSlice'

const Data = () => {
    const dispatch = useDispatch(state => state.item)

    useEffect(() => {
        dispatch(dataFetch())
    },[])

  return (
    <div>Data</div>
  )
}

export default Data