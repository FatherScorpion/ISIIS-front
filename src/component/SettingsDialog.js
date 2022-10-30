import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import DoneIcon from '@mui/icons-material/Done';
import {Grid, Row, Col} from 'react-bootstrap';

function SettingsDialog(props) {
  const { onClose, selectedValue, open } = props;
  const [id, setId] = React.useState(selectedValue);

  const handleClose = () => {
    onClose(id);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>設定</DialogTitle>
      <Row style={styles.contaier}>
        <Col>
          <TextField
            id="outlined-name"
            label="ID"
            defaultValue={selectedValue}
            onChange={(event) => setId(event.target.value)}
            sx={{margin: '5px'}}
          />
          <Fab color="primary" onClick={handleClose} size="small" sx={{margin: '5px'}}>
            <DoneIcon />
          </Fab >
        </Col>
      </Row>
    </Dialog>
  );
}

const styles = StyleSheet.create({
  contaier: {
    justifyContent: 'end'
  }
})

export default SettingsDialog