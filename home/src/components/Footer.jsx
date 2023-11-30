export default function Footer() {
    return (
        <div className="footer">
            <div className="footer--name">Bathinjan {new Date().getFullYear()}</div>
            <div className="footer--logos">
                <ion-icon name="logo-github" size="large"></ion-icon>
                <ion-icon name="logo-linkedin" size="large"></ion-icon>
                <ion-icon name="mail-outline" size="large"></ion-icon>
            </div>
        </div>
    );
}