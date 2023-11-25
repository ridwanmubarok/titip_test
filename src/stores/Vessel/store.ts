import {create} from 'zustand'
import {  getVesselGroupDetail, getVesselGroupList, getVesselList } from '.';

interface VesselState {
    loading: boolean,
    vessels?: Array<IVessel>,
    vesselGroups?: Array<IVesselGroup>,
    vesselGroupDetail?: IVesselGroupDetail | null,
    getListVessel: () => Promise<IVesselRes>,
    getGroupVessel: () => Promise<IVesselGroupRes>,
    getGroupVesselDetail: (id:number) => Promise<IVesselGroupRes>,
}

export const useVessel = create<VesselState>(
    (set,get) => ({
        loading: true,
        vessels: [],
        vesselGroups: [],
        vesselGroupDetail: null,
        getListVessel : async() => {
            try {
                const res = await getVesselList();
                console.log(res,'logging vessel list');
                if(res){
                    return res;
                }else throw res;
            } catch (error) {
                set({
                    loading: false,
                  });
                  throw error;
            }
        },
        getGroupVessel: async()=>{
            try {
                const res = await getVesselGroupList()
                if(res){
                    set({
                        loading: false,
                        vesselGroups: res?.data
                    });
                    return res;
                }else throw res;
            } catch (error) {
                set({
                    loading: false,
                });
                throw error;
            }
        },
        getGroupVesselDetail: async (id:number) => {
            try {
                const res = await getVesselGroupDetail({ id:id })
                console.log(res);
                if(res){
                    set({
                        loading: false,
                    });
                    return res;
                }else throw res;
            } catch (error) {
                set({
                    loading: false,
                });
                throw error;
            }
        }
    })
)