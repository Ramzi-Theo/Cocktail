import { Favorite, MoreVert, Share } from '@mui/icons-material';
import { Avatar,Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import React from 'react';
const Posts=()=>{
    return(
        <Card sx={{margin:5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor:"red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="October 05, 2022"
      />
      <CardMedia
        component="img"
        height="200"
        image="https://www.swan-brand.co.uk/wp-content/uploads/2022/10/c34c7af8698abe2cabd2500f302cbd7c-895x775-c-default.jpg"
        alt="Description" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <IconButton aria-label="share">
          <Share/>
        </IconButton>
        </CardActions>
    </Card>
    )
}
export default Posts