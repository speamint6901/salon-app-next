import { Image, Card, Grid, Button } from "@nextui-org/react";

const Home = () => {
  return (
    <Grid.Container alignItems="center" xl={12}>
      <Image
        width={1500}
        height="auto"
        src="/images/nasumo_main.png"
        alt="Default Image"
        objectFit="cover"
        autoResize={true}
      />
      <Grid.Container alignItems="center" css={{ position: "relative" }}>
        <Card css={styleObj.cardMain}>
          <Grid.Container gap={1} justify="flex-start">
            <Grid xs={1.3}>
              <Button css={styleObj.categoryBtn} auto>
                エステ
              </Button>
            </Grid>
            <Grid xs={1.3}>
              <Button css={styleObj.categoryBtn} auto>
                リラク
              </Button>
            </Grid>
            <Grid xs={1.3}>
              <Button css={styleObj.categoryBtn} auto>
                ネイル
              </Button>
            </Grid>
            <Grid xs={1.3}>
              <Button css={styleObj.categoryBtn} auto>
                まつげ
              </Button>
            </Grid>
          </Grid.Container>
          <Card.Body>
            <Button></Button>
          </Card.Body>
        </Card>
      </Grid.Container>
    </Grid.Container>
  );
};

export default Home;

const styleObj = {
  cardMain: {
    maxHeight: "auto",
    height: "auto",
    padding: 20,
    alignContent: "start",
    alignItems: "start",
    margin: "0 auto",
    "@lg": {
      maxWidth: 1000,
      zIndex: 9999,
      position: "absolute",
      top: -20,
    },
    left: 0,
    right: 0,
  },
  categoryBtn: {
    color: "blue",
    backgroundColor: "#fff",
    border: "solid",
    borderColor: "blue",
    borderRadius: 20,
  },
};
