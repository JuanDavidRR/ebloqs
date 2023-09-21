const styles = {
    gradient: 'background: linear-gradient(to right, var(--primary-blue) 10%, #9e5ef3 40%, var(--primary-purple) 100%)',
    btn: 'button w-max flex items-center justify-center transition duration-400 border border-transparent text-white px-10 py-5 rounded-lg border-2 border-primary-blue transition duration-400 snap-x snap-proximity snap-center shadow-md shadow-primary-blue hover:transform hover:scale-105 hover:shadow-md hover:shadow-primary-blue hover:shadow-primary-purple bg-slate-950',
    downloadBtn: 'button w-max-content md:w-[250px] flex flex-col items-center justify-center transition duration-400 border border-transparent text-white text-center gap-3 px-5 py-5 lg:py-8 rounded-lg bg-slate-950',
    outlineBtn: 'border-2 border-primary-blue transition duration-400 snap-x snap-proximity snap-center shadow-md shadow-primary-blue hover:transform hover:scale-105 hover:shadow-lg hover:shadow-primary-purple',
    xflexCenter: 'flex items-center justify-center',
    yflexCenter: 'flex flex-col items-center justify-center',

    navLinks: 'absolute lg:relative flex flex-col justify-space-evenly top-full left-neg100 w-full h-[95vh] transition duration-300 z-9 bg-slate-950 text-white text-20 font-bold md:flex-row items-center gap-10 list-none',

    innerWidth: 'w-[80%] mx-auto',

    paddings: 'px-5 pt-20 pb-10 lg:px-40 lg:pt-24 md:pt-20 md:pb-10 lg:pb-10 md:px-20',
    yPaddings: 'sm:py-16 xs:py-8 py-12',
    xPaddings: 'sm:px-16 px-6',
    topPaddings: 'sm:pt-16 xs:pt-8 pt-12',
    bottomPaddings: 'sm:pb-16 xs:pb-8 pb-12',
  
    flexCenter: 'flex justify-center items-center',
    flexStart: 'flex justify-start items-start',
    flexEnd: 'flex justify-end',

    simpleCard: 'shadow-md shadow-black-market p-8 rounded-lg',
  
    // hero section
    heroHeading:
        'font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[60px] 3g:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-red-500',
    heroDText:
        'md:w-[212px] sm:w-[80px] w-[60px] md:h-[108px] sm:h-[48px] h-[38px] md:border-[18px] border-[9px] rounded-r-[50px] border-white sm:mx-2 mx-[6px]',
  };
  
  export default styles;