import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import L, {
  CRS,
  Icon,
  LatLngBoundsExpression,
  LatLngExpression,
  Map,
  // Polyline,
} from "leaflet";
import "leaflet/dist/leaflet.css";
import lowerLevelMap1 from "@/assets/00_thelowerlevel1.png";
import lowerLevelMap2 from "@/assets/00_thelowerlevel2.png";
import theFirstFloor from "@/assets/01_thefirstfloor.png";
import theSecondFloor from "@/assets/02_thesecondfloor.png";
import theThirdFloor from "@/assets/03_thethirdfloor.png";
import "@/styles/mapBlock.modules.css";
//import axios from "axios";
import { useGraphContext } from "@/context/nodeContext.tsx";
import { Button } from "@/components/ui/button.tsx";
import { EditIcon } from "lucide-react";
import GrayDot from "@/assets/gray-dot.png";

export interface Edge {
  edgeID: string;
  start: string;
  end: string;
}

export interface HospitalData {
  nodeID: string;
  name: string;
  geocode: string;
  floor: string;
}

// Define the map component
export const MapEditor: React.FC = () => {
  const mapRef = useRef<Map | null>(null);
  // const [paths, setPaths] = useState<Polyline[]>([]);
  const [hospitalData, setHospitalData] = useState<HospitalData[]>([]);
  const [isSetUp, setIsSetUp] = useState(false);
  const { nodes, edges } = useGraphContext();

  const [LayerL1] = useState<L.FeatureGroup>(new L.FeatureGroup());
  const [LayerL2] = useState<L.FeatureGroup>(new L.FeatureGroup());
  const [LayerF1] = useState<L.FeatureGroup>(new L.FeatureGroup());
  const [LayerF2] = useState<L.FeatureGroup>(new L.FeatureGroup());
  const [LayerF3] = useState<L.FeatureGroup>(new L.FeatureGroup());

  const Layers: { [key: string]: L.FeatureGroup } = useMemo(
    () =>
      ({
        L1: LayerL1,
        L2: LayerL2,
        1: LayerF1,
        2: LayerF2,
        3: LayerF3,
      }) as const,
    [LayerF1, LayerF2, LayerF3, LayerL1, LayerL2],
  );

  // special markers (floor icons, start, and end)
  const Nodes: { [key: string]: L.LayerGroup } = useMemo(
    () =>
      ({
        L1: new L.LayerGroup(),
        L2: new L.LayerGroup(),
        1: new L.LayerGroup(),
        2: new L.LayerGroup(),
        3: new L.LayerGroup(),
      }) as const,
    [],
  );

  const Edges: { [key: string]: L.LayerGroup } = useMemo(
    () =>
      ({
        L1: new L.LayerGroup(),
        L2: new L.LayerGroup(),
        1: new L.LayerGroup(),
        2: new L.LayerGroup(),
        3: new L.LayerGroup(),
      }) as const,
    [],
  );

  const baseLayers = useMemo(
    () => ({
      "Third Floor": LayerF3,
      "Second Floor": LayerF2,
      "First Floor": LayerF1,
      "Lower Level 1": LayerL1,
      "Lower Level 2": LayerL2,
    }),
    [LayerL1, LayerL2, LayerF1, LayerF2, LayerF3],
  );

  // avoid making a bunch of new icons
  const customIcon = useMemo(
    () =>
      new Icon({
        iconUrl: GrayDot,
        iconSize: [12, 12],
        iconAnchor: [6, 6],
      }),
    [],
  );
  const floorMaps: { [key: string]: string } = useMemo(
    () =>
      ({
        L1: lowerLevelMap1,
        L2: lowerLevelMap2,
        1: theFirstFloor,
        2: theSecondFloor,
        3: theThirdFloor,
      }) as const,
    [],
  );

  const drawLine = useCallback(
    (startHospital: HospitalData, endHospital: HospitalData) => {
      const map = mapRef.current;
      if (!map) {
        console.log("cannot find map");
        return;
      }

      const [startLat, startLng] = startHospital.geocode
        .split(",")
        .map(parseFloat);
      const nStartLat = 3400 - startLng;
      const startCoordinates: LatLngExpression = [nStartLat, startLat];

      const [lat, lng] = endHospital.geocode.split(",").map(parseFloat);
      const nLat = 3400 - lng;
      const endCoordinates: LatLngExpression = [nLat, lat];

      const newPath = L.polyline([startCoordinates, endCoordinates], {
        color: "red",
        weight: 3,
      });
      if (startHospital.floor === endHospital.floor) {
        newPath.addTo(Edges[startHospital.floor]);
      }
      // addToPaths(newPath); // Add the new path to the paths list
    },
    [Edges],
  );

  const findLines = useCallback(
    (hospitalData: HospitalData[]) => {
      for (const edge of edges) {
        const edgeID = edge.edgeID;
        //console.log(edgeID);
        const edgeSplit = edgeID.split("_", 2);
        if (hospitalData.find((h) => h.nodeID == edgeSplit[0])) {
          const startHospital = hospitalData.find(
            (h) => h.nodeID === edgeSplit[0],
          )!;
          const endHospital = hospitalData.find(
            (h) => h.nodeID === edgeSplit[1],
          )!;
          if (startHospital && endHospital) {
            drawLine(startHospital, endHospital);
          }
        }
      }
    },
    [drawLine, edges],
  );

  // Create a Set to store unique nodes outside of the useCallback hook
  // const uniqueNodes = useRef(new Set());

  const addMarkers = useCallback(
    (map: Map, hospitalData: HospitalData[]) => {
      hospitalData.forEach((node) => {
        const [lat, lng] = node.geocode.split(",").map(parseFloat);
        const coords: [number, number] = [3400 - lng, lat];
        const marker = L.marker(coords, {
          icon: customIcon,
          draggable: true,
        });
        //marker.options.attribution = node.nodeID;
        // Event listener for clicking on markers
        marker.on("dragend", function () {
          const position = marker.getLatLng();
          const newGeocode = `${position.lng},${3400 - position.lat}`;

          // Update the hospitalData state
          setHospitalData((prevData) =>
            prevData.map((item) =>
              item.nodeID === node.nodeID
                ? { ...item, geocode: newGeocode }
                : item,
            ),
          );
        });

        // Add a click event handler to toggle popup visibility
        const popupContent = `<b>${node.name}</b><br/>Latitude: ${lat}, Longitude: ${lng}`;
        marker.bindPopup(popupContent);

        marker.on("click", function (this: L.Marker) {
          // Specify the type of 'this' as L.Marker
          if (!this.isPopupOpen()) {
            // Check if the popup is not already open
            this.openPopup(); // Open the popup when the marker is clicked
          }
        });
        marker.addTo(Nodes[node.floor]);
      });
    },
    [Nodes, customIcon],
  );

  useEffect(() => {
    if (hospitalData.length == 0) {
      setHospitalData(
        nodes.map((node) => ({
          nodeID: node.nodeID,
          name: node.longName,
          geocode: `${node.xcoord},${node.ycoord}`,
          floor: node.floor,
        })),
      );
    }
  }, [hospitalData.length, nodes]);

  const memoizedAddMarkers = useCallback(addMarkers, [addMarkers]);
  const memoizedFindLines = useCallback(findLines, [findLines]);

  useEffect(() => {
    let map: Map | null = mapRef.current;
    if (!isSetUp && hospitalData.length != 0) {
      if (!map) {
        map = L.map("map-container", {
          crs: CRS.Simple,
          minZoom: -2,
          maxZoom: 2,
          zoomControl: true,
          layers: [LayerF1],
        }).setView([3400, 5000], -2);
        mapRef.current = map;
      }
      const bounds: LatLngBoundsExpression = [
        [0, 0],
        [3400, 5000], // change to resolution of the image
      ];
      map.setMaxBounds(bounds);
      L.control
        .layers(baseLayers, undefined, {
          collapsed: false,
          position: "bottomright",
        })
        .addTo(map);

      // const newNodesOnCurrentFloor = hospitalData.filter(
      //   (node) => node.floor == "1",
      // );

      Object.keys(Layers).forEach((key) => {
        Nodes[key].addTo(Layers[key]);
        Edges[key].addTo(Layers[key]);
        L.imageOverlay(floorMaps[key], bounds).addTo(Layers[key]);
      });
      setIsSetUp(true);
    }
    memoizedFindLines(hospitalData);
    memoizedAddMarkers(map!, hospitalData);
  }, [
    Edges,
    LayerF1,
    Layers,
    Nodes,
    baseLayers,
    floorMaps,
    hospitalData,
    isSetUp,
    memoizedAddMarkers,
    memoizedFindLines,
  ]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    Object.keys(Layers).forEach((key) => {
      Nodes[key].clearLayers();
      Edges[key].clearLayers();
    });

    // and then addd
    memoizedFindLines(hospitalData);
    memoizedAddMarkers(map!, hospitalData);
  }, [
    Edges,
    Layers,
    Nodes,
    hospitalData,
    memoizedAddMarkers,
    memoizedFindLines,
  ]);

  return (
    <div style={{ display: "flex", height: "100%", zIndex: 1 }}>
      <div
        id="map-container"
        style={{
          flex: 2.5,
          backgroundColor: "gray-300",
          position: "relative",
          zIndex: 0,
        }}
      >
        <div
          className={"space-x-2"}
          style={{
            position: "absolute",
            bottom: 100,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            justifyContent: "space-around",
            width: "80%",
            zIndex: 1000,
            color: "black",
          }}
        >
          <Button onClick={() => (window.location.href = "/map-editor/table")}>
            <EditIcon className="mr-2 h-4 w-4" />
            <span>Table View</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
