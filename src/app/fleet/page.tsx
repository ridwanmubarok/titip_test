"use client";

import FleetMonitoring from "@/components/contents/FleetMonitoring";
import FleetMonitorinMapgTimeplan from "@/components/contents/FleetMonitoringTimeplan";
import FleetMonitorinMapgDetail from "@/components/contents/FleetMonitorinMapgDetail";

export default function Page() {
  return (
    <main className="grid grid-cols-12">
      <div className="hidden lg:col-span-3 lg:flex flex-col gap-3  shadow-lg h-screen bg-white lg:">
        <FleetMonitoring/>
      </div>
      <div className="col-span-12 lg:col-span-9 flex flex-col gap-3 py-3 px-3">
          <FleetMonitorinMapgDetail/>
          <FleetMonitorinMapgTimeplan/>
      </div>
    </main>
  )
}
