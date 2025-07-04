import { useDispatch, useSelector } from "react-redux";
import { useOutletContext, useParams } from "react-router-dom";
import Card from "../../component/Card/Card";
import CardArtical from "../../component/CardArtical/CardArtical";
import { useEffect } from "react";
import { SLICENINEITEM } from "../../redux/Slice";
import Form from "../../component/Form/Form";


    type ContextType = {
  darkmode: boolean;
  openNav: boolean;
};
export function Blog() {
   const { id } = useParams();
   const numericId = Number(id);

const { darkmode } = useOutletContext<ContextType>();
 const { openNav } = useOutletContext<ContextType>();
    //  search id
    const artical = useSelector((state:any) =>state.articles.articles.find((item:any) => item.id==id))
    const alldate = useSelector((state:any) =>state.articles.Allinfo.find((item: any) => item.id == numericId))
  const numberId1 = numericId === 1 ? 'text-[#6941C6] bg-[#F9F5FF] ' : 
   numericId === 4 ? 'text-[#6941C6] bg-[#F9F5FF] ' : 
   numericId === 5 ? 'text-[#6941C6] bg-[#F9F5FF] ' : 
   numericId === 7 ? 'text-[#6941C6] bg-[#F9F5FF] ' : 
   numericId === 8 ? 'text-[#6941C6] bg-[#F9F5FF] ' : 
   numericId === 10 ? 'text-[#6941C6] bg-[#F9F5FF] ' : 
  numericId === 2 ? 'text-[#026AA2] bg-[#F0F9FF]' : 
  numericId === 3 ? 'text-[#027A48] bg-[#ECFDF3]' : 
  numericId === 9 ? 'text-[#027A48] bg-[#ECFDF3]' : 
  numericId ==  6 ? 'text-[#026AA2] bg-[#F0F9FF]' :
  '';
  const numberId2 = numericId
  === 1 ? 'text-[#3538CD] bg-[#EEF4FF]' : 
  numericId === 2  ? 'text-[#C11574] bg-[#FDF2FA]' :
  numericId ===  3 ? 'text-[#C11574] bg-[#FDF2FA]' :
  numericId ===  4 ? 'text-[#C11574] bg-[#FDF2FA]' :
  numericId === 5 ? 'text-[#363F72] bg-[#F8F9FC]':
  numericId === 10 ? 'text-[#363F72] bg-[#F8F9FC]':
   numericId ==  6 ? 'text-[#3538CD] bg-[#EEF4FF]'  :
   numericId ==  7 ? 'text-[#3538CD] bg-[#EEF4FF]'  :
   numericId ==  9 ? 'text-[#C11574] bg-[#FDF2FA]'  :
    '' ;
  const numberId3 = numericId
  === 1 ? 'text-[#C11574] bg-[#FDF2FA]' : 
  numericId === 6 ? 'text-[#C4320A] bg-[#FFF6ED]' :
  numericId === 9 ? 'text-[#C01048] bg-[#FFF1F3]' :

  '' ;
 const dispatch = useDispatch()

const slicenineitem = useSelector((state: any) => state.articles.nineitem); 
useEffect(() => {
  dispatch(SLICENINEITEM(numericId)); 
}, [dispatch, numericId]);


    return (
   <section className={`${darkmode ? "dark" : ""} dark:bg-[#090D1F] bg-white ${openNav ? 'absolute z-[-1] ' : ''}  `}>pt-
    <section className="flex flex-col-reverse md:flex-row justify-between px-[31px] md:px-8 lg:px-36 5 md:pt-[23px] lg:pt-[30px] gap-x-8 md:gap-x-4 mb-10  md:mb-8">
        <div className="md:w-[342px] ">
              {Array.isArray(slicenineitem) && 
                  slicenineitem.map((item , index) => (
                    <Card
                    key={index}
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
        <div className="md:w-[412px] lg:w-[778px]">
            {
            artical && 
            <>
            <p className="text-[#6941C6] font-display text-[14px] font-semibold mb-8 leading-5 dark:text-white">{artical.date}</p>
            <h3 className="text-[#1A1A1A] text-4xl font-bold leading-8 font-display mb-8 dark:text-white">{artical.title}</h3>
            <img src={artical.image} className="mb-8" alt="" />
            </>
            }
            <div>
            {alldate &&
                   <CardArtical
                    part1 ={alldate.part1}
                    part2 ={alldate.part2}
                    part3 ={alldate.part3}
                    part4 ={alldate.part4}
                    part5 ={alldate.part5}
                    part6 ={alldate.part6}
                    part7 ={alldate.part7}
                    part8 ={alldate.part8}
                    part9 ={alldate.part9}
                    part10 ={alldate.part10}
                    part11 ={alldate.part11}
                    part12 ={alldate.part12}
                    part13 ={alldate.part13}
                    part14 ={alldate.part14}
                    part15 ={alldate.part15}
                    part16 ={alldate.part16}
                    part17 ={alldate.part17}
                    part18 ={alldate.part18}
                    part19 ={alldate.part19}
                    part20 ={alldate.part20}
                    part21 ={alldate.part21}
                    part22 ={alldate.part22}
                    part23 ={alldate.part23}
                    part24 ={alldate.part24}
                    defind = {alldate.defind}
                    defind2 = {alldate.defind2}
                    defind3 = {alldate.defind3}
                    defind4 = {alldate.defind4}
                    defind5 = {alldate.defind5}
                    defind6 = {alldate.defind6}
                    ex1 = {alldate.ex1}
                    ex2 = {alldate.ex2}
                    ex3 = {alldate.ex3}
                    ex4 = {alldate.ex4}
                    image1 = {alldate.image1}
                    image2={alldate.image2}
                    image3={alldate.image3}
                    image4={alldate.image4}
                    image5={alldate.image5}
                    image6={alldate.image6}
                    image7={alldate.image7}
                    image8={alldate.image8}
                    image9={alldate.image9}
              />
            }
           
            </div>
            {
            artical && 
            <div className="mt-6">
              <button className={`${numberId1} font-medium text-[14px] font-display leading-5 rounded-[16px] py-0.5 px-2.5` }>{artical?.btn1}</button>
              <button className={`${numberId2} font-medium text-[14px] font-display leading-5 rounded-[16px] py-0.5 px-2.5 mx-2`}>{artical?.btn2}</button>
              <button className={`${numberId3} font-medium text-[14px] font-display leading-5 rounded-[16px] py-0.5 px-2.5`}>{artical?.btn3}</button>

            </div>
            }
        </div>
    </section>
    <Form
    title= "Newlatters"
    text = "Stories and interviews"
    btn = "Subscribe"
    />
  
    </section>

  )
}

