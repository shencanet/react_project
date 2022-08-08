import React from 'react'
import IMG1 from "../../imagenes/medusa1.jpg";
import IMG2 from "../../imagenes/medusa5.jpg";
import IMG4 from "../../imagenes/medusa4.jpg";

export const ProductosLista = () => {
  return (
    <>
    <h1 className='title'>Productos</h1>
    <div className='productos'>
    <div className='producto'>
    <a href='#'>
    <div className='producto__img'>
    <img src={IMG1} alt="lista" />
    </div>
    </a>
    <div className='producto__footer'>
      <h1>Title</h1>
      <p>Categoria</p>
      <p className='price'>300$</p>
    </div>
    <div  className='buttom'>
      <button className='btn'>Añadir al carrito</button>
      
      <div>
      <a href='#' className='btn' >Vista</a>
      </div></div>
    </div>
    
    <div className='producto'>
    <a href='#'>
    <div className='producto__img'>
    <img src={IMG1} alt="lista" />
    </div>
    </a>
    <div className='producto__footer'>
      <h1>Title</h1>
      <p>Categoria</p>
      <p className='price'>300$</p>
    </div>
    <div  className='buttom'>
      <button className='btn'>Añadir al carrito</button>
      
      <div>
      <a href='#' className='btn' >Vista</a>
      </div></div>
    </div>

    <div className='producto'>
    <a href='#'>
    <div className='producto__img'>
    <img src={IMG1} alt="lista" />
    </div>
    </a>
    <div className='producto__footer'>
      <h1>Title</h1>
      <p>Categoria</p>
      <p className='price'>300$</p>
    </div>
    <div  className='buttom'>
      <button className='btn'>Añadir al carrito</button>
      
      <div>
      <a href='#' className='btn' >Vista</a>
      </div></div>
    </div>
    
    <div className='producto'>
    <a href='#'>
    <div className='producto__img'>
    <img src={IMG1} alt="lista" />
    </div>
    </a>
    <div className='producto__footer'>
      <h1>Title</h1>
      <p>Categoria</p>
      <p className='price'>300$</p>
    </div>
    <div  className='buttom'>
      <button className='btn'>Añadir al carrito</button>
      
      <div>
      <a href='#' className='btn' >Vista</a>
      </div></div>
    </div>

    <div className='producto'>
    <a href='#'>
    <div className='producto__img'>
    <img src={IMG1} alt="lista" />
    </div>
    </a>
    <div className='producto__footer'>
      <h1>Title</h1>
      <p>Categoria</p>
      <p className='price'>300$</p>
    </div>
    <div  className='buttom'>
      <button className='btn'>Añadir al carrito</button>
      
      <div>
      <a href='#' className='btn' >Vista</a>
      </div></div>
    </div>

    <div className='producto'>
    <a href='#'>
    <div className='producto__img'>
    <img src={IMG1} alt="lista" />
    </div>
    </a>
    <div className='producto__footer'>
      <h1>Title</h1>
      <p>Categoria</p>
      <p className='price'>300$</p>
    </div>
    <div  className='buttom'>
      <button className='btn'>Añadir al carrito</button>
      
      <div>
      <a href='#' className='btn' >Vista</a>
      </div></div>
    </div>
    
    
    
    </div>
    
    
    </>
  )
}

