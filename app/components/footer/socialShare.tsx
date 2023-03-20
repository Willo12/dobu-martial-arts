import {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton,
  FacebookIcon,
  TwitterIcon,
  PinterestIcon,
} from "react-share";

const Share = () => {
  return (
    <div className=" flex items-center justify-center">
      <div className="flex">
        <FacebookShareButton className="mx-2" url="https://google.com">
          <FacebookIcon round size={60} />
        </FacebookShareButton>

        <TwitterShareButton className="mx-2" url="https://google.com">
          <TwitterIcon round size={60} />
        </TwitterShareButton>

        <PinterestShareButton
          className="mx-2"
          url="https://google.com"
          media="https://lumiere-a.akamaihd.net/v1/images/spiderman-characterthumbnail-spiderman_3a64e546.jpeg?region=0%2C0%2C300%2C300"
        >
          <PinterestIcon round size={60} />
        </PinterestShareButton>
      </div>
    </div>
  );
};

export default Share;
