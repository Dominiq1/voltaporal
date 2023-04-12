import * as React from 'react';
import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ADD_VAN_ITEM } from '@/gql/mutations/addVanItem';
import ImagesModal from './ImagesModal';


export default function AddVanItem() {

//   const [addLead, { loading, error, data }] = useMutation(ADD_LEAD);


  const [addVanItem, {vanLoading, vanError, vanData}] = useMutation(ADD_VAN_ITEM);



  const [formData, setFormData] = useState({
    itemId: "23",
    itemName: "",
    itemDescription: "",
    itemQuantity: "",
    itemImage: "HTTP://",
    vanId: "64067ba9d93b3428a600075a",
  });

  const [uploadInProcess, setUploaded] = useState(false);



 const [open, setOpen] = React.useState(false);




  const handleClickOpen = () => {
    setOpen(true);
  };



  const handleChange = (event) => {

    event.persist();
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
  
    });

    console.log(formData)

  };






  const handleClose = () => {
    setOpen(false);
  };




  const handleLeadSubmit = (e) => {

    console.log(formData)
    e.preventDefault();


    addVanItem({
    variables: {
        itemId: formData.itemId, 
        itemName: formData.itemName, 
        itemDescription: "",
        itemQuantity: formData.itemQuantity, 
        itemImage: formData.itemImage,
        vanId: "64067ba9d93b3428a600075a"
        
    }
   
    }).then((res) => {

      setFormData({
        itemId: "",
        itemName: "",
        itemDescription: "",
        itemQuantity: "",
        itemImage: "",
        vanId: "",
      });

    console.log(res);
    setUploaded(false);
    console.log("Van Submitted!");

    }).catch((err) => {
      
      console.log(err);
    });

  }


  return (

    <>
    { uploadInProcess ?( <div>
 
 <Button variant="outlined" onClick={handleClickOpen}>
 Request Item
 </Button>
 <Dialog open={open} onClose={handleClose}>
   <DialogTitle>New Lead Info</DialogTitle>
   <DialogContent>
     <DialogContentText>
       Tell us about your new lead!
     </DialogContentText>


<Box>
<img src="https://img.freepik.com/premium-vector/3d-check-mark-icon-realistic-green-tick-button-isolated-white-background-vector-illustration_113065-1285.jpg" alt="CSV Upload" width="200" height="200" />

</Box>




   </DialogContent>
   <DialogActions>
      <Button onClick={handleClose}>Cancel</Button> 
    <Button onClick={() => setUploaded(false)}> Add Van</Button> 
   </DialogActions>
 </Dialog>
</div> ) : ( <div>
 
 <Button variant="outlined" onClick={handleClickOpen}>
 Add Item
 </Button>
 <Dialog open={open} onClose={handleClose}>
   <DialogTitle>New Item Info</DialogTitle>
   <DialogContent>
     <DialogContentText>
       Tell us about your new item!
     </DialogContentText>


     {/* <Button variant="outlined" onClick={handleClickOpen}>
 {CsvUpload()}
 </Button> */}
 


<TextField
autoFocus
margin="dense"
id="itemName"
label="Item Name"
type="text"
fullWidth
variant="standard"
name="itemName"
value={formData.itemName}
onChange={handleChange}
/>
{/* <TextField
autoFocus
margin="dense"
id="itemDescription"
label="Item Description"
type="text"
fullWidth
variant="standard"
name="itemDescription"
value={formData.itemDescription}
onChange={handleChange}
/> */}
<TextField
autoFocus
margin="dense"
id="itemQuantity"
label="Item Quantity"
type="text"
fullWidth
variant="standard"
name="itemQuantity"
value={formData.licensePlate}
onChange={handleChange}
/>

<ImagesModal/>

   </DialogContent>
   <DialogActions>
     <Button onClick={handleClose}>Cancel</Button>
     <Button onClick={handleLeadSubmit}> Add Item</Button>
   </DialogActions>
 </Dialog>
</div>)}
    
    </>
   
  );
}