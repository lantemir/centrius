



import Image from 'next/image';

const Footer = () => {
  


  return (
    <footer id="contact" className="w-full bg-accent text-primary shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4 md:p-6">
     
        <Image 
            src="/icons/logo1.svg"
            width={100}
            height={100}
            alt='logo'
            className='max-sm:size-100'
        />
        <div >
        <p>nfo@centrius.kz</p>
        <p>+7 701 220 55 43</p>
        </div>
     

        </div>
       
    </footer>
  );
};

export default Footer;