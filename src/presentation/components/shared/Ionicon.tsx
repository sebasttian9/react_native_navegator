import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    size?: number,
    name: string,
    color?: string
}

const Ionicon = ({name, size= 20, color = 'black'}:Props) => {
  return (
    <Icon 
        name={name} 
        size={size} 
        color={color}
    />
  )
}

export default Ionicon