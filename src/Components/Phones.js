import "../Styles/phones.css"

export default function Phones() {
    return (<>
        <div className="contact-container">
        <div className="socials-container">
        <p >facebook</p>
        <p>instragram</p>
        <p>twitter</p>
        <p>linkedin</p>
        </div>

        <div className="phones-container">
        <img src={"/phones-image.png"} ></img>
        </div>
        </div>
        </>
    )
};