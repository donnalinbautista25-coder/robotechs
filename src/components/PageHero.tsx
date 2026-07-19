type PageHeroProps = {
  title: string;
  description: string;
};

export default function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow fade-up">Robotech</p>
        <h1 className="fade-up-delay">{title}</h1>
        <div className="gold-rule gold-rule--animated" />
        <p className="fade-up-delay-2">{description}</p>
      </div>
    </section>
  );
}
