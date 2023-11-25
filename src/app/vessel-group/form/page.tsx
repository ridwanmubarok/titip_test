"use client";

import Hstack from "@/components/Stacks/Hstack";
import Stack from "@/components/Stacks/Stack";
import VStack from "@/components/Stacks/Vstack";
import Button from "@/components/atoms/Button";
import Title from "@/components/atoms/Title";
import AutoCompletePlaces from "@/components/forms/AutocompletePlaces";
import TextInput from "@/components/forms/TextInput";
import Link from "next/link";

export default function Page(){
    return (
        <VStack className="p-10">
            <Hstack className="justify-between items-center">
                <Title value="Add Group" size="large" color="light"/>
                <Link href={'/vessel-group'} className="flex p-2.5 justify-center items-center text-center gap-3 hover:bg-gray-50 bg-white rounded-lg">
                        <i className="fi fi-rr-arrow-small-left text-[1rem] text-black font-bold"></i>
                        <span className="text-black text-xs font-semibold">BACK</span>
                </Link>
            </Hstack>

            <Stack className="grid mt-10 grid-cols-12 py-10 px-5 shadow-md gap-5 bg-white rounded-lg p-3">

                <VStack className="col-span-12">
                    <TextInput name="groupName" label="Name Group"  placeholder="Name Group"/>
                </VStack>

                <VStack className="col-span-6">
                    <AutoCompletePlaces name="origin" label="Origin" placeholder="select origin ..." error=""/>
                </VStack>

                <VStack className="col-span-6">
                    <AutoCompletePlaces name="destination" label="Destination" placeholder="select Destination ..."/>
                </VStack>

                <Hstack className="col-span-12 mt-10  justify-end">
                    <Button loading={false}  variant="primary" size="medium">
                      <i className="fi fi-rr-sign-in-alt me-3 mt-1"></i>
                      SAVE
                    </Button>
                </Hstack>

            </Stack>

        </VStack>
    )
}