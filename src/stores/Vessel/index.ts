import { API_GET_VESSEL_GROUP_LIST, API_GET_VESSEL_LIST } from "@/services/api";
import Client from "@/services/client";

export const getVesselList = async () => {
    const result = await Client.get(
        API_GET_VESSEL_LIST,
    );
    return result.data as IVesselRes;
  };


  export const getVesselGroupList = async () => {
    const result = await Client.get(
        API_GET_VESSEL_GROUP_LIST,
    );
    return result.data as IVesselGroupRes;
  };


  export const getVesselGroupDetail = async ({id}:{id:number}) => {
    const result = await Client.get(
        API_GET_VESSEL_GROUP_LIST + '/' + id,
    );
    return result.data as IVesselGroupDetail;
  };


  