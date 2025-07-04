

function Form({title , text  , btn }) {
  return (
    <>
    <div className="flex items-center justify-center flex-col px-8">
        <p className="text-[#7F56D9] text-[16px] font-semibold leading-6 font-display mb-3 ">{title}</p>
        <h3 className="text-5xl font-semibold font-display leading-[60px] text-[#1A1A1A] mb-6 dark:text-white ">{text}</h3>
        <p className="font-normal text-xl font-display text-[#667085] mb-10 md:text-center dark:text-[#C0C5D0]">Subscribe to learn about new  <br className="md:hidden"/> product  features, the latest in <br className="md:hidden"/> technology<br className="hidden md:block"/>, solutions, and <br className="md:hidden"/> updates.</p>
    </div>
    <div className="flex items-center justify-center flex-col px-8">
        <form >
            <input type="text" name="" id="" placeholder="Enter your email" className="border border-[#D0D5DD] rounded-lg py-3 pl-4 pr-3.5 w-[326px] mb-3" />
            <button className="font-medium text-[16px] leading-6 text-white py-3 px-5 bg-[#7F56D9] rounded-lg mb-8 md:mb-2 md:ml-4">{btn}</button>
        </form>
        <p className="text-sm font-normal  font-display leading-5 text-[#667085]  dark:text-[#C0C5D0]">We care about your data in our <span className="underline">privacy policy</span></p>
    </div>
    </>
  )
}

export default Form
