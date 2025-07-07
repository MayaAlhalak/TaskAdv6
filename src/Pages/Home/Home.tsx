import { useOutletContext } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../component/Card/Card";
import { useEffect, useState } from "react";
import { CHOSEFOUR, choseOne, setPage, TWOITEM } from "../../redux/Slice";
 export type ContextType = {
  darkmode: boolean;
  openNav: boolean;
};
interface item {
  id: number;
  image: string;
  date: string;
  title: string;
  contentshort: string;
  btn1: string;
  btn2: string;
  btn3: string;
}

function Home() 
{
const { darkmode } = useOutletContext<ContextType>();
const { openNav } = useOutletContext<ContextType>();
const { articles, currentPage, pageSize } = useSelector((state: any) => state.articles);
const dispatch = useDispatch();
const startIndex = (currentPage - 1) * pageSize;
const endIndex = startIndex + pageSize;
const paginatedArticles : item[] = articles.slice(4).slice(startIndex, endIndex);
const totalPages = 10;  
const [mascroll, masetScroll] = useState<boolean>(false);
const mainArticle = useSelector((state: any) => state.articles.mainArticle)
const twoArticle = useSelector((state: any) => state.articles.twoArticle)
const fourArticle = useSelector((state: any) => state.articles.fourArticle)
useEffect(() => {
  dispatch(choseOne());
  dispatch(TWOITEM());
  dispatch(CHOSEFOUR());

}, [dispatch]);
  useEffect(() => {
    const scrollx = () =>{
      masetScroll(window.innerWidth < 500);
    }
    scrollx();
    window.addEventListener('scroll' , scrollx)
  return () => window.removeEventListener('scroll' , scrollx)
  },[])
 

return(
  <section className={`${darkmode ? "dark" : ""} dark:bg-[#090D1F] ${openNav ? 'absolute z-[-1] ' : ''} `}>
    <div className=" pt-[100px] md:pt-[110px] lg:pt-[130px] ">
      <h1 className="text-7xl font-bold leading-[100%] md:text-[160.8px] lg:text-[243.8px] border-y-1 px-[14.5px] border-[#00000057] dark:border-white text-[#1A1A1A] dark:text-white text-center">THE BLOG</h1>
    </div>
    <div className="px-8 lg:px-28">
        <h3 className="font-display text-2xl font-semibold text-[#1A1A1A]  leading-8  mt-[50px] md:mt-[60px] lg:mt-[30px] mb-8 dark:text-white">Recent blog posts</h3>
        <div className="flex lg:justify-between justify-center flex-wrap lg:flex-row flex-col mb-[30px] lg:mb-0 ">
            <div className="mb-8 lg:mb-[30px]">
                  {
              mainArticle &&
                <Card 
                  id={mainArticle.id}
                  width = {true}
                  flex1={false}
                  flex2 = {false}
                  image={mainArticle.image}
                  date={mainArticle.date}
                  title = {mainArticle.title}
                  contentshort = {mainArticle.contentshort}
                  btn1={mainArticle?.btn1}
                  btn2={mainArticle?.btn2}
                  btn3={mainArticle?.btn3}/>
            }
            </div>
            <div className="flex flex-col ">
              {Array.isArray(twoArticle) &&
                twoArticle.map((item , index) => (
                    <Card 
                      key={index}
                      id={item.id}
                      flex1 = {true}
                      flex2 = {false}
                      width = {true}
                      image={item.image}
                      date={item.date}
                      title = {item.title}
                      contentshort = {item.contentshort}
                      btn1={item?.btn1}
                      btn2={item?.btn2}
                      btn3={item?.btn3}
                      extraClass={index === 0 ? "mb-8 lg:mb-0 md:mb-0" : ""}
              />
                ))
          }
            </div>
        </div>
        <div className="pt-[30px]">
          {
          fourArticle &&
            <Card 
              id={fourArticle.id}
              flex2 = {true}
              flex1 = {true}
              width={false}
              image={fourArticle.image}
              date={fourArticle.date}
              title = {fourArticle.title}
              contentshort = {mascroll ? fourArticle.contentshort.slice(0 , 50) :fourArticle.contentshort}
              btn1={fourArticle?.btn1}
              btn2={fourArticle?.btn2}
              btn3={fourArticle?.btn3}/>
          
        }
        </div>
      <div>
          <h3 className="font-display text-2xl font-semibold text-[#1A1A1A]  leading-8  mt-[60px] md:mt-[30px] lg:mt-[28px] mb-8 dark:text-white">Recent blog posts</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mb-[30px] ">
            {paginatedArticles.map((item :item , index) => (
              <Card
                key={index}
                width={false}
                flex1={false}
                flex2 = {false}
                id={item.id}
                image={item.image}
                date={item.date}
                title={item.title}
                contentshort={item.contentshort}
                btn1={item?.btn1}
                btn2={item?.btn2}
                btn3={item?.btn3}
              />
            ))}
          </div>
          {/* pagination controls */}
          <div className="flex justify-center md:justify-between flex-col md:flex-row  gap-5 pt-5 pb-[50px] md:pb-[60px] border-t border-[#EAECF057]">
            <button
              onClick={() => dispatch(setPage(currentPage - 1))}
              disabled={currentPage === 1}
              className="flex items-center justify-center gap-x-2 text-[#667085] dark:text-[#EFEFEF] text-[14px] font-medium leading-5">
              <img src="/assets/image/home/Icon (1).svg" className="dark:invert dark:brightness-0 dark:contrast-200" alt="" /> Previous
            </button>
            <div className="flex items-center justify-center gap-0.5">
          {Array.from({ length: totalPages }, (_, idx) => {
            const page = idx + 1;
            const showPage =
              page <= 3 ||
              page > totalPages - 3 ||
              Math.abs(page - currentPage) <= 1;

            if (
              (page === 4 && currentPage > 5) ||
              (page === totalPages - 3 && currentPage < totalPages - 4)
            ) {
              return (
                <span key={`dots-${page}`} className="text-[#667085] dark:text-[#EFEFEF] px-2">
                  ...
                </span>
              );
            }
            return showPage ? (
              <button
                key={page}
                onClick={() => dispatch(setPage(page))}
                className={`px-[15.5px] py-2.5 text-sm font-medium rounded-lg
                  ${currentPage === page
                    ? 'bg-[#F9F5FF] text-[#7F56D9] dark:bg-white dark:text-[#112211]'
                    : 'text-[#667085] dark:text-[#EFEFEF]'
                  }`}
              >
                {page}
              </button>
                ) : null;
              })}
            </div>
            <button
              onClick={() => dispatch(setPage(currentPage + 1))}
              disabled={currentPage === totalPages}
              className=" flex items-center justify-center gap-x-2 text-[#667085] dark:text-[#EFEFEF] text-[14px] font-medium leading-5"
            >
              Next <img src="/assets/image/home/Icon.svg" className="dark:invert dark:brightness-0 dark:contrast-200" alt="" />
            </button>
          </div>
  </div>
  </div>
  </section>
)
}
export default Home;