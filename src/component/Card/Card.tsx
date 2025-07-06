import { useNavigate } from "react-router-dom";

  interface Article {
  id: number;
  image: string;
  date: string;
  title: string;
  contentshort: string;
  flex1 : boolean;
  flex2 : boolean;
  width : boolean;
  btn1:string;
  btn2:string;
  btn3:string;
};

function Card({image , date ,title ,contentshort , flex1 , flex2 , width , btn1, btn2 , btn3 , id } : Article) {

  const numberId1 = id === 1 ? 'text-[#6941C6] bg-[#F9F5FF] ' : 
   id === 4 ? 'text-[#6941C6] bg-[#F9F5FF] ' : 
   id === 5 ? 'text-[#6941C6] bg-[#F9F5FF] ' : 
   id === 7 ? 'text-[#6941C6] bg-[#F9F5FF] ' : 
   id === 8 ? 'text-[#6941C6] bg-[#F9F5FF] ' : 
   id === 10 ? 'text-[#6941C6] bg-[#F9F5FF] ' : 
  id === 2 ? 'text-[#026AA2] bg-[#F0F9FF]' : 
  id === 3 ? 'text-[#027A48] bg-[#ECFDF3]' : 
  id === 9 ? 'text-[#027A48] bg-[#ECFDF3]' : 
  id ==  6 ? 'text-[#026AA2] bg-[#F0F9FF]' :
  '';
  const numberId2 = id
  === 1 ? 'text-[#3538CD] bg-[#EEF4FF]' : 
  id === 2  ? 'text-[#C11574] bg-[#FDF2FA]' :
  id ===  3 ? 'text-[#C11574] bg-[#FDF2FA]' :
  id ===  4 ? 'text-[#C11574] bg-[#FDF2FA]' :
  id === 5 ? 'text-[#363F72] bg-[#F8F9FC]':
  id === 10 ? 'text-[#363F72] bg-[#F8F9FC]':
   id ==  6 ? 'text-[#3538CD] bg-[#EEF4FF]'  :
   id ==  7 ? 'text-[#3538CD] bg-[#EEF4FF]'  :
   id ==  9 ? 'text-[#C11574] bg-[#FDF2FA]'  :
    '' ;
  const numberId3 = id
  === 1 ? 'text-[#C11574] bg-[#FDF2FA]' : 
  id === 6 ? 'text-[#C4320A] bg-[#FFF6ED]' :
  id === 9 ? 'text-[#C01048] bg-[#FFF1F3]' :
  '' ;
  const Navigate = useNavigate()
const goToBlog = () =>{
  Navigate(`/blog/${id}`);
}
    return (
       <div className={` ${flex1 ? 'flex justify-between items-center md:flex-row flex-col ' : ''} ${width ? 'gap-x-6 w-[326px] md:w-[770px] lg:w-[592px]  ' : 'gap-x-8 '} ${flex2 ? 'lg:flex-row! md:flex-col! ' : ''}`} >
          <img src={image} alt=""  className={`w-[100%] lg:mb-8 mb-6  ${width ? '' : 'h-[200px] md:h-[188px] lg:h-[246px]'}`}/>
          <div className=" lg:flex-row flex-col">
              <p className="text-[#6941C6] font-display text-[14px] font-semibold mb-3 leading-5">{date}</p>
              <div  className="flex justify-between items-center">
                <h4 className={`font-display  mb-3 text-2xl font-semibold leading-8 ${flex1 ? 'text-lg' : ''} dark:text-[#FFFFFF] `}>{title}</h4>
                <button onClick={goToBlog}><img src="/TaskAdv6/assets/image/home/arrow-up-right.svg" className="dark:invert " alt="" /></button>
              </div>
              <p className="mb-6 font-display text-base font-semibold text-[#667085] dark:text-[#C0C5D0]">{contentshort}</p>
              <div>
              <button className={`${numberId1} font-medium text-[14px] font-display leading-5 rounded-[16px] py-0.5 px-2.5` }>{btn1}</button>
              <button className={`${numberId2} font-medium text-[14px] font-display leading-5 rounded-[16px] py-0.5 px-2.5 mx-2`}>{btn2}</button>
              <button className={`${numberId3} font-medium text-[14px] font-display leading-5 rounded-[16px] py-0.5 px-2.5`}>{btn3}</button>
              </div>
          </div>
        </div>
  )
}

export default Card
