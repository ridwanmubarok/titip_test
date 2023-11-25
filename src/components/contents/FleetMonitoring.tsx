"use client";

import CardShipping from "../cards/CardShipping";
import Filter from "../forms/Filter";


interface FleetMonitoringProps{
    lists: Array<IVesselGroup>,
    loading: Boolean,
    onConditionalDetail: (id: number) => void,
}

export default function FleetMonitoring ({ lists,loading,onConditionalDetail }: FleetMonitoringProps) {


    return(
    <div className="overflow-y-auto bg-primary py-8 px-3">
        <div>
            <span className="text-black text-lg">Group List</span>
        </div>
        <div className="mb-5">
            <Filter/>
        </div>
        {
            loading ? (
                <div className="flex flex-col gap-3">
                    <div className="border rounded-md shadow-sm animate-pulse">
                      <div className="h-14 bg-gray-100 rounded p-3"></div>
                    </div>
                </div>
            ) : lists.length > 0 ? (
                <div className="flex flex-col gap-3">
                    {
                        lists?.map((val,key) => {
                            return (
                                <CardShipping onClick={onConditionalDetail} id={val.id} group_name={val?.name} key={key}/>
                            )
                        })
                    }
                </div>
            ) : (
                <div className="flex flex-col justify-center gap-3">
                    KOSONG
                </div>
            )
        }
    </div>
    )
}