import React from 'react';
import './Sikayet.scss'; // Fayl adını düzgün yazdığınıza əmin olun

const Sikayet = () => {
  return (
    <>
       <h2>Şikayət və təkliflər</h2>
      <section className='problem'>
        <fieldset>
       
          <div className="sikayet-div1">
            <form  className="sikayet-f1"action="">
              <p>Ad soyad</p>
              <input type="text"  placeholder="Ad"name="fullname" id="fullname" />
             
            </form>
            <form className="sikayet-f2" action="">
            <p>Əlaqə nömrəsi</p>
            <input placeholder='Əlaqə nömrəsi' type="number" name="phone" id="phone" />
            </form>
          </div>
          <div className="sikayet-div2">
            <p>Şikayətiniz / Təklifiniz</p>
            <input name="suggestion" id="suggestion" />
          </div>
          <button>Göndər</button>
        </fieldset>
      </section>
    </>
  );
}

export default Sikayet;
