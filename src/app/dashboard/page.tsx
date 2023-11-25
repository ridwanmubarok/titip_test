"use client";
import Hstack from "@/components/Stacks/Hstack";
import Stack from "@/components/Stacks/Stack";
import VStack from "@/components/Stacks/Vstack";
import InlineTitle from "@/components/atoms/InlineTitle";
import PieChart from "@/components/charts/PieChart";
import Maps from "@/components/maps";


export default function Page(){
    return (
        <Stack className="grid grid-cols-12 h-screen gap-5 p-10">

            <VStack className="col-span-8 gap-3">
                <Stack className="min-h-[500px] rounded-lg overflow-hidden shadow-md">
                    <Maps/>
                </Stack>
            </VStack>

            <VStack className="col-span-4 h-full overflow-y-auto bg-gradient-to-b from-gray-50 to-gray-100 gap-3 rounded-lg">
                
                <VStack className="p-3 min-h-[550px] overflow-hidden">
                    <InlineTitle className="justify-between border-b pb-3" value="Current Status" iconRight="info" size="medium"/>
                    <Hstack className="justify-center mt-10 max-h-[350px] overflow-hidden">
                        <PieChart/>
                    </Hstack>
                </VStack>

            </VStack>

        </Stack>
    )
}