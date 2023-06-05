import React, { useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';
import { MarkerType, Position } from 'reactflow';

import 'reactflow/dist/style.css';

const initialNodes = [
    { "id": "1", "position": { "x": 100, "y": 100 }, "data": { "label": "Sri Lanka" } },
    { "id": "2", "position": { "x": 400, "y": 150 }, "data": { "label": "Ancient Kingdoms" } },
    { "id": "3", "position": { "x": 700, "y": 200 }, "data": { "label": "Wildlife" } },
    { "id": "4", "position": { "x": 1000, "y": 250 }, "data": { "label": "Waterfalls" } },
    { "id": "5", "position": { "x": 1000, "y": 300 }, "data": { "label": "Ruins" } },
    { "id": "6", "position": { "x": 1000, "y": 350 }, "data": { "label": "Tea Plantations" } },
    { "id": "7", "position": { "x": 1000, "y": 400 }, "data": { "label": "Remote Feeling" } },
    { "id": "8", "position": { "x": 1300, "y": 450 }, "data": { "label": "Tropical Rainforests" } },
    { "id": "9", "position": { "x": 1300, "y": 500 }, "data": { "label": "White-sand Beaches" } },
    { "id": "10", "position": { "x": 1300, "y": 550 }, "data": { "label": "Age-old Towns" } },
    { "id": "11", "position": { "x": 400, "y": 600 }, "data": { "label": "Ella" } },
    { "id": "12", "position": { "x": 700, "y": 650 }, "data": { "label": "Ravana Falls" } },
    { "id": "13", "position": { "x": 700, "y": 700 }, "data": { "label": "Ella's Rock" } },
    { "id": "14", "position": { "x": 400, "y": 750 }, "data": { "label": "Beaches" } },
    { "id": "15", "position": { "x": 700, "y": 800 }, "data": { "label": "Tangalla" } },
    { "id": "16", "position": { "x": 700, "y": 850 }, "data": { "label": "Kalpitiya" } },
    { "id": "17", "position": { "x": 700, "y": 900 }, "data": { "label": "Hikkaduwa" } },
    { "id": "18", "position": { "x": 700, "y": 950 }, "data": { "label": "Water Sports" } },
    { "id": "19", "position": { "x": 700, "y": 1000 }, "data": { "label": "Dolphin and Whale Watching" } },
    { "id": "20", "position": { "x": 700, "y": 1050 }, "data": { "label": "Snorkeling" } },
    { "id": "21", "position": { "x": 400, "y": 1100 }, "data": { "label": "National Parks" } },
    { "id": "22", "position": { "x": 700, "y": 1150 }, "data": { "label": "Yala" } },
    { "id": "23", "position": { "x": 1000, "y": 1200 }, "data": { "label": "Leopards" } },
    { "id": "24", "position": { "x": 700, "y": 1250 }, "data": { "label": "Udawalawe" } },
    { "id": "25", "position": { "x": 1000, "y": 1300 }, "data": { "label": "Wild Elephants" } },
    { "id": "26", "position": { "x": 700, "y": 1350 }, "data": { "label": "Wasgamuwa" } },
    { "id": "27", "position": { "x": 1000, "y": 1400 }, "data": { "label": "Wild Elephants" } },
    { "id": "28", "position": { "x": 400, "y": 1450 }, "data": { "label": "Ancient Ruins" } },
    { "id": "29", "position": { "x": 700, "y": 1500 }, "data": { "label": "Anuradhapura" } },
    { "id": "30", "position": { "x": 1000, "y": 1550 }, "data": { "label": "Huge Dagobas" } },
    { "id": "31", "position": { "x": 700, "y": 1600 }, "data": { "label": "Polonnaruwa" } },
    { "id": "32", "position": { "x": 1000, "y": 1650 }, "data": { "label": "Architectural Gems" } },
    { "id": "33", "position": { "x": 400, "y": 1700 }, "data": { "label": "Accommodations" } },
    { "id": "34", "position": { "x": 700, "y": 1750 }, "data": { "label": "Beach Hotels" } },
    { "id": "35", "position": { "x": 700, "y": 1800 }, "data": { "label": "Mountain Top Villas" } },
    { "id": "36", "position": { "x": 700, "y": 1850 }, "data": { "label": "Apartments" } },
    { "id": "37", "position": { "x": 700, "y": 1900 }, "data": { "label": "B&Bs" } },
    { "id": "38", "position": { "x": 700, "y": 1950 }, "data": { "label": "Homestays" } }
];
  

 


  
  
  
    const initialEdges = [
        { id: 'e1-2', source: '1', target: '2' },
        { id: 'e1-3', source: '1', target: '3' },
        { id: 'e1-4', source: '1', target: '4' },
        { id: 'e1-5', source: '1', target: '5' },
        { id: 'e1-6', source: '1', target: '6' },
        { id: 'e1-7', source: '1', target: '7' },
        { id: 'e7-8', source: '7', target: '8' },
        { id: 'e7-9', source: '7', target: '9' },
        { id: 'e7-10', source: '7', target: '10' },
        { id: 'e11-12', source: '11', target: '12' },
        { id: 'e11-13', source: '11', target: '13' },
        { id: 'e14-15', source: '14', target: '15' },
        { id: 'e14-16', source: '14', target: '16' },
        { id: 'e14-17', source: '14', target: '17' },
        { id: 'e17-18', source: '17', target: '18' },
        { id: 'e18-19', source: '18', target: '19' },
        { id: 'e18-20', source: '18', target: '20' },
        { id: 'e21-22', source: '21', target: '22' },
        { id: 'e21-24', source: '21', target: '24' },
        { id: 'e21-26', source: '21', target: '26' },
        { id: 'e28-29', source: '28', target: '29' },
        { id: 'e28-31', source: '28', target: '31' },
        { id: 'e33-34', source: '33', target: '34' },
        { id: 'e33-35', source: '33', target: '35' },
        { id: 'e33-36', source: '33', target: '36' },
        { id: 'e33-37', source: '33', target: '37' },
        { id: 'e33-38', source: '33', target: '38' },
    ];

export default function Flows_Secound() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
  

  return (
    <div style={{ width: '65vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}