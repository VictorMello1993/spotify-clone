
import SingleItem from "./SingleItem";

export default function ItemList(){
  return (
      <div className="item-list">
            <div className="item-list__header">
              <h2>Artistas populares</h2>
              <a href="/" className="item-list__header">
                Mostrar tudo
              </a>
            </div>
            <div className="item-list__container">                  
              <SingleItem/>
              <SingleItem/>
              <SingleItem/>
              <SingleItem/>
              <SingleItem/>                                
            </div>
          </div>
  )
}