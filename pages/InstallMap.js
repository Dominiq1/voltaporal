import Head from 'next/head'
import { Inter } from 'next/font/google'

import InstallMaps from '@/components/InstallMaps'
import { useQuery } from '@apollo/client'
import { Box, Grid } from '@mui/material'

import { GET_MAP_DATA } from '@/gql/mutations/InstallMap'
import bolt from '../public/images/bolt.png'



export default function Home() {


  const { loading, error, data } = useQuery(GET_MAP_DATA);


  console.log("GraphQL Data:", data); // Add this line


  const formatDataForMarkers = (mapData) => {
    return mapData.map(item => ({
      color: item.color,
      position: {
        lat: parseFloat(item.position.lat.replace(/"/g, '')),
        lng: parseFloat(item.position.lng.replace(/"/g, '')),
      },
      label: {
        text: item.label.text.replace(/"/g, ''),
        color: 'red',
       //color: item.label.color.replace(/"/g, '').toLowerCase()
      },
      image: {
        url: bolt, // Replace with the actual image URL
        alt:bolt,
      },
      projectURL: item.projectURL.replace(/"/g, '')
      // Add other fields as needed
    }));
  };
  



  console.log("Formatted Data:", formatDataForMarkers); // Add this line



  const markers = loading ? [] : (data?.GetMapData ? formatDataForMarkers(data.GetMapData) : []);


  console.log("markers", markers)
  

  return (
    <>
      <Head>
        <title>Voltaic Install Map</title>
        <meta name="description" content="Voltiac OPS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box sx={{ height: '100vh', width:'100vw', backgroundColor: 'black', p: 2, color: 'black' }}>
        <InstallMaps markers={markers} />
      </Box>

    </>
  )
}
