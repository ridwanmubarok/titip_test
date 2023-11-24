import ReactCountryFlag from "react-country-flag";
import Hstack from "../Stacks/Hstack";
import Stack from "../Stacks/Stack";
import InlineTitle from "../atoms/InlineTitle";
import ListGroup from "./ListGroup";

export default function ListItemTimeplan(){
    return(
        <li className="relative mb-6 sm:mb-0">
            <Hstack className="items-center">
                <Stack className="z-10 flex items-center border rounded-full border-black justify-center w-6 h-6 shrink-0"/>
                <Stack className="hidden sm:flex w-full h-0.5 bg-gray-700"></Stack>
            </Hstack>
            <Stack className="mt-3 p-3 rounded-md bg-gray-100 text-black min-w-[400px] max-w-[400px]">
                <Hstack className="justify-between items-center">
                    <InlineTitle iconLeft="warehouse-alt" size="verySmall" value="SAVANNAH"/>
                    <Hstack className="items-center">
                        <div className="flex items-center">
                            <i className="fi fi-rr-marker me-3 mt-1"></i>
                            <ReactCountryFlag
                                countryCode="US"
                                svg
                                style={{
                                    width: '1.5em',
                                    height: '1.5em',
                                }}
                                title="US"
                            />
                        </div>
                    </Hstack>
                </Hstack>
                <ListGroup ordered className="mt-5 space-y-1">
                  <li>
                    <Hstack className="items-center">
                        <span className="text-xs me-3">2023-11-10 12:02</span>
                        <span className="text-xs font-semibold">Laden container Arrived</span>
                    </Hstack>
                  </li>
                  <li>
                    <Hstack className="items-center">
                        <span className="text-xs me-3">2023-11-10 12:02</span>
                        <span className="text-xs font-semibold">Loaded on ship</span>
                    </Hstack>
                  </li>
                </ListGroup>
            </Stack>
        </li>
    )
}