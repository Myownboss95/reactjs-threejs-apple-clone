function SoundSection() {

    const handleLearnMore = () => {
     const element = document.querySelector(".display-section");
     window.scrollTo({
        top: element?.getBoundingClientRect().bottom,
        left: 0,
        behavior:  "smooth"
     })
    }
    return ( 
        
    <div className="sound-section wrapper">
        <div className="body">
            <div className="sound-section-content content">
                <h2 className="title">New sound system</h2>
                <p className="text">Feel Free</p>
                <span className="description">
        from $20/mo you can own an iphone before you can trade for a macbook pro
      </span>
      <ul className="links">
        <li>
            <button className="button">Buy</button>
            
        </li>
        <li>
            <a className="link" onClick={handleLearnMore}>Learn More</a>
        </li>
      </ul>
            </div>
        </div>
    </div> 
    );
}

export default SoundSection;