
import img1 from '../../../assets/cups/Rectangle 9.png'
import img2 from '../../../assets/cups/Rectangle 10.png'
import img3 from '../../../assets/cups/Rectangle 11.png'
import img4 from '../../../assets/cups/Rectangle 12.png'
import img5 from '../../../assets/cups/Rectangle 13.png'
import img6 from '../../../assets/cups/Rectangle 14.png'
import img7 from '../../../assets/cups/Rectangle 15.png'
import img8 from '../../../assets/cups/Rectangle 16.png'


const FollowUs = () => {
    return (
        <div className="my-12">
         <div className="text-center">
            <h3 className=''>Follow Us Now</h3>
            <h1 className='text-4xl font-extrabold text-coffee'>Follow on Instagram</h1>
        </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 px-3 md:px-0">
               <img src={img1} alt="Coffee Of cup" className="w-full h-auto object-cover rounded-lg" />
               <img src={img2} alt="Coffee Of cup" className="w-full h-auto object-cover rounded-lg" />
               <img src={img3} alt="Coffee Of cup" className="w-full h-auto object-cover rounded-lg" />
               <img src={img4} alt="Coffee Of cup" className="w-full h-auto object-cover rounded-lg" />
               <img src={img5} alt="Coffee Of cup" className="w-full h-auto object-cover rounded-lg" />
               <img src={img6} alt="Coffee Of cup" className="w-full h-auto object-cover rounded-lg" />
               <img src={img7} alt="Coffee Of cup" className="w-full h-auto object-cover rounded-lg" />
               <img src={img8} alt="Coffee Of cup" className="w-full h-auto object-cover rounded-lg" />
           </div>
        </div>
    );
};

export default FollowUs;