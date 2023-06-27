import styled from 'styled-components';

const Nav = styled.div`
height:70px;
background-color: #1877f2;
display:flex;
justify-content:space-between;
align-items:center
`



const NavBar = () => {
    return (
        <>
            <Nav>
                <span className='title'>MovieFlex</span>
                <div className="cart" style={{marginBottom:'20px'}}>
                    <div className="cart-image" >
                        <img src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png" alt="cart" style={{ height: '40px' }} />
                    </div>

                    <div className="cart-count" style={{ marginTop: '-50px' , marginLeft:'40px' }}>5</div>
                </div>

            </Nav>

        </>
    )
}

export default NavBar;