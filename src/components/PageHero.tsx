type PageHeroProps = {
  title: string;
  description: string;
};

export default function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">Robotech</p>
        <h1>{title}</h1>
        <div className="accent-rule" />
        <p>{description}</p>
      </div>
    </section>
  );
}
