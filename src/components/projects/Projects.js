import React from 'react';
import './Projects.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Projects() {
  return (
    <>
    <div className='bold2' style={{marginLeft: '40%', marginTop: '50px', color: 'blueviolet'}}><h1>Recent Projects</h1></div>
      <div className="contain">
        <div>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="fe (8).jpeg"  // Update with actual image path
            title="Green Iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             Figma Project 1
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              I have create the following project with the help of html css.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
      



      <div style={{marginLeft:'40px'}}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="fe (9).jpeg"  // Update with actual image path
            title="Green Iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             Figma Project 2
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              I have create the following project with the help of html css.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>



      <div style={{marginLeft:'40px'}}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="fe (7).jpeg"  // Update with actual image path
            title="Green Iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             Student REG Form
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              I have create the following project with the help of html css.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>

      </div>
    </>
  );
}

