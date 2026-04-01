// types
type PriceTier = {
  minutes: number;
  price: number;
}

type MassageTypeProps = {
  name: string;
  description: string;
  priceTiers: PriceTier[];
  imageUrl?: string;
}

function MassageType({
  name,
  description,
  priceTiers,
  imageUrl
}: MassageTypeProps) {
  return (
    <article>
        {imageUrl && <img src={imageUrl} alt={name} />}

        <h2>{name}</h2>

        <p>{description}</p>

        <div>
          {priceTiers.map((tier) => (
            <div key={tier.minutes}>
              <span>{tier.minutes} Minuten</span>
              <span>{tier.price} €</span>
            </div>
          ))}
        </div>
    </article>
  );
}

export default MassageType
