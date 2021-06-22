import React, { useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import { TextField, Button, Box, Container } from "@material-ui/core";

function Search() {
  const [searchkeyword, setKeyword] = useState("");
  const [input, setInput] = useState("");
  const [clicked, setClicked] = useState(false);

  return (
    <Box id="search-page">
      <Header />
      <Container maxWidth="md">
        <Box display="flex" marginTop="2em" justifyContent="center">
          <Box width={0.7}>
            <TextField
              fullWidth
              variant="filled"
              id="search"
              placeholder="User"
              value={input}
              onChange={(e) => {
                setInput(e.target.value), setClicked(false);
              }}
            />
          </Box>
          <Button
            size="large"
            color="primary"
            variant="contained"
            onClick={() => {
              setKeyword(input), setClicked(true);
            }}
          >
            Search
          </Button>
        </Box>
      </Container>
      <Box width={1} display="flex" justifyContent="center" marginTop="5em">
        {clicked && <Card username={searchkeyword} />}
      </Box>
    </Box>
  );
}

export default Search;
