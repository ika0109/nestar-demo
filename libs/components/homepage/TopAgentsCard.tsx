import { Box, Stack } from "@mui/material";

const TopAgentsCard = () => {
  return (
    <Stack className={"top-agent-card"}>
      <Box
        className={"card-img"}
        style={{
          backgroundImage: 'url("/img/profile/girl.svg")',
        }}
      ></Box>
      <Box className={"info"}>
        <strong className={"name"}>Martin</strong>
        <p className={"type"}>Agent</p>
      </Box>
    </Stack>
  );
};

export default TopAgentsCard;