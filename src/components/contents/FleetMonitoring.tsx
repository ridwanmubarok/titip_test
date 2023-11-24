import CardShipping from "../cards/CardShipping";
import Filter from "../forms/Filter";


export default function FleetMonitoring () {
    return(
    <div className="overflow-y-auto bg-primary py-8 px-3">
        <div>
            <span className="text-black text-lg">Fleet Monitoring</span>
        </div>
        <div className="mb-5">
            <Filter/>
        </div>
        <div className="flex flex-col gap-3">
            <CardShipping/>
        </div>
    </div>
    )
}