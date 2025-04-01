import AnalyticsSection from "@/components/dashboard/AnalyticsSection";
import OverviewSection from "@/components/dashboard/OverviewSection";
import RecentTransactionsSection from "@/components/dashboard/RecentTransactionsSection";
import SavingPlanSection from "@/components/dashboard/SavingPlanSection";

export default function Dashboard() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in">
        <div className="lg:col-span-3 flex flex-col lg:flex-row gap-6 items-stretch">
          <div className="w-full lg:w-2/3 h-full">
            <OverviewSection />
          </div>
          <div className="w-full lg:w-1/3 h-full">
            <SavingPlanSection />
          </div>
        </div>

        <div className="lg:col-span-3 flex flex-col lg:flex-row gap-6 items-stretch">
          <div className="w-full lg:w-2/3 h-full">
            <AnalyticsSection />
          </div>
          <div className="w-full lg:w-1/3 h-full">
            <RecentTransactionsSection />
          </div>
        </div>
      </div>
    </section>
  );
}
