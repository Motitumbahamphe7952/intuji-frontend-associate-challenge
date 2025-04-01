
import {
  ArrowRight,
  DollarSign,
  PiggyBank,
  CreditCard,
  TrendingUp,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useState } from "react";


function StatCard({
  title,
  icon,
  value,
  indicator,
  iconClassName,
  isSelected,
  onClick,
}) {
  return (
    <Card
      className={cn(
        "cursor-pointer transition-colors duration-200",
        "rounded-[14px] p-[20px] w-full min-h-[165.5px]",
        isSelected ? "bg-[#4745A4] text-white" : "bg-white dark:bg-gray-950"
      )}
      onClick={() => onClick(title)}
    >
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div className={cn("p-3 rounded-full", iconClassName)}>
            {icon}
          </div>
          <div className="flex flex-col">
            <CardTitle
              className={cn(
                "text-xl font-medium",
                isSelected ? "text-white" : "text-black dark:text-gray-300"
              )}
            >
              {title}
            </CardTitle>
            <p
              className={cn(
                "text-xs flex items-center gap-1",
                indicator.color === "green" ? "text-green-300" : "text-red-400"
              )}
            >
              <ExternalLink
                className={cn(
                  "w-4 h-4 inline-block align-middle",
                  indicator.iconColor
                )}
              />
              {indicator.value}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mt-2 border-t pt-2">
          <div className={cn("text-2xl font-bold", isSelected && "text-white")}>
            {value}
          </div>
          <ArrowRight className="h-4 w-4 text-white/80 dark:text-gray-400" />
        </div>
      </CardContent>
    </Card>
  );
}


export default function OverviewSection() {
  const [selectedCard, setSelectedCard] = useState("Your Balance");

  return (
    <section className="h-full space-y-4 rounded-2xl bg-white p-[16px] dark:bg-gray-950 shadow-md">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Overview</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <StatCard
          title="Your Balance"
          icon={<DollarSign className="w-[24px] h-[24px] text-white" />}
          value="$28,891.138"
          indicator={{
            value: "15% compared with last month",
            color: "green",
            iconColor: "text-green-300",
          }}
          iconClassName="bg-indigo-500"
          isSelected={selectedCard === "Your Balance"}
          onClick={setSelectedCard}
        />

        <StatCard
          title="Saving"
          icon={
            <PiggyBank className="w-[24px] h-[24px] text-green-700 dark:text-green-300" />
          }
          value="$1,050.44"
          indicator={{
            value: "10% compared with last month",
            color: "red",
            iconColor: "text-red-600",
          }}
          iconClassName="bg-green-100 dark:bg-green-900"
          isSelected={selectedCard === "Saving"}
          onClick={setSelectedCard}
        />

        <StatCard
          title="Expenses"
          icon={
            <CreditCard className="w-[24px] h-[24px] text-amber-600 dark:text-amber-300" />
          }
          value="$200.31"
          indicator={{
            value: "2% compared with last month",
            color: "green",
            iconColor: "text-amber-400",
          }}
          iconClassName="bg-amber-100 dark:bg-amber-900"
          isSelected={selectedCard === "Expenses"}
          onClick={setSelectedCard}
        />

        <StatCard
          title="Incomes"
          icon={
            <TrendingUp className="w-[24px] h-[24px] text-blue-600 dark:text-blue-300" />
          }
          value="$21,121.0"
          indicator={{
            value: "8% compared with last month",
            color: "green",
            iconColor: "text-blue-500",
          }}
          iconClassName="bg-blue-100 dark:bg-blue-900"
          isSelected={selectedCard === "Incomes"}
          onClick={setSelectedCard}
        />
      </div>
    </section>
  );
}
