import { TopWidget } from "@/src/dashboard/TopWidget";
import { AllTours } from "./AllTours";

export function DashboardPage() {
  return (
    <div className="container">
      <TopWidget />
      <AllTours />
    </div>
  );
}
