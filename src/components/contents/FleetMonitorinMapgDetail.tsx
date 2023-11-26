import React from 'react'
import Maps from '../maps';
import InlineText from '../atoms/InlineText';
import Badge from '../badges';
import InlineTitle from '../atoms/InlineTitle';
import Hstack from '../Stacks/Hstack';
import VStack from '../Stacks/Vstack';
import Stack from '../Stacks/Stack';
import Title from '../atoms/Title';
import { format } from 'date-fns';
interface FleetMonitoringMapDetailProps {
    onCloseDetail: ()=> void,
    groupDetail?: IVesselGroupDetail | null | undefined,
}

export default function FleetMonitorinMapgDetail({onCloseDetail,groupDetail}:FleetMonitoringMapDetailProps){

    const dateFormat = (date:string) => {
      const timestampDate = new Date(date);
      const formattedTimestampString = format(timestampDate, 'yyyy-MM-dd HH:mm');
      return formattedTimestampString;
    }

    return(
       <Stack className='grid grid-cols-12 overflow-hidden'>
              <Hstack className='justify-end col-span-12 p-3'>
                <button onClick={onCloseDetail} className="text-lg text-red-500">
                  <i className="fi fi-rr-cross-small "></i>
                </button>
              </Hstack>
              <Stack className="col-span-8 rounded-l-lg overflow-hidden bg-white h-[500px]"> 
                  <Maps vessels={groupDetail?.vessels ?? []}/>
              </Stack>
              <VStack className='rounded-r-lg overflow-hidden col-span-4'>
                  <VStack className='bg-black p-3'>
                      <InlineTitle iconRight='eye' value='Vessel Group Detail' className='justify-between' variant='success'/>
                      <Title value={groupDetail?.name ?? ''} color='dark' size='large'/>
                      <Hstack className='justify-between'>
                        <Stack>
                          <InlineText label='ETA' value={groupDetail?.vessels[0]?.eta ?? ' - '} width='small' />
                          <InlineText label='initial' value={groupDetail?.vessels[0]?.created_at ?? ' - '} width='small' />
                        </Stack>
                        <Badge variant='success' value='On Time' icon='clock'/>
                      </Hstack>
                  </VStack>
                  <VStack className='justify-between p-3 bg-white h-full'>
                      <VStack>
                        <InlineText color='light' label='Vessel Name' value={groupDetail?.vessels[0]?.vessel_name ?? '-'} width='medium' />
                        <InlineText color='light' label='Vessel MMSI' value={groupDetail?.vessels[0]?.vessel_mmsi ?? '-'} width='medium' />
                        <InlineText color='light' label='IMO' value={groupDetail?.vessels[0]?.vessel_imo ?? '-'} width='medium' />
                        <InlineText color='light' label='Origin' value={groupDetail?.vessels[0]?.origin ?? '-'} width='medium' />
                        <InlineText color='light' label='Destination' value={groupDetail?.vessels[0]?.destination ?? '-'} width='medium' />
                      </VStack>
                      <InlineTitle value={`Last Update : ${dateFormat(groupDetail?.updated_at ?? '')}`} className='self-end border p-3 italic rounded-md'/>
                  </VStack>
              </VStack>
        </Stack>
    )
}