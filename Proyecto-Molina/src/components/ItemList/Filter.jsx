import { useState } from "react";

export const Filter = ({children,products})=>{

    const [filterState, setFilterState] =useState('');

    const handleFilterChange = (e)=>{
        setFilterState(e.target.value);
    }

    const filterProducts = ()=>{
        return products.filter((prod)=>prod.name.toLowerCase().includes(filterState.toLowerCase()))

    }

    return children({
        products: filterProducts(),
        filterState,
        handleFilterChange
    })
}