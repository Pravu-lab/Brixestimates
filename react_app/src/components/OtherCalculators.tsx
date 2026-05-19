import { Calculator, UserCheck, FileText, ArrowRight } from 'lucide-react';

export function OtherCalculators() {
  const calculators = [
    {
      title: "Home Loan EMI Calculator",
      icon: <Calculator className="w-6 h-6 text-blue-400" />,
      href: "#"
    },
    {
      title: "Home Loan Eligibility Calculator",
      icon: <UserCheck className="w-6 h-6 text-blue-400" />,
      href: "#"
    },
    {
      title: "Stamp Duty Calculator",
      icon: <FileText className="w-6 h-6 text-blue-400" />,
      href: "#"
    }
  ];

  return (
    <div className="px-4 mt-6 pb-12">
      <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#0A2342] to-[#000814] p-6 rounded-2xl text-white shadow-xl">
        <p className="text-xl font-bold mb-6">Try Other Calculators</p>
        <div className="grid md:grid-cols-3 gap-4">
          {calculators.map((calc, idx) => (
            <a 
              key={idx}
              href={calc.href}
              className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-all group"
            >
              <div className="p-3 bg-white/5 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                {calc.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium leading-tight group-hover:text-blue-400 transition-colors">
                  {calc.title}
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
