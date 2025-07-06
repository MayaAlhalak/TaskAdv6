
type FooterProps = {
  darkmode: boolean;
};

function Footer({ darkmode }: FooterProps) {
    
    const links = [
        {
            title :"Twitter ", 
            path : "#"
        },
        {
            title :"LinkedIn",
             path : "#"
        },
        {
            title :"Email",
             path : "#"
        },
        {
            title :"RSS feed",
             path : "#"
        },
        {
            title :"Add to Feedly",
             path : "#"
        },
    ]
  return (
    <section className={`${darkmode ? "dark" : ""} bg-white  dark:bg-[#090D1F] flex flex-col justify-center items-center gap-y-[30px] md:flex-row-reverse md:justify-end  pt-[30px] pb-[23px] md:pl-8 md:py-[30px] md:gap-3.5 lg:pl-28 mt-0`}>
      <ul className="flex flex-col justify-center items-center gap-y-3.5 md:flex-row md:gap-3.5">
        {
            links.map((item , index) => (
                <li key={index}><a href={item.path} className="text-xl font-normal font-display text-[#1A1A1A] leading-6 dark:text-white">{item.title}</a></li>
            ))
        }
      </ul>
      <p className="text-xl font-normal font-display text-[#1A1A1A] leading-6 dark:text-white">© 2023</p>
    </section>
  )
}

export default Footer
