import React, { memo, useState } from 'react';
import Popover from '@mui/material/Popover';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import Menu from '@mui/material/Menu';
import CachedIcon from '@mui/icons-material/Cached';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import * as Yup from 'yup';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { yupResolver } from '@hookform/resolvers/yup';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import { FilterSearchStyles } from './Table.style';
import BaseStyles from 'styles/Base.styles';

interface PropTypes {
  dataSource: any[];
  selected: any;
  open: boolean;
  anchorEl: any;
  handleSetAnchorEl: (value: any) => void;
  handleSetFilterData: (value: any) => void;
}
const common = [
  { label: 'Gần đúng', value: 'eq' },
  { label: 'Nhỏ hơn', value: 'lte' },
];
const columnField = [
  {
    label: 'Người tạo',
    id: 1,
  },
  {
    label: 'Ngày tạo',
    id: 2,
  },
  {
    label: 'Mô tả',
    id: 3,
  },
  {
    label: 'Ngày cập nhật',
    id: 4,
  },
  {
    label: 'Người cập nhật',
    id: 5,
  },
  {
    label: 'Tiêu đề',
    id: 6,
  },
  {
    label: 'Số yêu cầu',
    id: 7,
  },
  {
    label: 'Ngày bắt đầu',
    id: 8,
  },
  {
    label: 'Ngày kết thúc',
    id: 9,
  },
];
const FilterSearch: React.FC<PropTypes> = ({
  dataSource,
  selected,
  anchorEl,
  open,
  handleSetAnchorEl,
  handleSetFilterData,
}) => {
  const [columnChecked, setColumnChecked] = useState<number[]>([columnField[0].id, columnField[1].id]);
  const [anchorElColumn, setAnchorElColumn] = useState<HTMLButtonElement | null>(null);
  const openAddField = Boolean(anchorElColumn);
  const { classes } = FilterSearchStyles();
  const { classes: baseClasses } = BaseStyles();
  const schema = Yup.object().shape({
    column: Yup.array().of(
      Yup.object().shape({
        idColumn: Yup.number(),
        name: Yup.string().required(''),
        condition: Yup.object().shape({
          label: Yup.string(),
          value: Yup.string().required(''),
        }),
        value: Yup.string().required(''),
      }),
    ),
  });
  const { control, register } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      column: [
        {
          name: columnField[0].label,
          condition: common[0],
          value: 'tét',
          idColumn: columnField[0].id,
        },
        {
          name: columnField[1].label,
          condition: common[1],
          value: '',
          idColumn: columnField[1].id,
        },
      ],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'column',
  });
  const handleClose = () => {
    handleSetAnchorEl(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElColumn(event.currentTarget);
  };
  const handleCloseAppendField = () => {
    setAnchorElColumn(null);
  };
  const handleAddField = (event: any, data: any) => {
    const value = event.target.checked;
    const existIndex = columnChecked.indexOf(data.idColumn);
    const existFieldIndex = fields.findIndex((item) => item.idColumn === data.idColumn);
    console.log('existFieldIndex',existFieldIndex);
    if (value && existIndex < 0) {
      setColumnChecked((prevState) => [...prevState, data.idColumn]);
      append(data);
      return;
    }
    if (existIndex > -1 && existFieldIndex > -1) {
      setColumnChecked((prevState) => {
        prevState.splice(existIndex, 1);
        return prevState;
      });
      remove(existFieldIndex);
    }
  };
  console.log('col', columnChecked);
  console.log('field', fields);

  const handleRenderIconRemove = (index: number) => {
    if (index > 1) {
      return (
        <Button
          sx={{ minWidth: 0, paddingLeft: 1 }}
          onClick={() => {
            setColumnChecked((prevState) => {
              prevState.splice(index, 1);
              return prevState;
            });
            remove(index);
          }}
          className="btn-filter"
        >
          <CloseOutlinedIcon style={{ color: 'gray' }} fontSize="small" />
        </Button>
      );
    }
    return null;
  };
  const handleReset = () => {
    console.log('columnChecked', columnChecked);
    const data = columnChecked.filter((item) => {
      if (item > 1) return true;
    });
    console.log('data', data);
    remove(data);
    setColumnChecked([columnField[0].id, columnField[1].id]);
  };
  return (
    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
      <Box className={classes.boxContent}>
        <Grid container>
          <Grid className={classes.leftContainer} item xs={12} sm={3}>
            <Box className={classes.leftContent}>
              <Box p={2}>
                <Typography>LỌC VÀ TÌM KIẾM</Typography>
              </Box>
              <List>
                {dataSource.map((item: any) => (
                  <ListItem key={item.key}>
                    <ListItemButton selected={selected.key === item.key} onClick={() => handleSetFilterData(item)}>
                      <ListItemText primary={item.title} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Box padding={3}>
              <Grid container spacing={3}>
                {fields.map((field, index: number) => {
                  return (
                    <Grid key={field.id} item xs={12}>
                      <Controller
                        render={({ field }) => <Typography>{field.value}</Typography>}
                        control={control}
                        name={`column.${index}.name`}
                      />

                      <Box paddingTop={1} display={'flex'} flexDirection="row" alignItems={'center'}>
                        <Controller
                          render={({ field }) => {
                            return (
                              <Autocomplete
                                disableClearable
                                classes={{ paper: baseClasses.paperShadow }}
                                {...field}
                                onChange={(event: any, value: any) => {
                                  field.onChange(value);
                                }}
                                options={common}
                                getOptionLabel={(option) => option.label}
                                renderInput={(params) => <TextField className={classes.inputBox} {...params} />}
                              />
                            );
                          }}
                          control={control}
                          name={`column.${index}.condition`}
                        />
                        <TextField
                          fullWidth
                          sx={{ paddingLeft: 2 }}
                          className={classes.inputBox}
                          {...register(`column.${index}.value`)}
                        />
                        {handleRenderIconRemove(index)}
                      </Box>
                    </Grid>
                  );
                })}
                <Grid item xs={12}>
                  <Box display={'flex'} alignItems={'center'}>
                    <Button onClick={handleClick} className={classes.btnTransparent} variant="text">
                      Thêm trường
                    </Button>
                    <Button onClick={handleReset} className={classes.btnTransparent} variant="text">
                      Khôi phục mặc định
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box display={'flex'} alignItems={'center'} justifyContent={'flex-end'}>
                    <Button
                      sx={{
                        paddingRight: '24px !important',
                        color: 'gray',
                      }}
                      startIcon={<CachedIcon />}
                      className={classes.btnTransparent}
                      variant="text"
                    >
                      Làm mới
                    </Button>
                    <Button variant="contained">Tìm kiếm</Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Popover
              className={classes.popupAddField}
              open={openAddField}
              anchorEl={anchorElColumn}
              onClose={handleCloseAppendField}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <Box className={classes.fieldsBoxContainer}>
                <Grid container>
                  {columnField.map((item, index) => (
                    <Grid key={item.id} item xs={12} sm={3}>
                      <FormControlLabel
                        onChange={(e: any) => {
                          handleAddField(e, {
                            name: item.label,
                            condition: common[0],
                            value: '',
                            idColumn: item.id,
                          });
                        }}
                        checked={columnChecked.includes(item.id)}
                        control={<Checkbox />}
                        label={item.label}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Popover>
          </Grid>
        </Grid>
      </Box>
    </Menu>
  );
};

export default memo(FilterSearch);
