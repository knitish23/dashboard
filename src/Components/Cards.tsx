import { ChartNoAxesCombined, ListOrdered, ChartSpline } from "lucide-react";
import { JSX } from "react";
type CardProps = {
  title: string;
  value: string;
  icon: JSX.Element;
  bg: string;
};
const Cards = () => {
  const cards: CardProps[] = [
    {
      title: "Weekly Sales",
      value: "$ 15,000",
      icon: <ChartNoAxesCombined size={58} />,
      bg: "bg-gradient-to-r from-orange-400 to-orange-200",
    },
    {
      title: "Weekly Order",
      value: "45,000",
      icon: <ListOrdered size={58} />,
      bg: "bg-gradient-to-l from-cyan-400 via-blue-300 to-cyan-500",
    },
    {
      title: "Visitors Online",
      value: "95,000",
      icon: <ChartSpline size={58} />,
      bg: "bg-gradient-to-l from-slate-300 to-pink-400",
    },
  ];
  return (
    <div className="grid relative grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ml-10">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`text-white rounded-lg 
            max-w-100 min-h-55 p-6 shadow-lg 
            flex items-center justify-between md:gap-3 ${card.bg}`}
        >
          <div className="mb-5 px-10 space-y-5">
            <p className="text-sm uppercase tracking-wide">{card.title}</p>
            <h2 className="text-2xl font-bold">{card.value}</h2>
          </div>
          <div className="relative">
            <div>
              <div className="text-white bottom-4 absolute -right-5">
                {card.icon}
              </div>
              <div
                className={`absolute ${card.bg} rounded-full w-30 h-30
           -top-5 right-1 animate-pulse`}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
