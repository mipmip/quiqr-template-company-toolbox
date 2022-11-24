import * as React from 'react';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

export default class ResourceCard extends React.Component {
  render(){

    return (
      <Card
        sx={{maxWidth: 500, height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <CardActionArea onClick={
          ()=>{
            if(this.props.itemData.actions.length > 0){
              window.open(this.props.itemData.actions[0].url)
            }
          }
          }>
        <CardMedia
          component="img"
          sx={{
            maxHeight: 200
          }}
          image={"/images/" + this.props.itemData.image}
          alt="random"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {this.props.itemData.title}
          </Typography>
          <Typography>
            {this.props.itemData.description}
          </Typography>
        </CardContent>
        </CardActionArea>
        <CardActions>
          {this.props.itemData.actions.map((actionItem) => (
            <Button key={actionItem.title}
              onClick={
                ()=>{
                  window.open(actionItem.url)
                }
              }
              size="small">{actionItem.title}</Button>
          ))}
        </CardActions>
      </Card>
    );
  }
}
