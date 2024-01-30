import Card from "./Card";

function MainContent() {
  return (
    <main className="cars-main-content">
      <Card
        title="Mercedes GLE350"
        price={250}
        imageUrl="https://imageonthefly.autodatadirect.com/images/?IMG=USC60MBS491A021001.png"
      />
        <Card
        title="Mercedes Sprinter"
        price={200}
        imageUrl="https://www.motortrend.com/uploads/sites/10/2015/11/2015-mercedes-benz-sprinter-passenger-van-angular-front.png"
      />
        <Card
        title="Mercedes Roadster"
        price={350}
        imageUrl="https://purepng.com/public/uploads/large/515062776064wdimnkyh3cpcdlwrblcrkiimfolbpelmdz0bm1wuykc8xdxgpeg3waxradzyllhtnafudgd18kebio2vrc5nlryejdaburnn5wx.png"
      />
        <Card
        title="Mercedes G550"
        price={500}
        imageUrl="https://www.pngall.com/wp-content/uploads/2016/05/Mercedes-Benz-PNG-Picture.png"
      />
    </main>
  );
}

export default MainContent;
