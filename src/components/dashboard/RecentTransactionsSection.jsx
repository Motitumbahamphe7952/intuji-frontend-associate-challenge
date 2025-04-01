import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const transactions = [
  {
    id: 1,
    name: "Figma",
    date: "August 20, 2022",
    amount: "$100",
    status: "completed",
  },
  {
    id: 2,
    name: "Youtube",
    date: "August 20, 2022",
    amount: "$120",
    status: "completed",
  },
  {
    id: 3,
    name: "Spotify",
    date: "August 20, 2022",
    amount: "$15",
    status: "completed",
  },
  {
    id: 4,
    name: "Freepik",
    date: "August 20, 2022",
    amount: "$300",
    status: "completed",
  },
];

export default function RecentTransactionsSection() {
  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "text-green-500";
      case "pending":
        return "text-amber-500";
      case "failed":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <section className="h-full space-y-4 rounded-2xl bg-white p-[16px] dark:bg-gray-950 shadow-md">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Recent Transaction</h2>
        <a href="#" className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
          See All
        </a>
      </div>

      <Card className="border-none shadow-none">
        <CardContent className="pt-6">
          <div className="space-y-5">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10 bg-gray-200 dark:bg-gray-800">
                    <AvatarImage src={transaction.icon} alt={transaction.name} />
                    <AvatarFallback className="text-xs">{transaction.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>

                  <div>
                    <div className="font-medium">{transaction.name}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{transaction.date}</div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="font-bold">{transaction.amount}</div>
                  <div className={`text-xs ${getStatusColor(transaction.status)}`}>
                    {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
