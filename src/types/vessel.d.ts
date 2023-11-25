interface IVessel {
    mmsi: number,
    shipType: string,
    heading?: string,
    longitude: string,
    latitude: string,
    timestamp: Date,
    sourceVTS: string,
    speed: number,
    name: string,
    callSign: string,
    shipTypeRegistered: string,
    imo: string,
    dwt?: string,
    gt: string,
    flag: string,
    navStatus?: string,
    etaTime: string,
    course: Number,
    destination?: string,
    plotStatus: string,
    additional: {
        panjang: string;
        lebar: string;
        dalam: string;
        LOA: string;
    };
}

interface IVesselRes {
    vessels?: IVessel[];
}


interface IVesselGroup {
    id: number,
    name: string,
    user_id: number,
    created_at: string,
    updated_at: string
}


interface IVesselGroupRes {
    data?: Array<IVesselGroup>,
}


interface IVesselGroupDetail {
    id: number,
    name: string,
    user_id: string,
    created_at: string,
    updated_at: string,
    vessels: Array<IVesselDetail>
}

interface GeoJSONPoint {
    type: string;
    coordinates: [number, number];
  }
  

interface IVesselDetail {
    id: number;
    group_id: string;
    vessel_name: string;
    vessel_mmsi: string;
    vessel_imo: string | null;
    vessel_callsign: string | null;
    origin: string;
    origin_geojson: {
      type: string;
      geometry: GeoJSONPoint;
      properties: {
        name: string;
      };
    };
    destination: string;
    destination_geojson: {
      type: string;
      geometry: GeoJSONPoint;
      properties: {
        name: string;
      };
    };
    eta: string | null;
    created_at: string;
    updated_at: string;
}