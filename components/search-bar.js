'use client'
import React from 'react'
import {FiSearch} from "react-icons/fi"
import { useSearchParams, usePathname, useRouter} from "next/navigation"
import { useDebouncedCallback } from 'use-debounce'

const SearchBar = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const {replace} = useRouter()

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams)
    params.set("page", "1")
    if(term){
      params.set("query", term)
    } else {
      params.delete("query")
    }
    replace(`${pathname}?${params.toString()}`)
  }, 300)
  return (
    <div className='relative flex flex-1'>
      <input
        type='text'
        className='w-full border border-gray-800 py-2 pl-10 text-sm outline-2 rounded-md'
        placeholder='Search...'
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <FiSearch className='absolute left-3 top-2 w-5 h-5 text-gray-500' />
    </div>
  )
}

export default SearchBar