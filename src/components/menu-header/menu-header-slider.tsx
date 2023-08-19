import { Carousel } from "@mantine/carousel";
import { useStyles } from "./menu-header-slider.styles";
import { Product, productTypes } from "../../shared/product-types";
import { Container } from "@mantine/core";
import { MenuHeaderItem } from "./menu-header-item";
import { MenuHeaderItemViewall } from "./menu-header-item-viewall";

interface Props {
  productType: Product["type"];
  preHighlight?: boolean;
  setOpened?: React.Dispatch<React.SetStateAction<boolean>>;
}

export function MenuHeaderSlider({
  productType,
  preHighlight,
  setOpened,
}: Props) {
  const { classes } = useStyles();
  return (
    <Carousel
      key={productType + "Carousel"}
      p={0}
      slideSize="23%"
      align="center"
      slidesToScroll={4}
      slideGap={10}
      controlSize={50}
      withIndicators
      withControls={false}
      classNames={{
        indicators: classes.indicators,
        indicator: classes.indicator,
      }}
    >
      {productTypes[productType].map((productFamily) => (
        <Carousel.Slide key={productType + productFamily + "slide"}>
          <Container p={0} h="100%">
            <MenuHeaderItem
              onClick={() => {
                setOpened?.((o) => !o);
              }}
              productFamily={productFamily}
              preHighlight={preHighlight}
              productType={productType}
            />
          </Container>
        </Carousel.Slide>
      ))}
      <Carousel.Slide key={productType + "all"}>
        <MenuHeaderItemViewall
          onClick={() => {
            setOpened?.((o) => !o);
          }}
          preHighlight={preHighlight}
          productType={productType}
        />
      </Carousel.Slide>
    </Carousel>
  );
}
