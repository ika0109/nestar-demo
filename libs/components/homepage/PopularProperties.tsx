import property from "@/pages/property";
import { Box, Link, Stack } from "@mui/material";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PopularPropertyCard from "./PopularPropertyCard";

type PopularPropertiesProps = {
  initialInput?: number[];
};

const PopularProperties = ({
  initialInput = [1, 2, 3, 4, 5, 6, 7],
}: PopularPropertiesProps) => {
  const [popularProperties, setPopularProperties] =
    useState<number[]>(initialInput);

  return (
    <Stack className={"popular-properties"}>
      <Stack className={"container"}>
        <Stack className={"info-box"}>
          <Box className={"left"}>
            <span>Popular Properties</span>
            <p>Aliquam lacinia diam quis lacus euismod</p>
          </Box>
          <Box className={"right"}>
            <div className={"more-box"}>
              <Link href="/property">
                <span>See All Categories</span>
              </Link>
              <img src={"/img/icons/rightup.svg"} />
            </div>
          </Box>
        </Stack>
        <Stack className={"card-box"}>
          {popularProperties.length === 0 ? (
            <Box className={"empty-list"}>Popular Empty</Box>
          ) : (
            <Swiper
              className={"popular-property-swiper"}
              slidesPerView={"auto"}
              spaceBetween={25}
              navigation={{
                nextEl: ".swiper-popular-next",
                prevEl: ".swiper-popular-prev",
              }}
              pagination={{
                el: ".swiper-popular-pagination",
              }}
            >
              {popularProperties.map((property, index) => {
                return (
                  <SwiperSlide key={index} className="popular-property-slide">
                    <PopularPropertyCard />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PopularProperties;