import 'boxicons';

export const BoxIcons = () => {
    return (
        <>
            <div className="cajaIcons">
                <a href="https://www.instagram.com" target='_blank' className="aIcon animate__pulse">
                    <box-icon color='#ffff' type='logo' name='instagram'></box-icon>
                </a>
                <a href="https://www.facebook.com" target='_blank' className="aIcon">
                    <box-icon color='#ffff' type='logo' name='facebook-circle'></box-icon>
                </a>
                <a href="https://www.twitter.com" target='_blank' className="aIcon">
                    <box-icon color='#ffff' type='logo' name='twitter'></box-icon>
                </a>
                <a href="https://www.whatsapp.com" className="aIcon" target='_blank'>
                    <box-icon color='#ffff' type='logo' name='whatsapp'></box-icon>
                </a>
            </div>
        </>
    )
}
