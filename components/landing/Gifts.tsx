import React from 'react';
import { Gift } from 'lucide-react';

const Gifts: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-12">
          <Gift className="w-10 h-10 text-rose-500 mx-auto mb-4" />
          <h2 className="font-serif text-4xl text-gray-900">Registry & Gifts</h2>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto">
            Your presence at our wedding is the greatest gift of all. If you wish to honor us with a gift, a contribution to our honeymoon fund would be warmly appreciated.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow max-w-xs mx-auto">
            <h3 className="font-bold text-lg mb-2">Groom's Bank</h3>
            <p className="text-sm text-rose-500 font-bold mb-4">Michael Smith</p>
            <div className="w-32 h-32 bg-gray-100 mx-auto rounded-lg flex items-center justify-center mb-2">
               {/* Placeholder QR */}
               <div className="w-24 h-24 border-2 border-dashed border-gray-400 rounded flex items-center justify-center">QR</div>
            </div>
            <p className="text-xs text-gray-400">Scan to transfer</p>
          </div>

          <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow max-w-xs mx-auto">
            <h3 className="font-bold text-lg mb-2">Bride's Bank</h3>
            <p className="text-sm text-rose-500 font-bold mb-4">Jane Doe</p>
            <div className="w-32 h-32 bg-gray-100 mx-auto rounded-lg flex items-center justify-center mb-2">
               {/* Placeholder QR */}
               <div className="w-24 h-24 border-2 border-dashed border-gray-400 rounded flex items-center justify-center">QR</div>
            </div>
            <p className="text-xs text-gray-400">Scan to transfer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gifts;