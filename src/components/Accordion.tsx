import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  id: string;
  title: string;
  backgroundImage: string;
  description: string;
  children: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="border border-gray-200 rounded-2xl overflow-hidden">
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full relative h-32 bg-cover bg-center flex items-center justify-between p-6 text-left hover:opacity-90 transition-opacity"
            style={{ backgroundImage: `url(${item.backgroundImage})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 text-white">
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-lg opacity-90">{item.description}</p>
            </div>
            <ChevronDown 
              className={`relative z-10 h-6 w-6 text-white transition-transform ${
                openItems.includes(item.id) ? 'rotate-180' : ''
              }`} 
            />
          </button>
          
          {openItems.includes(item.id) && (
            <div className="p-6 bg-white">
              {item.children}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;