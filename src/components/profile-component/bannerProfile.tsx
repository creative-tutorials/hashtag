export default function BannerProfile({bannerImg}:any) {
  return (
    <div className="banner-profile">
      <img src={bannerImg} alt="banner image" loading="lazy" />
    </div>
  );
}
