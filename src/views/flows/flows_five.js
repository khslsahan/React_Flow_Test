import React, { useCallback , useRef , useState , useEffect} from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  updateEdge,
  addEdge,
  Panel
} from 'reactflow';
import { MarkerType, Position } from 'reactflow';

import 'reactflow/dist/style.css';

import DownloadButton from '../Common/DownloadButton';

const initialNodes = [
    {
      'id': 'node0',
      'type':'default',
      'data': {'label': 'node0'},
      
      'style': {
      background: '#2B6CB0',
      color: 'white',
    },
     'position': {'x': 0, 'y': 310},
        'sourcePosition':  Position.Right,
        'targetPosition': Position.Left
    },
    {
      'id': 'node1',
      'type':'default',
      'data': {'label': 'node1'},
      
      'style': {
      background: '#2B6CB0',
      color: 'white',
    },
     'position': {'x': 220, 'y': 220},
        'sourcePosition':  Position.Right,
        'targetPosition': Position.Left
    },
    {
      'id': 'node3',
      'data': {'label': 'node3'},
      'type':'default', 
      
      'style': {
      background: '#2B6CB0',
      color: 'white',
    },
     'position': {'x': 440, 'y': 140},
        'sourcePosition':  Position.Right,
        'targetPosition': Position.Left
    },
    {
      'id': 'node4',
      'type':'default',
      'data': {'label': 'node4'},
      
      'style': {
      background: '#2B6CB0',
      color: 'white',
    },
     'position': {'x': 440, 'y': 300},
        'sourcePosition':  Position.Right,
        'targetPosition': Position.Left
    },
    {
      'id': 'node5',
      'type':'default',
      'data': {'label': 'node5'},
      
      'style': {
      background: '#2B6CB0',
      color: 'white',
    },
     'position': {'x': 440, 'y': 450},
        'sourcePosition':  Position.Right,
        'targetPosition': Position.Left
    },
    {
      'id': 'node2',
      'type':'default',
      'data': {'label': 'node2'},
      
      'style': {
      background: '#2B6CB0',
      color: 'white',
    },
     'position': {'x': 220, 'y': 380},
        'sourcePosition':  Position.Right,
        'targetPosition': Position.Left
    },
    {
      'id': 'node6',
      'type':'default',
      'data': {'label': 'node6'},
      
      'style': {
      background: '#2B6CB0',
      color: 'white',
    },
     'position': {'x': 440, 'y': 380},
        'sourcePosition':  Position.Right,
        'targetPosition': Position.Left
    },
    {
      'id': 'node7',
      'type':'default',
      'data': {'label': 'node7'},
      
      'style': {
      background: '#2B6CB0',
      color: 'white',
    },
     'position': {'x': 440, 'y': 580},
        'sourcePosition':  Position.Right,
        'targetPosition': Position.Left
    },
    {
      'id': 'node8',
      'type':'default',
      'data': {'label': 'node8'},
      
      'style': {
      background: '#2B6CB0',
      color: 'white',
    },
     'position': {'x': 660, 'y': 580},
        'sourcePosition':  Position.Right,
        'targetPosition': Position.Left 
    },
    {
      'id': 'node9',
      'type':'default',
      'data': {'label': 'node9'},
      
      'style': {
      background: '#2B6CB0',
      color: 'white',
    },
     'position': {'x': 660, 'y': 790},
        'sourcePosition':  Position.Right,
        'targetPosition': Position.Left
    },
    {
      'id': 'node10',
      'type':'default',
      'data': {'label': 'node10'},
      
      'style': {
      background: '#2B6CB0',
      color: 'white',
    },
     'position': {'x': 880, 'y': 950},
        'sourcePosition':  Position.Right,
        'targetPosition': Position.Left
    },
    {
      'id': 'nodex',
      'type':'default',
      'data': {'label': 'nodex'},
      
      'style': {
      background: '#2B6CB0',
      color: 'white',
    },
     'position': {'x': 220, 'y': 540},
        'sourcePosition':  Position.Right,
        'targetPosition': Position.Left
    }
  ];
    
   
  
const initialEdges = [{'id': 'node0_node1', 'source': 'node0', 'target': 'node1',   markerEnd: { type: MarkerType.ArrowClosed ,width: 16, height: 10, color:'black' } ,style: { strokeWidth: 4 , stroke: 'black'} },
                     {'id': 'node1_node3', 'source': 'node1', 'target': 'node3',    markerEnd: { type: MarkerType.ArrowClosed ,width: 16, height: 10, color:'black' } ,style: { strokeWidth: 4 , stroke: 'black'} }, 
                     {'id': 'node1_node4', 'source': 'node1', 'target': 'node4',    markerEnd: { type: MarkerType.ArrowClosed ,width: 16, height: 10, color:'black' } ,style: { strokeWidth: 4 , stroke: 'black'} }, 
                     {'id': 'node1_node5', 'source': 'node1', 'target': 'node5',    markerEnd: { type: MarkerType.ArrowClosed ,width: 16, height: 10, color:'black' } ,style: { strokeWidth: 4 , stroke: 'black'} }, 
                     {'id': 'node0_node2', 'source': 'node0', 'target': 'node2',    markerEnd: { type: MarkerType.ArrowClosed ,width: 16, height: 10, color:'black' } ,style: { strokeWidth: 4 , stroke: 'black'} }, 
                     {'id': 'node2_node6', 'source': 'node2', 'target': 'node6',    markerEnd: { type: MarkerType.ArrowClosed ,width: 16, height: 10, color:'black' } ,style: { strokeWidth: 4 , stroke: 'black'} }, 
                     {'id': 'node2_node7', 'source': 'node2', 'target': 'node7',    markerEnd: { type: MarkerType.ArrowClosed ,width: 16, height: 10, color:'black' } ,style: { strokeWidth: 4 , stroke: 'black'} }, 
                     {'id': 'node7_node8', 'source': 'node7', 'target': 'node8',    markerEnd: { type: MarkerType.ArrowClosed ,width: 16, height: 10, color:'black' } ,style: { strokeWidth: 4 , stroke: 'black'} }, 
                     {'id': 'node7_node9', 'source': 'node7', 'target': 'node9',    markerEnd: { type: MarkerType.ArrowClosed ,width: 16, height: 10, color:'black' } ,style: { strokeWidth: 4 , stroke: 'black'} }, 
                     {'id': 'node9_node10', 'source': 'node9', 'target': 'node10',  markerEnd: { type: MarkerType.ArrowClosed ,width: 16, height: 10, color:'black' } ,style: { strokeWidth: 4 , stroke: 'black'} }, 
                     {'id': 'node0_nodex', 'source': 'node0', 'target': 'nodex',    markerEnd: { type: MarkerType.ArrowClosed ,width: 16, height: 10, color:'black' } ,style: { strokeWidth: 4 , stroke: 'black'} }
                    ];

export default function Flows_Five() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    // gets called after end of edge gets dragged to another source or target

    const edgeUpdateSuccessful = useRef(true);

    const onEdgeUpdate = useCallback(
      (oldEdge, newConnection) => setEdges((els) => updateEdge(oldEdge, newConnection, els)),
      []
    );
    const onConnect = useCallback((params) => setEdges((els) => {   
        const par = {...params,markerEnd: { type: MarkerType.ArrowClosed ,width: 16, height: 10, color:'black' } ,style: { strokeWidth: 4 , stroke: 'black'}}   
        return addEdge(par, els) } ), []);
  
        
    const onEdgeUpdateStart = useCallback(() => {
        edgeUpdateSuccessful.current = false;
      }, []);

      const onEdgeUpdateEnd = useCallback((_, edge) => {
        if (!edgeUpdateSuccessful.current) {
          setEdges((eds) => eds.filter((e) => e.id !== edge.id));
        }
    
        edgeUpdateSuccessful.current = true;
      }, []);
   

      const defaultViewport = { x: 0, y: 0, zoom: 0.5 };


      const [nodeName, setNodeName] = useState('Click Node to Change');
      const [nodeID, setNodeID] = useState(null);

      useEffect(() => {
        setNodes((nds) =>
          nds.map((node) => {
            if (node.id === nodeID) {
              // it's important that you create a new object here
              // in order to notify react flow about the change
              node.data = {
                ...node.data,
                label: nodeName,
              };
            }
    
            return node;
          })
        );
      }, [nodeName, setNodes]);

      const onNodeClick = (event, node) => {
         setNodeName(node.data.label)
         setNodeID(node.id)
      };

  return (
    <div style={{ width: '38vw', height: '60vh'  }}>
      <ReactFlow
         nodes={nodes}
         edges={edges}
         onNodesChange={onNodesChange}
         onEdgesChange={onEdgesChange}
         snapToGrid
         onEdgeUpdate={onEdgeUpdate}
        onEdgeUpdateStart={onEdgeUpdateStart}
        onEdgeUpdateEnd={onEdgeUpdateEnd}
         onConnect={onConnect}
         fitView
         defaultViewport={defaultViewport}
         attributionPosition="top-right"
         onNodeClick={onNodeClick}
      >
        <Controls />
        {/* <MiniMap /> */}
        {/* <Background variant="dots" gap={30} size={5} /> */}
        <div className='download-image'>
        <DownloadButton />
        </div>
        <div className="updatenode__controls">
        <label>label:</label>
        <input value={nodeName} onChange={(evt) => setNodeName(evt.target.value)} />
        </div>


        {/* <Panel position="bottom-right">
        <button >save</button>
        <button  >restore</button>
        <button  >add node</button>
      </Panel> */}

      </ReactFlow>
    </div>
  );
}