
import { useDispatch, useSelector } from 'react-redux'
import Form from '../../component/Form/Form'
import Card from '../../component/Card/Card'
import { useEffect } from 'react'
import { THREEITEM } from '../../redux/Slice'
import { useOutletContext } from 'react-router-dom'

function Newsletter() {
  const threeItem = useSelector((state : any) => state.articles.threeitem)
 const dispatch = useDispatch()
  useEffect(() => {
       dispatch(THREEITEM());
  }
 
  , [])
     type ContextType = {
  darkmode: boolean;
};
  const { darkmode } = useOutletContext<ContextType>();
  return (
    <section className={`${darkmode ? "dark" : ""} dark:bg-[#090D1F]`}>
        <Form
            title= "Newlatters"
            text = "Stories and interviews"
            btn = "Subscribe"
    />
      <div className='px-8 mb-5'>
        <h3 className='text-2xl font-semibold text-[#1A1A1A] font-display mb-8'>Recent blog posts</h3>
        <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-x-4'>
            {
              Array.isArray(threeItem) &&
              threeItem.map((item , index) =>(
                <Card
                  id={item.id}
                  image={item.image}
                  date={item.date}
                  title = {item.title}
                  contentshort = {item.contentshort}
                  btn1={item?.btn1}
                  btn2={item?.btn2}
                  btn3={item?.btn3}/>
              ))
            }
        </div>
      </div>
  
    </section>
  )
}

export default Newsletter
