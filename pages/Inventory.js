
import * as React from 'react';

import { Grid, Button, Container, Stack, Typography, Box } from '@mui/material';

import { useQuery, useSubscription } from '@apollo/client';
import { useDemoData } from '@mui/x-data-grid-generator';
import { useState, useMemo } from 'react';

import { GET_LEADS, NEW_LEAD_SUBSCRIPTION } from '@/gql/queries/leadQueries';

import UsersActions from '@/components/UserActions';
import { GET_ORDERS } from '@/gql/queries/orderQueries';
import { GET_VAN_ITEMS } from '@/gql/queries/VanQuery';

import IntenvtoryDatagrid from '../components/dataGrid/InventoryDatagrid';
// ----------------------------------------------------------------------

import AddVanItem from '../components/modals/AddVanItem';
import OrderInventory from '../components/modals/OrderInventory';


const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' },
];

// ----------------------------------------------------------------------

export default function Inventory() {

  const [users, setUsers] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
    const [pageSize , setpageSize] = useState(5);
    const [rowId, setRowId ]= useState(null)



    useSubscription(NEW_LEAD_SUBSCRIPTION, {
      onSubscriptionData: ({ subscriptionData }) => {
        const { newLead } = subscriptionData.data;
        setUsers((prevUsers) => [...prevUsers, newLead]);
      },
    });
    const {loading: graphQLClientsLoading, error: graphQLClientsError, data  } = useQuery(GET_VAN_ITEMS, {
      variables: { vanId: "64067ba9d93b3428a600075a" },
    });

  // const { data } = useDemoData({
  //   dataSet: 'Employee',
  //   rowLength: 100000,
  //   editable: true,
  // });

  const rows = [
    
  ];




  React.useEffect(() => {

 if(data){
      console.log(data);
  const { VanItems } = data;
  setUsers(VanItems);

 }else{
    setUsers([]);
 }

   
   
    
  }, [ data ])

  

   


  return (
    <Box sx={{width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor:'white', color: 'black'}}>
   

      <Container>
    

      <Box sx={{width: '100%', display: 'flex',justifyContent: 'center'}}> 
      
      <AddVanItem/>
      {/* <OrderInventory/> */}

      </Box>
      
    
<Box sx={{width: '100%', display: 'flex',justifyContent: 'center'}}> 

<IntenvtoryDatagrid onRowSelectionChange={(selectedRows) => setSelectedRows(selectedRows)} 

     UserData={users}/>

</Box>



   






      {/* // Blog posts */}



        {/* <Grid container spacing={3}>
          {POSTS.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </Grid> */}








      </Container>
    </Box>
  );
}
