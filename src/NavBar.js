import styles from './navBar.module.css';

const NavBar = () => {
    return (
        <>
        <div className={styles.navBar}>
                <span className={styles.title}>MovieFlex</span>

                <div className={styles.cart} >
                    <div >
                        <img src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png" alt="cart"  id={styles.cartImage} />
                    </div>
                    <div className={styles.cartCount}>5</div>
                </div>
        </div>
        </>
    )
}

export default NavBar;