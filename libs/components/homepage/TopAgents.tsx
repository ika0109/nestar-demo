import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Box, Link, Stack } from "@mui/material";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TopAgentsCard from "./TopAgentsCard";

const TopAgents = () => {
  const [topAgents, setTopAgents] = useState<number[]>([1, 2, 3, 4, 5, 6, 7]);
  return (
    <Stack className={"top-agents"}>
      <Stack className={"container"}>
        <Stack className={"info-box"}>
          <Box className={"left"}>
            <span>Top Agents</span>
            <p>These are our best Top Agents</p>
          </Box>
          <Box className={"right"}>
            <div className={"more-box"}>
              <Link href="/agent">
                <span>See All Categories</span>
              </Link>
              <img src={"/img/icons/rightup.svg"} />
            </div>
          </Box>
        </Stack>
        <Stack className={"wrapper"}>
          {topAgents.length === 0 ? (
            <Box className={"empty-list"}>Agents Empty</Box>
          ) : (
            <Box className="cards-wrapper">
              <Box className="switch-btn swiper-agents-prev">
                <ArrowBackIosNewIcon />
              </Box>
              <Box className="card-wrapper">
                <Swiper
                  className={"top-agents-swiper"}
                  slidesPerView={"auto"}
                  spaceBetween={29}
                  navigation={{
                    nextEl: ".swiper-agents-next",
                    prevEl: ".swiper-agents-prev",
                  }}
                  pagination={{
                    el: ".swiper-popular-pagination",
                  }}
                >
                  {topAgents.map((agent, index) => {
                    return (
                      <SwiperSlide key={index} className="top-agents-slide">
                        <TopAgentsCard />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </Box>
              <Box className="switch-btn swiper-agents-next">
                <ArrowBackIosNewIcon />
              </Box>
            </Box>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TopAgents;