import React from "react";
import PropTypes from "prop-types";
import { Box, Card, Typography, CardActions, Button } from "@material-ui/core";

function Repos({ url, name, description }) {
  return (
    <Box maxHeight="5em">
      <Card id="repo" variant="outlined">
        <Typography variant="h6" component="h2">
          {name}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {description}
        </Typography>
        <a href={url} target="_blank" rel="noreferrer">
          <CardActions>
            <Button size="small">Go to repository</Button>
          </CardActions>
        </a>
      </Card>
    </Box>
  );
}

Repos.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default Repos;
