export default function TripCard({ data }) {
  return (
    <>
      {data.map((element) => (
        <div className="card" key={element.label}>
          <div className="card-image">
            <img
              src="https://a0.muscache.com/im/pictures/monet/Luxury-570973165437649140/original/704468c1-47cd-44e0-9d1a-3ea3db51a2e6?im_w=720"
              width={`100%`}
              height={290}
              alt=""
            />
            <div className="card-buttons">
              <a
                href={`https://wa.me/+524686896643?text=Hola,%0a%0aestoy interesado en el viaje hacia ${element.label} en el hotel ${element.hotel} para las fechas del ${element.fecha_inicio} al ${element.fecha_final}`}
              >
                <button className="whatsapp">
                  <i className="fa fa-whatsapp my-float"></i>
                </button>
              </a>
            </div>
          </div>
          <div className="content">
            <div className="card-header">
              <h3 className="name">{element.label}</h3>
              <div className="card-header-star">
                <img src="star.png" width={20} height={20}></img>
                <span>{element.estrellas}</span>
              </div>
            </div>
            <div className="hotel">
              <span className="hotel">Hotel: {element.hotel}</span>
            </div>
            <div className="fechas">
              Del: <span className="fecha">{element.fecha_inicio}</span> al:{' '}
              <span className="fecha">{element.fecha_final}</span>
            </div>
            <div className="prices">
              <div className="adult">
                <div className="prices-title">Adultos</div>
                <div className="prices-price">${element.precio.adulto}</div>
              </div>
              <div className="kid">
                <div className="prices-title">Menores</div>
                <div className="prices-price">${element.precio.adulto}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
