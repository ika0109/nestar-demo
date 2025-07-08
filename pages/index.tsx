import { Stack } from "@mui/material";
import { NextPage } from "next";
import withLayoutMain from "./libs/components/layout/Layouthome";

const Home: NextPage = () => {
  return (
    <Stack className="home-page">
      <Stack className="container">Popular Properties</Stack>

      <Stack className="container">Top Agents</Stack>

      <Stack className="container">Top Properties</Stack>
    </Stack>
  );
};

export default withLayoutMain(Home);
