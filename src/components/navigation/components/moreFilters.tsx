import React from 'react';
import {Modal, Typography, Fade, Button, Divider, Icon, MenuItem, Slider} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {useStyles} from './moreFilters.style';

function valuetext(value: number) {
  return `${value}+ PLN`;
}

const MoreFilter: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<number[]>([0, 100]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <div>
      <Button
        className={classes.main}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleOpen}
        endIcon={<Icon>expand_more</Icon>}
      >
        More Filters
      </Button>
      <Modal className={classes.modal} open={open} onClose={handleClose}>
        <Fade in={open}>
          <div className={classes.paper}>
            <Typography>More filters</Typography>
            <Divider />
            <div>
              <Typography>Salary expectations?</Typography>
              <Slider
                className={classes.slider}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                max={50000}
                min={0}
                step={1000}
              />
            </div>
            <Divider />
            <div>
              <Typography>Employment Type</Typography>
            </div>
            <div>
              <MenuItem>All</MenuItem>
              <MenuItem>B2B</MenuItem>
              <MenuItem>Permanent</MenuItem>
              <MenuItem>Mandate contract</MenuItem>
            </div>
            <Divider />
            <div>
              <Typography>Seniority</Typography>
            </div>
            <div>
              <MenuItem>All</MenuItem>
              <MenuItem>Junior</MenuItem>
              <MenuItem>Mid</MenuItem>
              <MenuItem>Senior</MenuItem>
            </div>
            <Button aria-controls="simple-menu" aria-haspopup="true">
              Clear filter
            </Button>
            <Button aria-controls="simple-menu" aria-haspopup="true">
              Show offers
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default MoreFilter;