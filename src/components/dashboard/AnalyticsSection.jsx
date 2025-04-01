
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AreaChart,
  Area,
  Line,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  XAxis,
  YAxis,
} from "recharts";

const weeklyData = [
  { day: "Sun", blue: 5000, yellow: 3000 },
  { day: "Mon", blue: 9000, yellow: 4000 },
  { day: "Tue", blue: 7000, yellow: 6500 },
  { day: "Wed", blue: 12000, yellow: 5000 },
  { day: "Thu", blue: 20000, yellow: 8000 },
  { day: "Fri", blue: 18000, yellow: 9000 },
  { day: "Sat", blue: 10000, yellow: 11000 },
];

export default function AnalyticsSection() {
  return (
    <section className="h-full space-y-4 rounded-2xl bg-white p-[16px] dark:bg-gray-950 shadow-md">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Analytics</h2>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-indigo-600" />
            <span className="text-sm text-gray-600 dark:text-gray-400">Blue</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <span className="text-sm text-gray-600 dark:text-gray-400">Yellow</span>
          </div>
          <Select defaultValue="weekly">
            <SelectTrigger className="w-28 h-8 text-xs">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card className="border-none shadow-none">
        <CardContent className="pt-6 h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={weeklyData}
              margin={{ top: 10, right: 20, bottom: 10, left: 0 }}
            >
              <defs>
                <linearGradient id="colorYellow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#F59E0B" stopOpacity={0} />
                </linearGradient>
              </defs>

              <XAxis
                dataKey="day"
                tick={{ fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis hide />

              <RechartsTooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    const yellowData = payload.find((p) => p.dataKey === "yellow");
                    const blueData = payload.find((p) => p.dataKey === "blue");

                    return (
                      <div className="bg-white dark:bg-gray-800 p-2 border border-gray-200 dark:border-gray-700 rounded shadow-md">
                        <p className="font-medium">{label}</p>
                        {blueData && (
                          <p className="text-sm text-indigo-600 dark:text-indigo-400">
                            Blue: ${Number(blueData.value).toLocaleString()}
                          </p>
                        )}
                        {yellowData && (
                          <p className="text-sm text-amber-600 dark:text-amber-400">
                            Yellow: ${Number(yellowData.value).toLocaleString()}
                          </p>
                        )}
                      </div>
                    );
                  }
                  return null;
                }}
              />

              <Line
                type="monotone"
                dataKey="blue"
                stroke="#818CF8"
                strokeWidth={3}
                fill="none"
                dot={false}
                activeDot={{ r: 6, strokeWidth: 0 }}
              />

              <Area
                type="monotone"
                dataKey="yellow"
                stroke="#F59E0B"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorYellow)"
                dot={false}
                activeDot={{ r: 6, strokeWidth: 0 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </section>
  );
}