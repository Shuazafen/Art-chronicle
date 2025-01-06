import React from 'react'
import img from '../assets/modern.png'
import img1 from '../assets/renassiance.png'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <div className='p-7 w-full h-[630px]'>
      <h1 className="text-center text-4xl font-semibold">Art Categories</h1>
      <div className="xl:grid grid-cols-2 grid-rows-1 h-[462px] top-[30px] bottom-[30px] gap-10 items-center md:block md:gap-4 sm:block sm:gap-4 mt-4">
        {/* modern art */}
        <div className="gap-[23px] w-[604px] min-w-[302px] items-center justify-items-center m-[0 auto] text-center justify-center g-[42px]">
          <Link to='/modern'><img src={img} alt="" className="w-[161px] h-[150px]" /> </Link>  
            <h2 className="text-[27px] font-semibold">Modern Art</h2>
            <p className="text-[20px] font-normal max-w-[520px]">Art that breaks tradition, embracing new styles and ideas from the late 19th century onward </p>
        </div>
         {/* Renaissance art */}
        <div className="gap-[23px] w-[604px] min-w-[302px] items-center justify-items-center m-[0 auto] text-center justify-center g-[42px]">
          <Link to='/renaissance'><img src={img1} alt="" className="w-[161px] h-[150px]" /> </Link>  
            <h2 className="text-[27px] font-semibold">Renaissance Art</h2>
            <p className="text-[20px] font-normal max-w-[520px]">Art that emerged in Europe during the 14th to 17th centuries, featuring bold, dramatic, and often abstract representations of human emotions and experiences </p>
        </div>
      </div> 
    </div>
  )
}

export default Category
