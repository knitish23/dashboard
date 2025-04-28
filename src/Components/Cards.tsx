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
    <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 w-full">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`text-white relative rounded-lg p-6 shadow-lg 
            flex flex-col justify-between  ${card.bg}`}
        >
          <div className="mb-5 px-10 space-y-5">
            <p className="text-sm uppercase tracking-wide mb-2">{card.title}</p>
            <h2 className="text-2xl font-bold">{card.value}</h2>
          </div>
              <div className=" absolute right-4 animate-pulse">
                {card.icon}
              </div>
             
        </div>
      ))}
    </div>
  );
};

export default Cards;
