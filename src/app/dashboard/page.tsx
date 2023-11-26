"use client";
import ListGroup from "@/components/Lists/ListGroup";
import Hstack from "@/components/Stacks/Hstack";
import Stack from "@/components/Stacks/Stack";
import VStack from "@/components/Stacks/Vstack";
import InlineTitle from "@/components/atoms/InlineTitle";
import CardShipping from "@/components/cards/CardShipping";
import PieChart from "@/components/charts/PieChart";
import { useRouter } from 'next/navigation'
import { array } from "yup";



export default function Page(){

    const router = useRouter()


    return (
        <Stack className="grid grid-cols-12 h-screen gap-5 p-10">

            <VStack className="col-span-8 gap-3">
                <Stack className="w-full grid grid-cols-4  rounded-lg gap-3">
                    <Hstack className="border col-span-2 bg-white justify-between p-5 rounded-lg items-center">
                        <i className="fi fi-rr-ship text-2xl mt-1 me-3"></i>
                        <VStack>
                            <h3 className="text-2xl font-bold">100</h3>
                            <span className="text-xs">TOTAL VESSEL</span> 
                        </VStack>
                    </Hstack>
                    <Hstack className="border col-span-2 bg-white p-5 justify-between rounded-lg items-center">
                        <i className="fi fi-rr-box-open text-2xl mt-1 me-3"></i>
                        <VStack>
                            <h3 className="text-2xl font-bold">100</h3>
                            <span className="text-xs">TOTAL GROUP</span> 
                        </VStack>
                    </Hstack>
                </Stack>

                <VStack className="bg-white p-3 gap-3 rounded-lg">
                    <InlineTitle className="justify-between border-b pb-3" value="Summary Vessel" iconRight="time-past" size="small"/>
                    <VStack className="h-[350px] gap-3 overflow-y-auto p-3">
                    {
                        Array.from(Array(10)).map((e) => {
                            return (
                                <CardShipping key={e} id={2} onClick={(e)=> router.push('/vessel-group')  } group_name="TES" />
                            )
                        })
                    }
                    </VStack>
                </VStack>

            </VStack>

            <VStack className="col-span-4 h-full overflow-y-auto bg-gradient-to-b from-gray-50 to-gray-100 gap-3 rounded-lg">
                
                <VStack className="p-3 min-h-[350px] overflow-hidden">
                    <InlineTitle className="justify-between border-b pb-3" value="Current Status" iconRight="info" size="small"/>
                    <Hstack className="justify-center mt-10 max-h-[350px] overflow-hidden">
                        <PieChart/>
                    </Hstack>
                </VStack>

            </VStack>

        </Stack>
    )
}