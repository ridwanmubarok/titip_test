import React from 'react'
import Maps from '../maps';
import InlineText from '../atoms/InlineText';
import Badge from '../badges';
import InlineTitle from '../atoms/InlineTitle';
import Hstack from '../Stacks/Hstack';
import VStack from '../Stacks/Vstack';
import Stack from '../Stacks/Stack';
import Title from '../atoms/Title';

export default function FleetMonitorinMapgDetail(){

    return(
       <Stack className='grid grid-cols-12 overflow-hidden'>
              <Hstack className='justify-end col-span-12 p-3'>
                <button className="text-lg text-red-500">
                  <i className="fi fi-rr-cross-small "></i>
                </button>
              </Hstack>
              <Stack className="col-span-8 rounded-l-lg overflow-hidden bg-white h-[500px]"> 
                  <Maps/>
              </Stack>
              <VStack className='rounded-r-lg overflow-hidden col-span-4'>
                  <VStack className='bg-black p-3'>
                      <InlineTitle icon='square' value='Place of dischange' className='justify-between' variant='success'/>
                      <Title value='KLAIPEDA' color='dark' size='large'/>
                      <Hstack className='justify-between'>
                        <Stack>
                          <InlineText label='ETA' value='2023-11-10' width='small' />
                          <InlineText label='initial' value='2023-11-10' width='small' />
                        </Stack>
                        <Badge variant='success' value='On Time' icon='clock'/>
                      </Hstack>
                  </VStack>
                  <VStack className='justify-between p-3 bg-white h-full'>
                      <VStack>
                        <InlineText color='light' label='Container' value='H4SU434353' width='medium' />
                        <InlineText color='light' label='Shipment' value='demo 1610' width='medium' />
                        <InlineText color='light' label='Customer' value='end_customer_demo' width='medium' />
                        <InlineText color='light' label='Carrier' value='maersk' width='medium' />
                      </VStack>
                      <InlineTitle value='Last Update : 2023-11-15 02:00' className='self-end border p-3 italic rounded-md'/>
                  </VStack>
              </VStack>
        </Stack>
    )
}