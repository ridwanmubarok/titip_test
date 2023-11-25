"use client";

import FleetMonitoring from "@/components/contents/FleetMonitoring";
import FleetMonitorinMapgTimeplan from "@/components/contents/FleetMonitoringTimeplan";
import FleetMonitorinMapgDetail from "@/components/contents/FleetMonitorinMapgDetail";
import Hstack from "@/components/Stacks/Hstack";
import VStack from "@/components/Stacks/Vstack";
import { useVessel } from "@/stores/Vessel/store";
import Link from "next/link";
import { useEffect, useState } from "react";
import {seaRoute} from 'searoute-ts';


export default function Page() {
  const { loading,vesselGroups,getGroupVessel } = useVessel();
  const [isDetail,setIsDetail] = useState(false);

  const getDataVesselGroup = async () => {
    await getGroupVessel();
  }

  const detailRendering = (id:number) => {
    setIsDetail(true);
  }

  const closeDetailRendering = () => {
    setIsDetail(false);
  }

  useEffect(() => {
    getDataVesselGroup();
  },[])

  return (
    <main className="grid grid-cols-12">
      <div className="hidden lg:col-span-3 lg:flex flex-col gap-3  shadow-lg h-screen bg-white lg:">
        <FleetMonitoring loading={loading} lists={vesselGroups ?? []}  onConditionalDetail={(id: number)=>detailRendering(id) } />
      </div>
      <div className="col-span-12 lg:col-span-9 flex flex-col gap-3 py-3 px-3">
          {
            isDetail ? (
              <>
                <FleetMonitorinMapgDetail onCloseDetail={closeDetailRendering}/>
                <FleetMonitorinMapgTimeplan/>
              </>
            ) : (
              <VStack className="mt-10">
                  <Hstack className="justify-end mx-5">
                        <Link href={'/vessel-group/form'} className="flex p-2.5 justify-center items-center text-center gap-3 hover:bg-gray-50 bg-white rounded-lg">
                            <i className="fi fi-br-plus text-[1rem] text-black font-bold"></i>
                            <span className="text-black text-xs font-semibold">ADD GROUP</span>
                        </Link>
                  </Hstack>
              </VStack>
            )
          }
      </div>
    </main>
  )
}
