
import { useDispatch, useSelector } from 'react-redux'
import Form from '../../component/Form/Form'
import Card from '../../component/Card/Card'
import { useEffect } from 'react'
import { THREEITEM } from '../../redux/Slice'
import { useOutletContext } from 'react-router-dom'
import type { ContextType } from '../Home/Home'

function Newsletter() {
  const { openNav } = useOutletContext<ContextType>();
  const threeItem = useSelector((state : any) => state.articles.threeitem)
 const dispatch = useDispatch()
  useEffect(() => {
       dispatch(THREEITEM());
  }
 
  , [])
  const { darkmode } = useOutletContext<ContextType>();
  return (
    <section className={`${darkmode ? "dark" : ""} dark:bg-[#090D1F] pt-[92px] md:pt-[152px] lg:pt-[120px] px-8 lg:px-28 mb-0 ${openNav ? 'absolute z-[-1] ' : ''}`}>
        <Form
            title= "Newlatters"
            text = "Stories and interviews"
            btn = "Subscribe"
    />
      <div >
        <h3 className='text-2xl font-semibold text-[#1A1A1A] font-display mb-8'>Recent blog posts</h3>
        <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-x-4 '>
            {
              Array.isArray(threeItem) &&
              threeItem.map((item , index) =>(
                <Card
                  key={index}
                  id={item.id}
                  flex1={false}
                  flex2={false}
                  width={false}
                  image={item.image}
                  date={item.date}
                  title = {item.title}
                  contentshort = {item.contentshort}
                  btn1={item?.btn1}
                  btn2={item?.btn2}
                  btn3={item?.btn3}
                  extraClass={index === 0 || index === 1  ? "mb-8 md:mb-6" : "mb-[50px] lg:mb-[30px] md:col-span-2 lg:col-span-1"}
                  
                   
                  />
              ))
            }
        </div>
      </div>
  
    </section>
  )
}

export default Newsletter
