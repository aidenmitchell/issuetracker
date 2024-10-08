import React, { useState, useRef, useEffect } from 'react';
import { Check, X, Minus, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { issues } from './issues';

const PartyIcon = ({ party }) => {
  const icons = {
    NDP: (
      <svg xmlns="http://www.w3.org/2000/svg" id='logo' viewBox='0 0 100 100' className="w-5 h-5">
        <path 
          d='M 11.157536,3.2360732 0,94.082419 a 21.183648,21.183648 0 0 1 11.513521,-3.94425 c 8.150045,0 10.317606,3.976561 16.171408,5.787678 a 17.399698,17.399698 0 0 0 13.129659,-0.64679 12.483798,12.483798 0 0 1 -2.555403,-4.462343 8.7321903,8.7321903 0 0 0 -6.726946,-5.789351 11.093117,11.093117 0 0 1 11.450013,3.233947 12.06336,12.06336 0 0 0 8.764247,2.296358 L 42.044658,73.223037 59.314103,83.636849 A 33.408715,33.408715 0 0 1 56.726945,72.479313 11.319506,11.319506 0 0 0 52.165993,63.521196 c 5.498046,0.67917 7.278352,3.071197 9.218839,7.987097 a 14.262578,14.262578 0 0 0 7.340308,7.179865 l 0.583281,-18.950764 c 0,0 7.92332,16.655584 8.214393,16.590902 a 28.040034,28.040034 0 0 1 3.718621,-10.510747 c 3.234145,-6.177216 1.455694,-9.088478 1.455694,-9.088478 4.560143,3.880973 3.395834,7.115263 3.040076,11.319651 -0.355752,4.204387 3.945166,6.856729 5.368187,8.085704 L 91.914295,69.374056 100,3.2360732 Z M 74.786912,13.745148 a 26.746377,26.746377 0 0 1 12.72855,3.235619 l -3.427819,6.792125 A 31.468228,31.468228 0 0 0 73.673831,21.670408 c -6.759361,0 -10.899262,4.042199 -11.869506,11.998195 -0.808534,7.179801 2.393342,11.772571 8.376509,11.772571 a 27.166815,27.166815 0 0 0 12.67841,-3.233947 l 2.037304,6.467894 A 30.077545,30.077545 0 0 1 68.72514,53.170893 c -11.125458,0 -17.108175,-7.050067 -15.588127,-19.727914 1.520048,-12.677847 9.508843,-19.69616 21.248789,-19.69616 a 26.746377,26.746377 0 0 1 0.40111,-0.0017 z m -52.47184,0.616706 h 13.8433 c 9.281995,0 13.711983,3.718277 12.935789,10.736371 a 8.8615568,8.8615568 0 0 1 -6.467895,7.504095 8.0853616,8.0853616 0 0 1 6.792125,9.442792 C 48.545173,49.16023 42.464464,52.945269 31.85647,52.945269 H 17.62543 Z m 7.504094,7.502424 -0.937593,7.632784 h 6.952568 c 2.975413,0 4.819734,-1.261846 5.110807,-3.655112 0.291073,-2.393268 -1.617394,-3.977672 -5.692415,-3.977672 z m -1.811678,14.747468 -1.03453,8.668985 h 6.048402 c 4.786534,0 7.437472,-1.489281 7.793228,-4.335329 0.355756,-2.846047 -1.778425,-4.333656 -5.821106,-4.333656 z'          
          fill="#E17C0D"
          fillOpacity="0.9"
        />
      </svg>
    ),
    Conservative: (
      <svg xmlns="http://www.w3.org/2000/svg" id='logo' viewBox='0 0 100 100' className="w-5 h-5">
        <path 
          d='m 51.204703,99.385375 c -2.179092,-0.31655 -4.806512,-0.82634 -5.838714,-1.13287 l -1.876729,-0.55735 2.44306,-0.31726 c 1.343683,-0.17449 3.689594,-0.79632 5.213136,-1.38185 3.863096,-1.48468 7.901926,-1.46857 12.153722,0.0486 1.720337,0.61381 4.25392,1.23651 5.630188,1.38379 l 2.502305,0.26778 -2.085253,0.55659 c -2.911513,0.77712 -10.054715,1.790715 -12.303003,1.74575 -1.0322,-0.0207 -3.659621,-0.29653 -5.838712,-0.61307 z m -13.137104,-8.10421 c -2.547458,-0.91872 -4.091368,-1.20749 -6.529095,-1.22119 -2.978918,-0.0167 -3.301309,-0.10876 -4.815019,-1.37336 -0.892271,-0.74547 -1.676396,-1.54154 -1.742486,-1.76903 -0.21188,-0.72922 3.817185,-1.84488 6.727362,-1.86282 2.081871,-0.0126 3.757092,0.30879 6.426766,1.23382 2.53311,0.8777 4.398254,1.25115 6.248775,1.25115 1.816082,0 3.811086,-0.38978 6.403749,-1.25115 2.592664,-0.86138 4.587669,-1.25116 6.40375,-1.25116 1.850523,0 3.715666,0.37345 6.248775,1.25116 4.864718,1.6856 7.749123,1.67653 12.885638,-0.0405 3.313982,-1.10778 4.309112,-1.26596 6.991809,-1.11136 1.825419,0.10514 3.89923,0.51974 4.98028,0.9955 l 1.852403,0.81524 -1.962842,1.64074 c -1.935246,1.61766 -2.005268,1.63896 -4.980627,1.51478 -2.476765,-0.1034 -3.710447,0.10419 -6.881368,1.15768 -5.139895,1.70765 -8.029599,1.71492 -12.885293,0.0325 -4.835556,-1.67548 -7.863108,-1.67351 -12.632485,0.008 -4.71129,1.66127 -8.092416,1.65589 -12.740092,-0.0203 z m -18.48335,-10.18359 c -4.74141,-5.40015 -8.53828,-13.90471 -10.12601,-22.68112 l -0.77949,-4.30872 5.26001,-7.27289 c 2.893,-4.0001 5.39871,-7.35862 5.56823,-7.4634 0.16955,-0.10482 3.66434,5.52799 7.766231,12.51725 4.101874,6.98924 7.571811,12.70897 7.710931,12.71047 0.139136,0.002 1.449153,-1.69482 2.911155,-3.7696 2.409204,-3.41899 2.709484,-3.7022 3.205859,-3.02362 0.301223,0.4118 2.801355,4.62703 5.55585,9.36718 l 5.008173,8.61848 1.330943,-0.38173 c 2.705431,-0.77589 7.178857,-0.4549 10.189264,0.73115 4.020071,1.58385 9.136076,1.58385 13.156147,0 4.204615,-1.65655 4.787631,-1.5469 6.767555,1.27278 0.917513,1.30667 1.71556,2.4774 1.773439,2.60163 0.05788,0.1242 -1.114881,0.16295 -2.606139,0.0861 -2.209632,-0.11396 -3.425318,0.10766 -6.569524,1.19767 -3.376457,1.17049 -4.222632,1.30897 -6.777507,1.1091 -1.605646,-0.12563 -4.190431,-0.71147 -5.743971,-1.30192 -4.047771,-1.53843 -8.068239,-1.48271 -12.814795,0.17761 -4.579811,1.60199 -6.883512,1.60199 -11.74473,0 -4.886519,-1.61032 -8.73542,-1.69454 -12.538971,-0.27433 -4.52522,1.68966 -5.08965,1.69729 -6.50265,0.0879 z m 44.966082,-9.81233 c -2.869652,-0.99728 -4.259933,-1.23646 -7.29839,-1.2556 l -3.753459,-0.0236 -2.166992,-3.84895 c -1.191843,-2.11691 -3.021394,-5.91334 -4.065667,-8.4365 l -1.898677,-4.58756 1.563362,1.68449 c 0.85985,0.92648 2.745099,2.99087 4.189441,4.58757 l 2.626083,2.90307 -0.2616,-5.73445 c -0.143881,-3.15395 -0.172187,-5.73445 -0.06291,-5.73445 0.109282,0 1.077839,2.20515 2.152342,4.90034 1.074507,2.69519 2.099781,5.05218 2.278383,5.23776 0.178606,0.18557 0.924556,-1.87884 1.657667,-4.58757 0.733118,-2.70871 1.482267,-5.39413 1.664782,-5.96759 0.218317,-0.68592 0.439304,1.06192 0.645944,5.10888 0.172752,3.38332 0.435338,6.14699 0.583525,6.14147 0.148184,-0.005 1.770815,-2.23627 3.605839,-4.9572 1.835025,-2.72091 3.379914,-4.90934 3.433093,-4.86312 0.05317,0.0462 -0.647189,2.68697 -1.556364,5.86836 -0.909174,3.18141 -1.592755,5.84466 -1.519065,5.91835 0.116122,0.11617 1.620267,-0.97303 8.955129,-6.48443 1.141589,-0.85778 0.752243,-0.12657 -2.187136,4.10793 -1.966779,2.83332 -3.501647,5.22579 -3.410826,5.31661 0.09082,0.0908 2.558995,-0.60016 5.48482,-1.53554 2.92583,-0.93536 5.389591,-1.63076 5.475027,-1.54533 0.08543,0.0854 -1.90545,1.63553 -4.424196,3.44464 -2.518745,1.80912 -4.588708,3.43006 -4.599918,3.60209 -0.01119,0.17204 0.964906,0.3281 2.16914,0.34681 l 2.189518,0.034 -1.459678,0.66076 c -2.612987,1.18286 -6.035118,1.07986 -10.009223,-0.30123 z M 24.534189,38.968715 c -2.34187,-4.02259 -4.40398,-7.31381 -4.58244,-7.31381 -0.17848,0 -2.31106,2.76819 -4.73909,6.15151 -6.31916,8.80544 -5.81526,8.34851 -5.5209,5.00619 0.59204,-6.72194 3.76708,-15.30358 8.01816,-21.67185 2.48494,-3.72251 8.187151,-9.56363 11.854026,-12.1427705 5.897134,-4.14784 13.490458,-7.16377 21.070795,-8.36892997 5.525699,-0.87849 8.628036,-0.8452 14.155442,0.15195 9.47772,1.70966997 16.592549,5.03061997 23.676147,11.05118047 l 2.854922,2.42649 -6.994019,7.00309 -6.994019,7.00312 -2.062838,-1.85467 c -2.632108,-2.3665 -8.011957,-5.02258 -11.762671,-5.80735 -15.470646,-3.23695 -30.735591,6.74314 -33.790421,22.0919 -0.363895,1.82837 -0.720916,3.3836 -0.793377,3.45606 -0.07251,0.0725 -2.047839,-3.15944 -4.389717,-7.18203 z'          
          fill="#0101CC"
          fillOpacity="0.9"
        />
      </svg>
    ),
    Green: (
      <svg xmlns="http://www.w3.org/2000/svg" id='logo' viewBox='0 0 100 100' className="w-5 h-5">
        <path 
          d='M 48.437649,0 C 28.562327,0 13.062361,16.874837 13.062361,36.374952 c 0,14.875061 8.000136,28.249789 21.750487,34.499979 4.248409,1.999939 8.998206,3.12472 13.748469,3.12472 9.25101,0 17.374885,-3.49953 22.750828,-11.123951 l 0.24873,0.24984 C 70.937073,75.1255 62.686377,84.7503 50.312614,84.7503 c -7.001109,0 -12.501418,-2.37554 -17.125984,-7.75052 H 14.186383 C 19.811372,91.49962 33.686921,100 49.061496,100 54.311739,100 59.811007,98.875381 64.686974,96.75026 80.561533,90.12532 86.937639,75.62533 86.937639,58.999841 V 2.3748995 H 70.811986 V 10.875286 H 70.562578 C 65.561847,3.3751335 57.312503,-4.9999998e-7 48.437649,-4.9999998e-7 Z M 49.936094,15.250393 c 11.249989,0 20.375717,10.000282 20.375717,21.124559 0,11.375218 -7.748954,22.374999 -19.875546,22.374999 -12.249944,0 -20.750152,-10.3752 -20.750152,-22.249925 0,-11.375219 8.500016,-21.249633 20.249981,-21.249633 z'
          fill="#269B26"
          fillOpacity="0.9"
        />
      </svg>
    )
  };

  return icons[party] || null;
};

const partyInfo = {
  NDP: { color: '#E17C0D', darkModeColor: '#e8e6e3', icon: <PartyIcon party="NDP" /> },
  Conservative: { color: '#0101CC', darkModeColor: '#e8e6e3', icon: <PartyIcon party="Conservative" /> },
  Green: { color: '#269B26', darkModeColor: '#e8e6e3', icon: <PartyIcon party="Green" /> }
};

const StanceIcon = ({ stance }) => {
  const getIconAndTooltip = () => {
    switch (stance) {
      case 'support':
        return { icon: <Check className="text-green-500" />, tooltip: "Supports" };
      case 'oppose':
        return { icon: <X className="text-red-500" />, tooltip: "Opposes" };
      case 'mixed':
        return { icon: <Minus className="text-yellow-500" />, tooltip: "Mixed" };
      default:
        return { icon: <HelpCircle className="text-gray-500" />, tooltip: "Unknown" };
    }
  };

  const { icon, tooltip } = getIconAndTooltip();

  return (
    <div className="relative inline-block">
      {icon}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        {tooltip}
      </div>
    </div>
  );
};

const ImportanceBar = ({ importance }) => {
  const getColor = (importance) => {
    const colors = ['bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-orange-500', 'bg-red-500'];
    return colors[importance - 1] || 'bg-gray-300';
  };

  return (
    <div className="flex items-center space-x-1 ml-2 group relative">
      {[...Array(5)].map((_, i) => (
        <div 
          key={i} 
          className={`w-2 h-3 ${i < importance ? getColor(importance) : 'bg-gray-300 dark:bg-gray-600'}`}
        />
      ))}
      <div className="absolute bottom-full left-0 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
        Issue importance: {importance}/5
      </div>
    </div>
  );
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
          className="transition-all duration-300 ease-in-out bg-gray-100 dark:bg-gray-800 overflow-hidden"
        >
          <div ref={contentRef} className="px-4 py-2">
            <p className="mb-4 text-gray-700 dark:text-gray-300">{rowData.notes}</p>
            <div className={`grid grid-cols-3 gap-4 transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
              {Object.entries(partyInfo).map(([party, info]) => (
                <div key={party} className="space-y-2">
                  <h3 className="font-semibold flex items-center" style={{ color: `var(--party-color-${party})` }}>
                    <span className="mr-2">{info.icon}</span>
                    {party}
                  </h3>
                  <p className="dark:text-gray-300">{rowData[party].explanation}</p>
                  {rowData[party].source ? (
                    <a href={rowData[party].source} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                      Source
                    </a>
                  ) : (
                    <a 
                      href="https://github.com/aidenmitchell/issuetracker/issues/new" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-500 hover:underline"
                    >
                      Suggest info
                    </a>
                  )}
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
  const [sortedIssues, setSortedIssues] = useState([]);

  useEffect(() => {
    const sorted = [...issues].sort((a, b) => {
      if (b.importance !== a.importance) {
        return b.importance - a.importance;
      }
      return a.issue.localeCompare(b.issue);
    });
    setSortedIssues(sorted);
  }, []);

  const toggleRow = (index) => {
    setExpandedRow(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <div className="overflow-x-auto">
      <style jsx global>{`
        :root {
          --party-color-NDP: ${partyInfo.NDP.color};
          --party-color-Conservative: ${partyInfo.Conservative.color};
          --party-color-Green: ${partyInfo.Green.color};
        }
        @media (prefers-color-scheme: dark) {
          :root {
            --party-color-NDP: ${partyInfo.NDP.darkModeColor};
            --party-color-Conservative: ${partyInfo.Conservative.darkModeColor};
            --party-color-Green: ${partyInfo.Green.darkModeColor};
          }
        }
      `}</style>
      <table className="min-w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800">
            <th className="px-4 py-2 text-left">Issue</th>
            {Object.entries(partyInfo).map(([party, info]) => (
            <th key={party} className="px-4 py-2 text-left" style={{ color: `var(--party-color-${party})` }}>
              <div className="flex items-center">
                <span className="mr-2">{info.icon}</span>
                {party}
              </div>
            </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedIssues.map((row, index) => (
            <React.Fragment key={index}>
              <tr 
                className={`${index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-900'} cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700`}
                onClick={() => toggleRow(index)}
              >
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    {expandedRow === index ? <ChevronUp size={16} className="mr-2" /> : <ChevronDown size={16} className="mr-2" />}
                    <span>{row.issue}</span>
                    <ImportanceBar importance={row.importance} />
                  </div>
                </td>
                {Object.keys(partyInfo).map(party => (
                  <td key={party} className="px-4 py-2 text-left group">
                    <StanceIcon stance={row[party].stance} />
                  </td>
                ))}
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