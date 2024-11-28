import f1 from '../../../assets/icons/1.png'
import f2 from '../../../assets/icons/2.png'
import f3 from '../../../assets/icons/3.png'
import f4 from '../../../assets/icons/4.png'

const FeaturesCoffee = () => {
  return (
    <div className="bg-[#eceae3]">
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
      {/* Feature 1 */}
      <div className="flex flex-col items-start text-left  p-6 rounded-lg shadow-md">
        <div className="w-16 h-16 mb-4">
          <img 
            src={f1}
            alt="Awesome Aroma" 
            className="w-full h-full object-contain" 
          />
        </div>
        <h3 className="text-xl font-semibold text-[#372727] mb-2">Awesome Aroma</h3>
        <p className="text-gray-600">
          You will definitely be a fan of the design & aroma of your coffee
        </p>
      </div>

      {/* Feature 2 */}
      <div className="flex flex-col items-start text-left  p-6 rounded-lg shadow-md">
        <div className="w-16 h-16 mb-4">
          <img 
            src={f2}
            alt="High Quality" 
            className="w-full h-full object-contain" 
          />
        </div>
        <h3 className="text-xl font-semibold text-[#372727] mb-2">High Quality</h3>
        <p className="text-gray-600">
          We served the coffee to you maintaining the best quality
        </p>
      </div>

      {/* Feature 3 */}
      <div className="flex flex-col items-start text-left  p-6 rounded-lg shadow-md">
        <div className="w-16 h-16 mb-4">
          <img 
            src={f3}
            alt="Pure Grades" 
            className="w-full h-full object-contain" 
          />
        </div>
        <h3 className="text-xl font-semibold text-[#372727] mb-2">Pure Grades</h3>
        <p className="text-gray-600">
          The coffee is made of the green coffee beans which you will love
        </p>
      </div>

      {/* Feature 4 */}
      <div className="flex flex-col items-start text-left  p-6 rounded-lg shadow-md">
        <div className="w-16 h-16 mb-4">
          <img 
            src={f4}
            alt="Proper Roasting" 
            className="w-full h-full object-contain" 
          />
        </div>
        <h3 className="text-xl font-semibold text-[#372727] mb-2">Proper Roasting</h3>
        <p className="text-gray-600">
          Your coffee is brewed by first roasting the green coffee beans
        </p>
      </div>
    </div>
    </div>
  );
};

export default FeaturesCoffee;
