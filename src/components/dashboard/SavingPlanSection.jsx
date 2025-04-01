
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

function GoalCard({ title, target, value, percentage, tag, highlight, colorScheme }) {
  const getProgressColor = () => {
    switch (colorScheme) {
      case "purple": return "bg-purple-500";
      case "orange": return "bg-orange-500";
      case "green": return "bg-green-500";
      default: return "bg-blue-500";
    }
  };

  const getPercentageColor = () => {
    if (percentage >= 90) return "text-green-500";
    if (percentage >= 50) return "text-orange-500";
    return "text-gray-600 dark:text-gray-400";
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <div className="font-medium">{title}</div>
        {tag && (
          <div className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">
            {tag}
          </div>
        )}
      </div>
      
      <div className="text-xl font-bold flex items-center">
        {value}
        {highlight && (
          <div className="ml-1 px-2 py-0.5 text-xs bg-purple-500 text-white rounded">
            {highlight}
          </div>
        )}
      </div>
      
      <div className="relative pt-1">
        <Progress 
          value={percentage} 
          className={cn("h-2", getProgressColor())}
        />
        {highlight && (
          <div 
            className="absolute w-4 h-4 bg-purple-600 rounded-full top-0 transform -translate-y-1/2 z-10 animate-pulse" 
            style={{ left: `${Math.min(Math.max(percentage - 8, 5), 95)}%` }}
          >
            <div className="absolute -top-8 -left-10 px-2 py-1 bg-purple-600 text-white text-xs rounded whitespace-nowrap">
              {highlight}
            </div>
          </div>
        )}
      </div>
      
      <div className="flex justify-between items-center text-xs">
        <div className="text-gray-500 dark:text-gray-400">{target}</div>
        <div className={getPercentageColor()}>{percentage}%</div>
      </div>
    </div>
  );
}

export default function SavingPlanSection() {
  return (
    <section className="h-full space-y-4 rounded-2xl bg-white p-[16px] dark:bg-gray-950 shadow-md">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Saving Plan</h2>
        <a href="#" className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
          See All
        </a>
      </div>
      
      <Card className="border-none shadow-none">
        <CardContent className="pt-6 space-y-6">
          <GoalCard
            title="Bali Vacation"
            target="Target: August 25, 2022"
            value="$1950.21"
            percentage={48}
            tag="Target: August 25, 2022"
            colorScheme="purple"
          />
          
          <GoalCard
            title="New Gadget"
            target="Target: August 25, 2022"
            value="$790.21"
            percentage={79}
            tag="Target: August 25, 2022"
            colorScheme="orange"
          />
          
          <GoalCard
            title="Charity"
            target="Target: August 25, 2022"
            value="$32,111"
            percentage={32}
            tag="Target: August 25, 2022"
            colorScheme="green"
          />
        </CardContent>
      </Card>
    </section>
  );
}


