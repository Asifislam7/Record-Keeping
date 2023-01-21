import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
function Fields({name,email,index}) {
  return (
   
    <div className="printvalues">
      <h4>{name}</h4>
      <h4>{email}</h4>
      <Stack>
      <Button variant="contained" color="error">
        Remove
      </Button>
      </Stack>
    </div>
  )
}

export default Fields
