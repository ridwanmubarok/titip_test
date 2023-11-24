import React from 'react'
import Maps from '../maps';
import InlineText from '../atoms/InlineText';
import Badge from '../badges';
import InlineTitle from '../atoms/InlineTitle';

export default function FleetMonitorinMapgDetail(){

    return(
        <div className="grid grid-cols-12 overflow-hidden">
              <div className="flex justify-end col-span-12 p-3">
                <button className="text-lg text-red-500">
                  <i className="fi fi-rr-cross-small "></i>
                </button>
              </div>
              <div className="col-span-8 rounded-l-lg overflow-hidden bg-white h-[500px]">
                <Maps/>
              </div>
              <div className="flex flex-col rounded-r-lg overflow-hidden col-span-4">
                  
                  <div className="flex flex-col bg-black p-3 ">
                      <InlineTitle icon='square' value='Place of dischange' variant='success'/>
                      <h3 className="text-2xl font-bold uppercase">KLAIPEDA</h3>
                      <div className="flex justify-between">
                        <div>
                          <InlineText label='ETA' value='2023-11-10' width='small' />
                          <InlineText label='initial' value='2023-11-10' width='small' />
                        </div>
                        <Badge variant='success' value='On Time' icon='clock'/>
                      </div>
                  </div>

                  <div className="flex flex-col justify-between p-3 bg-white h-full">
                      <div className="flex flex-col">
                        <InlineText color='light' label='Container' value='H4SU434353' width='medium' />
                        <InlineText color='light' label='Shipment' value='demo 1610' width='medium' />
                        <InlineText color='light' label='Customer' value='end_customer_demo' width='medium' />
                        <InlineText color='light' label='Carrier' value='maersk' width='medium' />
                      </div>
                      <div className="flex self-end items-center border p-3 rounded-md">
                        <span className="text-xs text-gray-400 italic">Last Update : 2023-11-15 02:00 </span>
                      </div>
                  </div>

              </div>
          </div>
    )
}