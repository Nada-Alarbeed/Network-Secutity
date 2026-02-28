const Footer = () => {
    const date = new Date().getFullYear();
    
    return (
      <footer className="bg-primaryCard border-t border-border py-8 ">
            <div className="center-container">
                <div className="flex flex-col items-center justify-center text-center">
                    <p className="text-white text-sm md:text-base mb-2">
                        &copy; Copyright {date} - Designed & Developed by 
                        <span className="text-blue font-bold ml-1"> Nada Alarbeed</span>
                    </p>
                    <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest opacity-70">
                        Network Security Final Project - Suwayda NextGen
                    </p>
                    
                </div>
            </div>
        </footer>
    );
}

export default Footer;