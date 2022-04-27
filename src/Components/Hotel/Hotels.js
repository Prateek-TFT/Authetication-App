import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

export default function Hotels(props) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        minWidth: 345,
        maxHeight: 420,
        minHeight: 420,
        margin: 2,
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={props.src}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.decription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
