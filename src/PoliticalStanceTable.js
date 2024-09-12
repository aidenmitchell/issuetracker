import React, { useState, useRef, useEffect } from 'react';
import { Check, X, Minus, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const data = [
  {
    issue: "Tax Reform",
    NDP: { stance: "support", explanation: "Supports progressive taxation", source: "https://www.ndp.ca/tax-policy" },
    Conservative: { stance: "oppose", explanation: "Favors tax cuts", source: "https://www.conservative.ca/tax-policy" },
    Green: { stance: "mixed", explanation: "Supports eco-friendly tax policies", source: "https://www.greenparty.ca/tax-policy" }
  },
  {
    issue: "Healthcare",
    NDP: { stance: "mixed", explanation: "Supports universal pharmacare", source: "https://www.ndp.ca/healthcare" },
    Conservative: { stance: "support", explanation: "Advocates for private options", source: "https://www.conservative.ca/healthcare" },
    Green: { stance: "unknown", explanation: "Policy under review", source: "https://www.greenparty.ca/healthcare" }
  },
  {
    issue: "Education",
    NDP: { stance: "oppose", explanation: "Against privatization", source: "https://www.ndp.ca/education" },
    Conservative: { stance: "mixed", explanation: "Supports both public and private", source: "https://www.conservative.ca/education" },
    Green: { stance: "support", explanation: "Advocates for increased funding", source: "https://www.greenparty.ca/education" }
  },
  {
    issue: "Climate Change",
    NDP: { stance: "support", explanation: "Supports carbon pricing", source: "https://www.ndp.ca/climate" },
    Conservative: { stance: "oppose", explanation: "Against carbon tax", source: "https://www.conservative.ca/climate" },
    Green: { stance: "support", explanation: "Advocates for green energy", source: "https://www.greenparty.ca/climate" }
  },
];

const StanceIcon = ({ stance }) => {
  switch (stance) {
    case 'support':
      return <Check className="text-green-500" />;
    case 'oppose':
      return <X className="text-red-500" />;
    case 'mixed':
      return <Minus className="text-yellow-500" />;
    default:
      return <HelpCircle className="text-gray-500" />;
  }
};

const ExpandedRow = ({ rowData, isExpanded }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const contentEl = contentRef.current;
    if (contentEl) {
      const newHeight = isExpanded ? contentEl.scrollHeight : 0;
      setHeight(newHeight);
    }
  }, [isExpanded]);

  return (
    <tr>
      <td colSpan="4" className="p-0">
        <div 
          style={{ height: `${height}px` }}
          className="transition-all duration-300 ease-in-out bg-gray-100 overflow-hidden"
        >
          <div ref={contentRef} className="px-4 py-2">
            <div className={`grid grid-cols-3 gap-4 transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
              {['NDP', 'Conservative', 'Green'].map((party) => (
                <div key={party} className="space-y-2">
                  <h3 className="font-semibold">{party}</h3>
                  <p>{rowData[party].explanation}</p>
                  <a href={rowData[party].source} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    Source
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

const PoliticalStanceTable = () => {
  const [expandedRow, setExpandedRow] = useState(null);

  const toggleRow = (index) => {
    setExpandedRow(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left">Issue</th>
            <th className="px-4 py-2 text-left">NDP</th>
            <th className="px-4 py-2 text-left">Conservative</th>
            <th className="px-4 py-2 text-left">Green</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <React.Fragment key={index}>
              <tr 
                className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} cursor-pointer hover:bg-gray-200`}
                onClick={() => toggleRow(index)}
              >
                <td className="px-4 py-2 flex items-center">
                  {expandedRow === index ? <ChevronUp size={16} className="mr-2" /> : <ChevronDown size={16} className="mr-2" />}
                  <span>{row.issue}</span>
                </td>
                <td className="px-4 py-2 text-center"><StanceIcon stance={row.NDP.stance} /></td>
                <td className="px-4 py-2 text-center"><StanceIcon stance={row.Conservative.stance} /></td>
                <td className="px-4 py-2 text-center"><StanceIcon stance={row.Green.stance} /></td>
              </tr>
              <ExpandedRow rowData={row} isExpanded={expandedRow === index} />
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PoliticalStanceTable;