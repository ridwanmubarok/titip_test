import ReactCountryFlag from "react-country-flag"
import Stack from "../Stacks/Stack"
import VStack from "../Stacks/Vstack"
import Hstack from "../Stacks/Hstack"
import InlineTitle from "../atoms/InlineTitle"
import ListGroup from "../Lists/ListGroup"
import ListItemTimeplan from "../Lists/ListItemTimeplan"


export default function FleetMonitorinMapgTimeplan(){
    return(
        <VStack className="rounded-md bg-white">
            <Hstack className="border-b p-3">
                <InlineTitle value="Timeline" size="small" iconLeft="earth-americas" />
            </Hstack>
             
            <Stack className="p-3 overflow-x-auto">
                <ListGroup className="items-center sm:flex space-x-1 ">
                    <ListItemTimeplan/>
                    <ListItemTimeplan/>
                    <ListItemTimeplan/>
                    <ListItemTimeplan/>
                </ListGroup>
            </Stack>


        </VStack>
    )
}